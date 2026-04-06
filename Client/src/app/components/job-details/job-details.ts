import { Component, OnInit, signal } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AplicatiiService } from '../../services/aplicatii-service';
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-job-details',
  imports: [AsyncPipe],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css',
})
export class JobDetails implements OnInit{
  job$!: Observable<Job>;
  jobId!: string;
  aplicatReusit = signal(false);
  aplicatEsuat = signal(false);
  aplicatDeja = signal(false);
  aplicatii: [] = []; 

  constructor(
    private joburiService: JoburiService, 
    private route: ActivatedRoute,
    private aplicatiiService: AplicatiiService,
    private authService: AuthService
  ) {}

  aplicaJob() {
    const user = this.authService.getUserLogat();

    const aplicatie = {
      jobId: this.jobId,
      userId: user?.id,
      data: new Date().toISOString(),
      status: "pending" as const,
    };

    this.aplicatiiService.verificareAplicare(this.jobId, aplicatie.userId).subscribe({
      next: (aplicatii) =>  
        { 
          if(aplicatii.length === 0 ) {
            this.aplicatiiService.aplica(aplicatie).subscribe({
              next: () => this.aplicatReusit.set(true),
              error: () => this.aplicatEsuat.set(true)
            })
      } else {
        this.aplicatDeja.set(true);
        this.aplicatReusit.set(false)
      }
    },
      error: () => this.aplicatEsuat.set(true),

    })
  }
  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id')!;
    this.job$ = this.joburiService.getJobById(this.jobId);
  }
}

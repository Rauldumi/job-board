import { Component, OnInit } from '@angular/core';
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
  jobId!: number;

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

    this.aplicatiiService.aplica(aplicatie).subscribe();
  }

  ngOnInit() {
    this.jobId = +this.route.snapshot.paramMap.get('id')!;
    this.job$ = this.joburiService.getJobById(this.jobId);
  }
}

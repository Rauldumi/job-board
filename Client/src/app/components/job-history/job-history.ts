import { Component, OnInit } from '@angular/core';
import { AplicatiiService } from '../../services/aplicatii-service';
import { JoburiService } from '../../services/joburi';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../services/auth';
import { Job } from '../../models/job.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-history',
  imports: [RouterLink],
  templateUrl: './job-history.html',
  styleUrl: './job-history.css',
})
export class JobHistory implements OnInit {
  joburi: Job[] = [];

  constructor(private aplicatiiService: AplicatiiService, private joburiService: JoburiService, private authService: AuthService) {}

  ngOnInit() {
    this.aplicatiiService.getAplicatiiByUserId(this.authService.getUserLogat()?.id).subscribe({
      next: (aplicatii) => {
        const observabile = aplicatii.map(aplicatie => this.joburiService.getJobById(aplicatie.jobId));
        forkJoin(observabile).subscribe(rezultate => {
          this.joburi = rezultate;
        })
      
      },
      error: () => {}
    })
  }
}

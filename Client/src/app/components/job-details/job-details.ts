import { Component, OnInit } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-details',
  imports: [],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css',
})
export class JobDetails implements OnInit{
  job: Job | null = null;
  constructor(private joburiService: JoburiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.joburiService.getJobById(id).subscribe(job => {
      this.job = job;
    })
  }
}

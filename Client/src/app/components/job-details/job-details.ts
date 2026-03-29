import { Component, OnInit } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../../models/job.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-job-details',
  imports: [AsyncPipe],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css',
})
export class JobDetails implements OnInit{
  job$!: Observable<Job>;

  constructor(
    private joburiService: JoburiService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.job$ = this.joburiService.getJobById(id);
  }
}

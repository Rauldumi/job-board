import { Component, OnInit } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { Route, Router, RouterLink } from '@angular/router';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-joburi',
  imports: [RouterLink,],
  templateUrl: './joburi.html',
  styleUrl: './joburi.css',
})
export class Joburi implements OnInit {
  constructor(private joburiService: JoburiService, private router: Router) {}
  joburi : Job[] = [];

  ngOnInit() {
    this.joburiService.getJoburi().subscribe(joburi => {
      this.joburi = joburi;
    });
  }
}

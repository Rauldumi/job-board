import { Component, OnInit } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { Route, Router, RouterLink } from '@angular/router';
import { Job } from '../../models/job.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-joburi',
  imports: [RouterLink, MatCardModule],
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

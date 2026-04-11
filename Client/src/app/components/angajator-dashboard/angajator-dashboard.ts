import { Component, OnInit, signal } from '@angular/core';
import { JoburiService } from '../../services/joburi';
import { Job } from '../../models/job.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-angajator-dashboard',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './angajator-dashboard.html',
  styleUrl: './angajator-dashboard.css',
})
export class AngajatorDashboard implements OnInit {

  constructor(private joburiService: JoburiService, private fb: FormBuilder) {}
  joburi = signal<Job[]>([]);
  jobDeEditat = signal<string | null>(null);
  jobEditat: Partial<Job> = {};
  arataFormular = signal(false);
  eroare: string = '';
  
  stergeJob(id: string) {
    this.joburiService.deleteJob(id).subscribe({
      next: () => this.joburi.set(this.joburi().filter(job => job.id !== id))
    })
  }

  creeazaJob() {
    if(this.jobForm.valid) {
      this.joburiService.createJob(this.jobForm.value).subscribe({
        next: (jobNou) => {
          this.joburi.update(joburi => [...joburi, jobNou]);
          this.arataFormular.set(false);
        }
      })
    }
  }

  editeazaJob() {
    if(!this.jobDeEditat()) return;
    else {
    this.joburiService.updateJob(this.jobDeEditat()!, this.jobEditat).subscribe({
      next: (jobActualizat) => {this.joburi.update(joburi => joburi.map(j => 
        j.id === jobActualizat.id ? jobActualizat : j
      ))
        this.jobDeEditat.set(null);
    }
    })
    }
  }

  jobForm!: FormGroup;

  ngOnInit() {
    this.joburiService.getJoburi().subscribe( {
      next: (rezultateJoburi) => this.joburi.set(rezultateJoburi)
    });

    this.jobForm = this.fb.group({
      titlu: ['', Validators.required],
      descriere: ['', Validators.required],
      companie: ['', Validators.required],
      dataPostarii: ['', Validators.required],
      esteActiv: ['', Validators.required]
    })
  }
}

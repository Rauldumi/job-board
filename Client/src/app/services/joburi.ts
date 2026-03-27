import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JoburiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getJoburi() {
    return this.http.get<Job[]>(`${this.apiUrl}/joburi`).pipe(
      map(joburi => joburi.filter(j => j.esteActiv))
    );
  }
}

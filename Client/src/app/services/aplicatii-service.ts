import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aplicatii } from '../models/aplicatii.model';

@Injectable({
  providedIn: 'root',
})
export class AplicatiiService {
  private apiUrl = 'http://localhost:3000';

  constructor (private http: HttpClient) {}

  aplica(values: Omit<Aplicatii, 'id'>) {
    return this.http.post<Aplicatii>(`${this.apiUrl}/aplicatii`, values);
  }
}

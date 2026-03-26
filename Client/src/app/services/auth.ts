import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { LoginCredentials } from '../models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  login(credentials: LoginCredentials) {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(users => users.find(u => u.email === credentials.email && u.parola === credentials.parola))
    );
  }

  logout() {
    localStorage.removeItem('userLogat');
  }

  salveazaUser(user: User) {
    localStorage.setItem("userLogat", JSON.stringify(user));
  }

  getUserLogat() {
    const date = localStorage.getItem("userLogat")
    if(date) {
      return JSON.parse(date)
    } else {
      return null;
    }
  }
}

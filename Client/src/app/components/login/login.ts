import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}
  eroare: string = '';

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(user => {
      if(user) {
        this.authService.salveazaUser(user)
        this.router.navigate(['/joburi'])
      } else {
        this.eroare = 'Email sau parola gresite.';
      }
    })
  }
  
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      parola: ['', [Validators.required]],
    })
  }
}

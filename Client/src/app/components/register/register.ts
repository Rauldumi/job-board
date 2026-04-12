import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  eroare:string = '';

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      nume: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      parola: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required],
    })
  }
}

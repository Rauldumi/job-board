import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Joburi } from './components/joburi/joburi';
import { RegisterComponent } from './components/register/register';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'joburi', component: Joburi}
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Joburi } from './components/joburi/joburi';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'joburi', component: Joburi}
];

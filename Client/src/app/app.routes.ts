import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Joburi } from './components/joburi/joburi';
import { RegisterComponent } from './components/register/register';
import { authGuard } from './auth-guard';
import { JobDetails } from './components/job-details/job-details';
import { JobHistory } from './components/job-history/job-history';
import { AngajatorDashboard } from './components/angajator-dashboard/angajator-dashboard';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'joburi', component: Joburi, canActivate:[authGuard]},
    {path: 'joburi/:id' , component: JobDetails, canActivate:[authGuard]},
    {path: 'istoric', component: JobHistory, canActivate:[authGuard]},
    {path: 'dashboard', component: AngajatorDashboard}
];

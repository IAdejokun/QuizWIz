import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {TutorDashboardComponent} from './pages/tutor/dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path:'',
        component:LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'dashboard/tutor',
        component: TutorDashboardComponent
    }
];

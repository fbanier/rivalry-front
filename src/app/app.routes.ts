import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Tournaments } from './pages/tournaments/tournaments';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path:"",component: Homepage},
    {path:"tournaments",component: Tournaments},
    {path:"login",component: Login},
    {path:"dashboard",component: Dashboard}
];

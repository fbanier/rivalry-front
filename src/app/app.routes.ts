import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Tournaments } from './pages/tournaments/tournaments';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Mytournaments } from './components/mytournaments/mytournaments';
import { Profile } from './components/profile/profile';
import { Tournamentdetail } from './pages/tournamentdetail/tournamentdetail';

export const routes: Routes = [
  {path:"",component: Homepage},
  {path:"tournaments",component: Tournaments},
  {path:"login",component: Login},
  {
    path: 'dashboard',
    component: Dashboard, 
    children: [
      { path: 'profile', component: Profile},
      { path: 'mytournaments', component: Mytournaments},
      { path: '', redirectTo: 'profile', pathMatch: 'full' } 
    ]
  },
  {path:"tournamentdetail",component: Tournamentdetail}
];

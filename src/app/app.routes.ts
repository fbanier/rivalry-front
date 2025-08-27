import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Tournaments } from './pages/tournaments/tournaments';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Mytournaments } from './components/mytournaments/mytournaments';
import { Profile } from './components/profile/profile';
import {Test} from './pages/test/test';

import { Tournamentdetail } from './pages/tournamentdetail/tournamentdetail';
import {isLoggedGuard} from './utils/guards/is-logged-guard';
import {loginRedirect} from './utils/guards/loginRedirect';


export const routes: Routes = [
  {path:"",component: Homepage},
  {path:"tournaments",component: Tournaments},
  {path:"login",component: Login,  canActivate: [loginRedirect]},
  {path:"test",component: Test},

  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'profile', component: Profile},
      { path: 'mytournaments', component: Mytournaments},
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ],
    canActivate: [isLoggedGuard]
  },
  {path:"tournamentdetail",component: Tournamentdetail}

];

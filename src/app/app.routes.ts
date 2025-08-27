import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Tournaments } from './pages/tournaments/tournaments';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Mytournaments } from './components/mytournaments/mytournaments';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  {path:"",component: Homepage},
  {path:"tournaments",component: Tournaments},
  {path:"login",component: Login},
  {
    path: 'dashboard',
    component: Dashboard, // celui qui contient ton code HTML plus haut
    children: [
      { path: 'profile', component: Profile},
      { path: 'mytournaments', component: Mytournaments},
      { path: '', redirectTo: 'profile', pathMatch: 'full' } // par défaut afficher Profile
    ]
  },
];

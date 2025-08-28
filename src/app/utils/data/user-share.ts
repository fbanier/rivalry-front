import { inject } from '@angular/core';
import {Data, Router} from '@angular/router';
import {Dashboard} from '../../pages/dashboard/dashboard';
import {User} from '../types/UserAuth';

export const userShare: Data = () : User | null => {
  const dashboard = inject(Dashboard)
  const router = inject(Router)
  const user = dashboard.getUser()

  if(user == null) {
    router.navigate(["/login"])
    return null
  }

  return user;
};

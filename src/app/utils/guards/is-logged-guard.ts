import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api-service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService)
  const router = inject(Router)
  const token = apiService.getToken()

  if(!token) {
    router.navigate(["/login","/register","/"])
    return false
  }

  return true;
};

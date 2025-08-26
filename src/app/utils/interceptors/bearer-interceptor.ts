import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiService } from '../services/api-service';

export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  const apiService = inject(ApiService)

  if (apiService.getToken()){
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiService.getToken()}`
      }
    })
    return next(cloned)
  }
  return next(req);
};

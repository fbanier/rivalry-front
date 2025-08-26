import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiServiceAdmin } from '../services/api-service-admin';

export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  const apiServiceAdmin = inject(ApiServiceAdmin)
  const apiServiceProtected = inject(ApiServiceAdmin)

  if (apiServiceAdmin.getToken() || apiServiceProtected.getToken() ){
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiServiceAdmin.getToken()}`
      }
    })
    return next(cloned)
  }
  return next(req);
};

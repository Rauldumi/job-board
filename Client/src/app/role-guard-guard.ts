import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(authService.getUserLogat()?.rol === route.data['rol']){
    return true;
  } else {
    router.navigate(['/joburi']);
    return false;
  }
};

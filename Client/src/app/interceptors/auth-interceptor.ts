import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userLogat = localStorage.getItem('userLogat');
  
  if(userLogat) {
    const reqUserLogat = req.clone({
        setHeaders: {
        Authorization : `Bearer ${userLogat}`
      }
    });
    return next(reqUserLogat);
  }
  return next(req);
};

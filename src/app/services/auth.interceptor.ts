// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HTTP_INTERCEPTORS,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { LoginService } from './login.service';

// @Injectable()
// export class AuthIntercepter implements HttpInterceptor {
//   constructor(private loginService: LoginService) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // add JWT token {local storage} request
//     let authRequest = req;
//     const token = this.loginService.getToken();
//     if (token != null) {
//       authRequest = authRequest.clone({
//         setHeaders: { Authorization: `Bearer ${token}` },
//       });
//     }
//     console.log(authRequest.headers);
//     return next.handle(authRequest);
//   }
// }

// export const authInterceptorProviders = [
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthIntercepter,
//     multi: true,
//   },
// ];


import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
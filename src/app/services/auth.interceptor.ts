import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add JWT token {local storage} request
    let authRequest = req;
    const token = this.loginService.getToken();
    if (token != null) {
      authRequest = authRequest.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(authRequest);
  }
}

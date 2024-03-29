import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../_service/auth.service';
import {setOffsetToUTC} from 'ngx-bootstrap/chronos/units/offset';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authenticationService.userValue;
    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith(environment.apiBaseUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.jwtToken}`
        }
      });
      console.log(request)
    }
    return next.handle(request);
  }
}

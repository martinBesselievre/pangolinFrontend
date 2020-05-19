import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry} from  'rxjs/operators'
@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
                console.error("Error Event");
            } else {
                switch (error.status) {
                    case 401:     
                        this.router.navigateByUrl("/login");
                        break;
                    case 404:     
                        this.router.navigateByUrl("/login");
                        break;
                }
            } 
        } else {
          //console.error("some thing else happened");
        }
        return throwError(error);
      })
    )
  }
}
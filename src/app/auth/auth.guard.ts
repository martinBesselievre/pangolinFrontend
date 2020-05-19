import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,  private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('USERID')) {
        return true;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
    constructor(public auth: AdminAuthService, public router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // this will be passed from the route config
      // on the data property
      const expectedRole = route.data.expectedRole;
      const token = localStorage.getItem('currentUserToken');
      // decode the token to get its payload
      const tokenPayload = decode(token);
      if ( !this.auth.isAuthenticated() || tokenPayload.type !== expectedRole) {
        if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        } else if (tokenPayload.type !== expectedRole) {
          this.router.navigate(['404'], { queryParams: { returnUrl: state.url }});
        }
        return false;
      }
      return true;
    }
  }

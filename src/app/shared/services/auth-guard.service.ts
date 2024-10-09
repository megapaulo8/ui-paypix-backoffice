import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService: LoginService, public router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      if (!this.loginService.userLoggedData) {
        if (route.url[0].path === 'login') return true;
        await this.router.navigateByUrl("/login");
        return false;
      } else if (this.loginService.userLoggedData && route.url[0].path === 'login') {
        await this.router.navigateByUrl("/logged");
        return true;
      }

      return true;
  }
}

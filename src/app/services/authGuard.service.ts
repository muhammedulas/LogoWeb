import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loginSvc: LoginServiceService, private router: Router) { }

  canActivate() {
    if (this.loginSvc.loggedIn === true) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}

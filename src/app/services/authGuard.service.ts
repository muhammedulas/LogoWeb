import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginServiceService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loginSvc:LoginServiceService ) { }

  canActivate() {
    return this.loginSvc.loggedIn

  }

}

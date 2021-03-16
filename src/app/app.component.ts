import { Component } from '@angular/core';
import { GlobalVarsService } from './globalVars.service';
import { Router } from '@angular/router';
import { LoginServiceService } from './services/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private global: GlobalVarsService, private router: Router, private loginSvc: LoginServiceService) {
    if(loginSvc.loggedIn == false){
      this.router.navigate(['login'])
    }
  }

}

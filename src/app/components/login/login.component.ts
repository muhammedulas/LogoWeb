import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/loginService.service';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginSvc: LoginServiceService) { }
  public usr:string = "LOGO";
  public pw:string = "LOGO";
  public frmNr = "1";
  public perNr = "1";

  ngOnInit() {
  }

  login(){
    this.loginSvc.login(this.usr,this.pw,this.frmNr,this.perNr).subscribe(resp=> console.log(resp.access_token))
  }

}

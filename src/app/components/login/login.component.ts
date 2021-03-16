import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/loginService.service';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { httpError } from 'src/app/models/httpErrModel';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import { tokenResp } from 'src/app/models/tokenResp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: httpError = new httpError;
  response: tokenResp = new tokenResp;
  constructor(private loginSvc: LoginServiceService, private router: Router) { }
  public usr: string = "";
  public pw: string = "";
  public frmNr: string = "";
  public perNr: string = "";



  ngOnInit() {
    console.log(this.error)
    console.log(this.response)
  }

  login() {
    this.loginSvc.login(this.usr, this.pw, this.frmNr, this.perNr).subscribe(
      resp => {
        this.response = resp;
        localStorage.setItem('Token', resp.access_token);
        this.loginSvc.changeLoggedInState();
        this.router.navigate(['/']);
        console.log(resp)
      },
      err => {
        this.error = err
        console.log(this.error)
        if (this.error.ok == false) {
          if (this.error.status == 400 || this.error.status == 0) {
            alert('Giriş Bilgilerinizi Kontrol Ediniz')
          }
        }
      }
    )

  }

}

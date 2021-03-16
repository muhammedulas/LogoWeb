import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/loginService.service';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { httpError } from 'src/app/models/httpErrModel';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: httpError = new httpError
  constructor(private loginSvc: LoginServiceService, private router: Router) { }
  public usr: string = "LOGO";
  public pw: string = "LOGO";
  public frmNr = "1";
  public perNr = "1";



  ngOnInit() {
    console.log(this.error)
  }

  login() {
    this.loginSvc.login(this.usr, this.pw, this.frmNr, this.perNr).subscribe(
      resp => localStorage.setItem('Token', resp.access_token),
      err => this.error = err
    )

    if (this.error.ok == false) {
      console.log(this.error)
      if (this.error.status == 400) {
        alert('Giriş Bilgilerinizi Kontrol Ediniz')
      }
      if (this.error.status == 0) {
        alert('Sunucu Bilgilerini Kontrol Ediniz')
      }

    }
    if (this.error.ok == true) {
      this.loginSvc.changeLoggedInState()
      this.router.navigate(['/'])
    }
    console.log(this.error)

  }

}

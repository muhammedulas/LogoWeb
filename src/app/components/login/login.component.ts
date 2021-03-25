import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/loginService.service';
import { FormsModule } from '@angular/forms';
import { httpError } from 'src/app/models/httpErrModel';
import { Router } from '@angular/router';
import { tokenResp } from 'src/app/models/tokenResp';
import { ToastrService } from 'node_modules/ngx-toastr';
import { GlobalVarsService } from 'src/app/globalVars.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: httpError = new httpError;
  response: tokenResp = new tokenResp;
  constructor(private loginSvc: LoginServiceService, private router: Router, private toast: ToastrService, private global: GlobalVarsService) { }
  public usr: string = "REST";
  public pw: string = "REST";
  public frmNr: string = "1";
  public perNr: string = "1";
  public isButtonDisabled: boolean = false



  ngOnInit() {
  }

  login() {
    this.isButtonDisabled = true
    this.loginSvc.login(this.usr, this.pw, this.frmNr, this.perNr).subscribe(
      resp => {
        this.response = resp;
        localStorage.setItem('Token', resp.access_token);
        this.loginSvc.changeLoggedInState();
        this.router.navigate(['/']);
        console.log(resp)
        this.toast.success('Giriş Başarılı', "", { positionClass: "toast-top-center", timeOut: 3000 })
        this.global.startTimer()
      },
      err => {
        this.error = err
        console.log(this.error)
        if (this.error.ok == false) {
          if (this.error.status == 400 || this.error.status == 0) {
            this.toast.error('Giriş Bilgilerinizi Kontrol Ediniz', "", { positionClass: "toast-top-center", timeOut: 3000 })
          }
        }
        this.isButtonDisabled = false
      }
    )

  }

}

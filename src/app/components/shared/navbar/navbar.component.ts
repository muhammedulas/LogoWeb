import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { GlobalVarsService } from 'src/app/globalVars.service';
import { LoginServiceService } from 'src/app/services/loginService.service';
import { MatTooltip } from '@angular/material/tooltip';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public tooltip: string = "";
  public username: string = "Geçersiz Kullanıcı";
  public sidenavToggle!: boolean;
  constructor(private globalvars: GlobalVarsService, private loginSvc: LoginServiceService) { }

  ngOnInit() {
    this.globalvars.getToggleInfo().subscribe(info => {
      this.sidenavToggle = info
    })
    this.username = this.loginSvc.userName
    this.tooltip = "Firma No: " + this.loginSvc.frmNo + "\r\nDönem No: " + this.loginSvc.perNo
  }

  toggle() {
    this.globalvars.toggle(!this.sidenavToggle)
  }

  logout() {
    this.loginSvc.logout();

  }

  stopIdleness() {

  }

}

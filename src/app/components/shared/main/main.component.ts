import { Component, OnInit } from '@angular/core';
import { MatList } from '@angular/material/list'
import { Router } from '@angular/router';
import { GlobalVarsService } from 'src/app/globalVars.service';
import { LoginServiceService } from 'src/app/services/loginService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public sidenavActive!: boolean;
  public events: string[] = [];
  public opened!: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private globalvars: GlobalVarsService) {}

  ngOnInit() {
    this.globalvars.getToggleInfo().subscribe(info => {
      this.sidenavActive = info
    })
  }

toggle(){
  this.globalvars.toggle(this.opened)
}
}

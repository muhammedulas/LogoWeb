import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/internal/operators/filter';
import { Router, RoutesRecognized } from '@angular/router';
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
  private routerEvents:any;
  public mainMenuActive:boolean = true;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private globalvars: GlobalVarsService, private router:Router) {
    router.events
   .subscribe((event) => {
    if(event instanceof RoutesRecognized){
      this.mainMenuActive = false;
      console.log(event)
      if(event.urlAfterRedirects == "/") this.mainMenuActive = true;
    }
   });
  }

  ngOnInit() {
    this.globalvars.getToggleInfo().subscribe(info => {
      this.sidenavActive = info
    })
    this.routerEvents = this.router.events.subscribe()
  }

toggle(){
  this.globalvars.toggle(this.opened)
}
}

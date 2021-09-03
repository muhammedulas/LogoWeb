import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/internal/operators/filter';
import { Router, RoutesRecognized } from '@angular/router';
import { GlobalVarsService } from 'src/app/globalVars.service';
import { LoginServiceService } from 'src/app/services/loginService.service';
import { menuAcces } from 'src/app/models/menuAccess';
import { ToastrService } from 'ngx-toastr';
import { RoutingServiceService } from 'src/app/services/routingService.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public sidenavActive!: boolean;
  public events: string[] = [];
  public opened!: boolean;
  private routerEvents: any;
  public mainMenuActive: boolean = false;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private globalvars: GlobalVarsService, private router: Router, private routeSvc: RoutingServiceService, private toast: ToastrService) {
    router.events
      .subscribe((event) => {
        if (event instanceof RoutesRecognized) {
          this.mainMenuActive = false;
          console.log(event)
          if (event.urlAfterRedirects == "/") this.mainMenuActive = true;
        }
      });
  }

  ngOnInit() {
    this.mainMenuActive = true;
    this.globalvars.getToggleInfo().subscribe(info => {
      this.sidenavActive = info
    })
    this.routerEvents = this.router.events.subscribe()
  }

  toggle() {
    this.globalvars.toggle(this.opened)
  }

  route(moduleNr: number, route: string) {
    this.routeSvc.route(moduleNr, route)
  }
}

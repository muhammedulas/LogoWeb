import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterEvent, RouterLink, RoutesRecognized } from '@angular/router';
import { RoutingServiceService } from 'src/app/services/routingService.service';
import { GlobalVarsService } from '../../globalVars.service';

@Component({
  selector: 'app-malzeme-yonetimi',
  templateUrl: './malzeme-yonetimi.component.html',
  styleUrls: ['./malzeme-yonetimi.component.scss']
})
export class MalzemeYonetimiComponent implements OnInit {
  public menuActive: boolean = false;
  private timer: number = 0

  constructor(private global: GlobalVarsService, private router: Router, private routeSvc: RoutingServiceService) { }

  ngOnInit() {
    if(this.router.url == "/malzeme-yonetimi") this.menuActive = true
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if(event.urlAfterRedirects == "/malzeme-yonetimi"){
          this.menuActive = true
        }
        else this.menuActive = false
      }
    })
  }
  
  route(moduleNr: number, route: string) {
    this.routeSvc.route(moduleNr, route)
  }

}

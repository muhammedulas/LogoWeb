import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { RoutingServiceService } from 'src/app/services/routingService.service';

@Component({
  selector: 'app-finans',
  templateUrl: './finans.component.html',
  styleUrls: ['./finans.component.scss']
})
export class FinansComponent implements OnInit {
  public menuActive = false;
  constructor(private router: Router, private routeSvc: RoutingServiceService) { }

  ngOnInit() {
    if (this.router.url == "/finans") this.menuActive = true

    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects == "/finans") {
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

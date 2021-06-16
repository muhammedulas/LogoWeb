import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-ithalat',
  templateUrl: './ithalat.component.html',
  styleUrls: ['./ithalat.component.scss']
})
export class IthalatComponent implements OnInit {
  public menuActive = false;
  constructor(private router:Router) { }

  ngOnInit() {
    if(this.router.url == "/ithalat") this.menuActive = true
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects == "/ithalat") {
          this.menuActive = true
        }
        else this.menuActive = false
      }
    })
  }

}

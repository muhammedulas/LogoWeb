import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-satinalma',
  templateUrl: './satinalma.component.html',
  styleUrls: ['./satinalma.component.scss']
})
export class SatinalmaComponent implements OnInit {
  public menuActive = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/satinalma") this.menuActive = true
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects == "/satinalma") {
          this.menuActive = true
        }
        else this.menuActive = false
      }
    })
  }

}

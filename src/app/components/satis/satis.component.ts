import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-satis',
  templateUrl: './satis.component.html',
  styleUrls: ['./satis.component.scss']
})
export class SatisComponent implements OnInit {
  public menuActive = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/satis") this.menuActive = true
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects == "/satis") {
          this.menuActive = true
        }
        else this.menuActive = false
      }
    })
  }

}

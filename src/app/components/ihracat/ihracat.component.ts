import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Router, RoutesRecognized } from '@angular/router';
import { GlobalVarsService } from 'src/app/globalVars.service';

@Component({
  selector: 'app-ihracat',
  templateUrl: './ihracat.component.html',
  styleUrls: ['./ihracat.component.scss']
})
export class IhracatComponent implements OnInit {
  public menuActive = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/ihracat") this.menuActive = true
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof RoutesRecognized) {
        if (event.urlAfterRedirects == "/ihracat") {
          this.menuActive = true
        }
        else this.menuActive = false
      }
    })
  }

}

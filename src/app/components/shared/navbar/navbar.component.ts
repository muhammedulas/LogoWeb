import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { GlobalVarsService } from 'src/app/globalVars.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public sidenavToggle!:boolean;
  constructor(private globalvars:GlobalVarsService) { }

  ngOnInit() {
    this.globalvars.getToggleInfo().subscribe(info=>{
      this.sidenavToggle = info
    })
  }

  toggle(){
    this.globalvars.toggle(!this.sidenavToggle)
  }

}

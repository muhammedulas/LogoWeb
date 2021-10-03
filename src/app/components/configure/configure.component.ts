import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button'
import { configModel } from '../../models/config';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { GlobalVarsService } from 'src/app/globalVars.service';
@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {
  public config: configModel = {
    rootUrl!: "",
    clientID!: "",
    clientSecret!: ""
  };

  constructor(private router: Router, private global: GlobalVarsService) { }

  ngOnInit() {
    this.config.rootUrl = localStorage.getItem('rootUrl'),
      this.config.clientID = "DATAMER";
    this.config.clientSecret = "m5QPX2Hf17JmMiuU0/w6PgGQeC1400KnvZei5WbzPaw=";
  }

  setConfigurations() {
    this.global.reloadNeeded = true
    this.router.navigate(['/login']).then(()=>{
      localStorage.setItem('rootUrl', this.config.rootUrl),
      localStorage.setItem('clientID', this.config.clientID),
      localStorage.setItem('clientSecret', this.config.clientSecret)
      window.location.href = "/"
    })
    
  }
}

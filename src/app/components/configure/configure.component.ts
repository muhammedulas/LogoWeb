import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button'
import { configModel } from './config';
@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {
  public config:configModel = {
    rootUrl! : "",
    clientID! : "",
    clientSecret! : ""
  };

  constructor() { }

  ngOnInit() {
    this.config.rootUrl = localStorage.getItem('rootUrl'),
    this.config.clientID = localStorage.getItem('clientID'),
    this.config.clientSecret = localStorage.getItem('clientSecret')
  }

  setConfigurations(){
    localStorage.setItem('rootUrl',this.config.rootUrl),
    localStorage.setItem('clientID',this.config.clientID),
    localStorage.setItem('clientSecret',this.config.clientSecret)
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { GlobalVarsService } from '../../globalVars.service';

@Component({
  selector: 'app-malzeme-yonetimi',
  templateUrl: './malzeme-yonetimi.component.html',
  styleUrls: ['./malzeme-yonetimi.component.scss']
})
export class MalzemeYonetimiComponent implements OnInit {
  private timer:number = 0

  constructor(private global:GlobalVarsService, private router:Router) { }

  ngOnInit() {

  }


}

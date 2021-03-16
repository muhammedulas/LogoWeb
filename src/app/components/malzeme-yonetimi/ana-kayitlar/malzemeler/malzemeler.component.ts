import { Component, OnInit } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/itemResp';
import { ItemsService } from '../../../../services/items.service';
import { MatCard } from '@angular/material/card';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-malzemeler',
  templateUrl: './malzemeler.component.html',
  styleUrls: ['./malzemeler.component.scss']
})
export class MalzemelerComponent implements OnInit {
  private response:itemResp = new itemResp
  public malzemeler:item[]=[];
  private errorMsg:string = ""
  private errorCode:string = ""
  constructor(private items:ItemsService) { }

  ngOnInit() {
    this.items.getItems().subscribe((resp)=>{
      this.response = resp
      console.log(this.response)
      this.malzemeler = this.response.items
      this.malzemeler.shift();
    })

  }


}

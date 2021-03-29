import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { item } from 'src/app/models/itemModel';
import { ItemsService } from 'src/app/services/items.service';
import { MalzemelerComponent, stockData } from '../malzemeler.component';

@Component({
  selector: 'app-dialog_Stock',
  templateUrl: './dialog_Stock.component.html',
  styleUrls: ['./dialog_Stock.component.scss']
})
export class Dialog_StockComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_StockComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: stockData,

  ) { }
  ngOnInit() {

  }
}

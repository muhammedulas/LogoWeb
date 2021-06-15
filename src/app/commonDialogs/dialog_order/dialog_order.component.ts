import { Component, OnInit } from '@angular/core';
import { salesOrder } from 'src/app/models/salesOrder';
import { transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-dialog_order',
  templateUrl: './dialog_order.component.html',
  styleUrls: ['./dialog_order.component.scss']
})
export class Dialog_orderComponent implements OnInit {
  public dataSet: salesOrder = new salesOrder();
  public displayedColumns = []
  constructor() { }

  ngOnInit() {
    this.dataSet = new salesOrder();
    this.dataSet.TRANSACTIONS.items[0] = new transaction();
  }

}

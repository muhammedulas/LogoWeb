import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { salesOrder } from 'src/app/models/salesOrder';
import { transaction } from 'src/app/models/transaction';
import { SalesOrdersService } from 'src/app/services/salesOrders.service';

@Component({
  selector: 'app-dialog_editInspectSalesOrder',
  templateUrl: './dialog_editInspectSalesOrder.component.html',
  styleUrls: ['./dialog_editInspectSalesOrder.component.scss']
})
export class Dialog_editInspectSalesOrderComponent implements OnInit {

  public oTransLines = new Subject<transaction[]>();
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectSalesOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: salesOrder,
    private toast: ToastrService,
    private svc: SalesOrdersService
  ) { }

  ngOnInit() {
    this.observeLines().subscribe(q => {
      this.data.TRANSACTIONS.items = q
    })
  }

  update() {
    this.svc.update(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }
  calculate() {
    let temp = {
      discount: 0,
      total: 0,
      vat: 0,
      totalNet: 0
    }
    this.data.TRANSACTIONS.items.forEach(t => {
      t.TOTAL = t.QUANTITY * t.PRICE
      t.EXCLINE_NET_DISC_AMOUNT = Math.round((t.TOTAL / 100) * t.DISCOUNT_RATE)
      t.VAT_AMOUNT = (t.QUANTITY * t.PRICE - t.EXCLINE_NET_DISC_AMOUNT) * (t.VAT_RATE / 100)
      t.TOTAL_NET = t.TOTAL + t.VAT_AMOUNT

      console.log(t.EXCLINE_NET_DISC_AMOUNT)

      temp.discount += t.EXCLINE_NET_DISC_AMOUNT
      temp.total += t.TOTAL - t.EXCLINE_NET_DISC_AMOUNT
      temp.vat += t.VAT_AMOUNT
      temp.totalNet += t.TOTAL_NET
    })

    this.data.TOTAL_DISCOUNTED = parseInt(temp.discount.toFixed(2))
    this.data.TOTAL_GROSS = parseInt(temp.total.toFixed(2))
    this.data.TOTAL_VAT = parseInt(temp.vat.toFixed(2))
    this.data.TOTAL_NET = parseInt(temp.totalNet.toFixed(2))
  }

  observeLines() {
    return this.oTransLines.asObservable()
  }

  newLine() {
    let line = new transaction();
    line.EXCLINE_NET_DISC_AMOUNT = 0;
    line.QUANTITY = 0;
    line.PRICE = 0;
    line.TOTAL = 0;
    line.VAT_RATE = 0;
    line.TOTAL_NET = 0;
    line.LINENO = this.data.TRANSACTIONS.items[this.data.TRANSACTIONS.items.length - 1].LINENO + 1
    line.DISCOUNT_RATE = 0;
    let temp = this.data.TRANSACTIONS.items
    temp.push(line)
    this.oTransLines.next(temp)
    console.log(this.data.TRANSACTIONS.items)
  }


}

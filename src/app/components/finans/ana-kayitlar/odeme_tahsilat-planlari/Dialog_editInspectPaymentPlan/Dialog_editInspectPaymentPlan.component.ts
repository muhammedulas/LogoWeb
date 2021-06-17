import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { arp } from 'src/app/models/arp';
import { paymentPlan } from 'src/app/models/paymentPlans';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';

@Component({
  selector: 'app-Dialog_editInspectPaymentPlan',
  templateUrl: './Dialog_editInspectPaymentPlan.component.html',
  styleUrls: ['./Dialog_editInspectPaymentPlan.component.scss']
})
export class Dialog_editInspectPaymentPlanComponent implements OnInit {
  public displayedColumns = ["PaymentType", "Formula", "Condition", "Discount", "Day", "Month", "Year", "RoundBase"]
  @ViewChild('tableRef') table!:MatTable<any>
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPaymentPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public paymentPlan: paymentPlan,
    private toast: ToastrService,
    private svc: PaymentPlansService
  ) { }

  ngOnInit() {
  }

  update(){
    this.svc.updatePaymentPlan(this.paymentPlan).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

  newLine() {
    let empty = {
      INTERNAL_REFERENCE: 0,
      PAYPLANREF: 0,
      LINENO: (this.paymentPlan.PAYMENT_TERMS.items[this.paymentPlan.PAYMENT_TERMS.items.length - 1].LINENO) + 1,
      AFTER_DAYS: 0,
      FORMULA: "",
      CONDITION: "",
      DAY: "",
      MOUNTH: "",
      YEAR: "",
      ROUND_BASE: 0.0,
      ABSOLUTE_DATE: "",
      DATE_SELECTOR: 0,
      DISC_RATE: 0.0,
      DISCDELLIST: "0",
      PAYMENT_TYPE: 0,
      BANKACCREF: 0,
      REPAYDEFREF: 0,
      BANKACC_CODE: "",
      REPAYPLAN_CODE: "",
      TR_CURR: 0,
      GLOBAL_CODE: ""
    }
    let temp = this.paymentPlan.PAYMENT_TERMS.items
    temp.push(empty)
    this.paymentPlan.PAYMENT_TERMS.items = temp
    this.table.renderRows();


  }

}

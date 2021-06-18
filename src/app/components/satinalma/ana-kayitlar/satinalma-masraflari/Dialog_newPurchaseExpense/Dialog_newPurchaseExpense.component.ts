import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseExpense } from 'src/app/models/purchaseExpense';
import { PurchaseExpensesService } from 'src/app/services/purchaseExpenses.service';

@Component({
  selector: 'app-Dialog_newPurchaseExpense',
  templateUrl: './Dialog_newPurchaseExpense.component.html',
  styleUrls: ['./Dialog_newPurchaseExpense.component.scss']
})
export class Dialog_newPurchaseExpenseComponent implements OnInit {

  public newRecord: purchaseExpense = new purchaseExpense();
  public fixedRate: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchaseExpenseComponent>,
    private toast: ToastrService,
    private svc: PurchaseExpensesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    if (this.fixedRate) this.newRecord.EXT_ACCESS_FLAGS = 0
    else this.newRecord.EXT_ACCESS_FLAGS = 4
    this.svc.addPurchaseExpense(this.newRecord).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }


  initializeRecord() {
    this.newRecord = {
      INTERNAL_REFERENCE: 2,
      CARDTYPE: 3,
      RECORD_STATUS: 0,
      CODE: "",
      DESCRIPTION: "",
      AUXIL_CODE: "",
      AUTH_CODE: "",
      FORMULA: "",
      ROUND_BASE: 0.0,
      VAT_PERC: 18.0,
      COUNTER: 0,
      CREATED_BY: 0,
      DATE_CREATED: "",
      HOUR_CREATED: 0,
      MIN_CREATED: 0,
      SEC_CREATED: 0,
      MODIFIED_BY: 0,
      DATE_MODIFIED: "",
      HOUR_MODIFIED: 0,
      MIN_MODIFIED: 0,
      SEC_MODIFIED: 0,
      UNIT: "",
      PROD_STATUS: 0,
      DATA_SITEID: 0,
      DATA_REFERENCE: 2,
      UPDATED: 0,
      TRCODE: 0,
      CARDREF: 0,
      TYP: 0,
      GL_CODE: "",
      ACCOUNTREF: 0,
      OHP_CODE: "",
      CENTERREF: 0,
      XBUFS: "0",
      XML_ATTRIBUTE: 1,
      EXT_ACCESS_FLAGS: 0,
      STOPPAGE_DISC: 0,
      UNICODE: "",
      UNICODE_DEF: ""
    }
  }

}

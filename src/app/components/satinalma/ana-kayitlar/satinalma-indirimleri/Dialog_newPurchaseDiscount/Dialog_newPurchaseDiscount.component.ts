import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseDiscount } from 'src/app/models/purchaseDiscount';
import { PurchaseDiscountsService } from 'src/app/services/purchaseDiscounts.service';

@Component({
  selector: 'app-Dialog_newPurchaseDiscount',
  templateUrl: './Dialog_newPurchaseDiscount.component.html',
  styleUrls: ['./Dialog_newPurchaseDiscount.component.scss']
})
export class Dialog_newPurchaseDiscountComponent implements OnInit {
  public newRecord: purchaseDiscount = new purchaseDiscount();
  public stopage: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchaseDiscountComponent>,
    private toast: ToastrService,
    private svc: PurchaseDiscountsService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    if (this.stopage) this.newRecord.STOPPAGE_DISC = 1
    this.svc.addPurchaseDiscount(this.newRecord).subscribe(res => {
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
      INTERNAL_REFERENCE: 0,
      CARDTYPE: 1,
      RECORD_STATUS: 0,
      CODE: "",
      DESCRIPTION: "",
      AUXIL_CODE: "",
      AUTH_CODE: "",
      FORMULA: "",
      ROUND_BASE: 1.0,
      VAT_PERC: 0.0,
      COUNTER: 0,
      CREATED_BY: 1,
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
      DATA_REFERENCE: 1,
      UPDATED: 0,
      TRCODE: 11,
      CARDREF: 1,
      TYP: 1,
      GL_CODE: "",
      ACCOUNTREF: 0,
      OHP_CODE: "",
      CENTERREF: 0,
      XBUFS: "",
      XML_ATTRIBUTE: 2,
      EXT_ACCESS_FLAGS: 4,
      STOPPAGE_DISC: 0,
      UNICODE: "",
      UNICODE_DEF: ""
    }
  }

}

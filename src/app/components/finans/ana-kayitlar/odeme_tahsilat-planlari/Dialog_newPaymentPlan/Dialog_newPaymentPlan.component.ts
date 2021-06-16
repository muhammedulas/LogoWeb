import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { paymentPlan } from 'src/app/models/paymentPlans';
import { paymentTerms } from 'src/app/models/paymentTerms';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';

@Component({
  selector: 'app-Dialog_newPaymentPlan',
  templateUrl: './Dialog_newPaymentPlan.component.html',
  styleUrls: ['./Dialog_newPaymentPlan.component.scss']
})
export class Dialog_newPaymentPlanComponent implements OnInit {
  public paymentPlan = new paymentPlan();
  constructor(
    private svc: PaymentPlansService,
    public dialogRef: MatDialogRef<Dialog_newPaymentPlanComponent>,
    private toast: ToastrService
  ) {
    this.initializeRecord()
    console.log(this.paymentPlan)
  }

  ngOnInit() {
  }

  create() {
    this.svc.addPaymentPlan(this.paymentPlan).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
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
      LINENO: 0,
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
    this.paymentPlan.PAYMENT_TERMS.items.push(empty)
  }


  initializeRecord() {
    this.paymentPlan = {
      "INTERNAL_REFERENCE": 0,
      "RECORD_STATUS": 0,
      "CODE": "",
      "DESCRIPTION": "",
      "AUXIL_CODE": "",
      "AUTH_CODE": "",
      "EARLY_INTRATE": 0,
      "LATE_INTRATE": 0,
      "COUNTER": 0,
      "WORK_DAYS": 127,
      "CREATED_BY": 0,
      "DATE_CREATED": "",
      "HOUR_CREATED": 0,
      "MIN_CREATED": 0,
      "SEC_CREATED": 0,
      "MODIFIED_BY": 0,
      "DATE_MODIFIED": "",
      "HOUR_MODIFIED": 0,
      "MIN_MODIFIED": 0,
      "SEC_MODIFIED": 0,
      "DATA_SITEID": 0,
      "DATA_REFERENCE": 0,
      "PAYMENT_TERMS": {
        "items": [
          {
            "INTERNAL_REFERENCE": 0,
            "PAYPLANREF": 0,
            "LINENO": 0,
            "AFTER_DAYS": 0,
            "FORMULA": "",
            "CONDITION": "",
            "DAY": "",
            "MOUNTH": "",
            "YEAR": "",
            "ROUND_BASE": 0.0,
            "ABSOLUTE_DATE": "",
            "DATE_SELECTOR": 0,
            "DISC_RATE": 0.0,
            "DISCDELLIST": "",
            "PAYMENT_TYPE": 0,
            "BANKACCREF": 0,
            "REPAYDEFREF": 0,
            "BANKACC_CODE": "",
            "REPAYPLAN_CODE": "",
            "TR_CURR": 0,
            "GLOBAL_CODE": ""
          }
        ]
      },
      "XBUFS": "",
      "XML_ATTRIBUTE": 2,
      "PP_GROUP_CODE": "",
      "BANKACCREF": 0,
      "CRDCARD_CODE": "",
      "PP_GROUP_REF": 0,
      "GLOBAL_CODE": "",
      "SEPERATE_DAYS": 0,
      "LAST_DAY_MONTH": 0
    }
  }

}

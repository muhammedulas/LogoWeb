import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchasedService } from 'src/app/models/purchasedService';
import { PurchasedServicesService } from 'src/app/services/purchasedServices.service';

@Component({
  selector: 'app-Dialog_newPurchasedService',
  templateUrl: './Dialog_newPurchasedService.component.html',
  styleUrls: ['./Dialog_newPurchasedService.component.scss']
})
export class Dialog_newPurchasedServiceComponent implements OnInit {
  public canDeduct: boolean = false;
  public purSvc: purchasedService = new purchasedService();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchasedServiceComponent>,
    private toast: ToastrService,
    private svc: PurchasedServicesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    if (this.canDeduct) this.purSvc.CANDEDUCT = 1
    this.svc.addPurchasedService(this.purSvc).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }


  initializeRecord() {
    let empty = {
      INTERNAL_REFERENCE: 0,
      RECORD_STATUS: 0,
      CARD_TYPE: 1,
      CODE: "",
      PARENTSRVREF: 0,
      PARENT_CODE: "",
      DESCRIPTION: "",
      DESCRIPTION2: "",
      AUXIL_CODE: "",
      AUXIL_CODE2: "",
      AUXIL_CODE3: "",
      AUXIL_CODE4: "",
      AUXIL_CODE5: "",
      AUTH_CODE: "",
      VAT_PERC: 18.0,
      EXTENREF: 0,
      PAYMENT_CODE: "",
      PAYMENTREF: 0,
      UNITSET_CODE: "05",
      UNITSETREF: 0,
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
      DATA_SITEID: 0,
      DATA_REFERENCE: 0,
      XDEFS: "",
      UNITS: {
        items: []
      },
      GL_LINKS: {
        items: []
      },
      MAINUNITCODE: "",
      XML_ATTRIBUTE: 0,
      RETURNVAT: 18.0,
      IMPORT_EXPENSES: 0,
      AFFECT_COST: 0,
      ADD_TAXREF: 0,
      ADD_TAXCODE: "",
      MULTI_ADD_TAX: 0,
      ADDTAXDELLIST: "",
      DIST_TYPE: 0,
      CANDEDUCT: 0,
      DEDUCT_CODE: "",
      DEDUCT_DEF: "",
      DEDUCTION_PART1: 0,
      DEDUCTION_PART2: 0,
      EXT_ACCESS_FLAGS: 0,
      EXEMPT_FROM_TAXDECL: 0,
      CURRDIFF: 0,
      PROJECTREF: 0,
      PROJECT_CODE: "",
      GTIP_CODE: "",
      CPA_CODE: "",
      PUBLICCOUNTRYREF: 0,
      PUBLIC_COUNTRY_CODE: "",
      PUBLIC_COUNTRY_NAME: "",
      OPPOSESRVREF: 0,
      COUNTER_SRV_CODE: "",
      VEHICLE_EXP: 0,
      VEHICLE_RENT: 0,
    }
    this.purSvc = empty
  }

}

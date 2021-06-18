import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { soldService } from 'src/app/models/soldService';
import { SoldServicesService } from 'src/app/services/soldServices.service';

@Component({
  selector: 'app-Dialog_newSoldService',
  templateUrl: './Dialog_newSoldService.component.html',
  styleUrls: ['./Dialog_newSoldService.component.scss']
})
export class Dialog_newSoldServiceComponent implements OnInit {

  public canDeduct: boolean = false;
  public soldsvc: soldService = new soldService();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newSoldServiceComponent>,
    private toast: ToastrService,
    private svc: SoldServicesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    if (this.canDeduct) this.soldsvc.CANDEDUCT = 1
    this.svc.add(this.soldsvc).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }


  initializeRecord() {
    this.soldsvc = {
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
    
  }
}

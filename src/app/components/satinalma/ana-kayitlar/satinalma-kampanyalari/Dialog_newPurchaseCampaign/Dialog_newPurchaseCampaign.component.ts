import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseCampaigns } from 'src/app/models/purchaseCampaigns';
import { PurchaseCampaignsService } from 'src/app/services/purchaseCampaigns.service';

@Component({
  selector: 'app-Dialog_newPurchaseCampaign',
  templateUrl: './Dialog_newPurchaseCampaign.component.html',
  styleUrls: ['./Dialog_newPurchaseCampaign.component.scss']
})
export class Dialog_newPurchaseCampaignComponent implements OnInit {
  public newRecord: purchaseCampaigns = new purchaseCampaigns();
  public fixedRate: boolean = true;
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchaseCampaignComponent>,
    private toast: ToastrService,
    private svc: PurchaseCampaignsService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    this.svc.addCampaign(this.newRecord).subscribe(res => {
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
      RECORD_STATUS: 0,
      CARD_TYPE: 1,
      CODE: "",
      NAME: "",
      AUXIL_CODE: "",
      AUTH_CODE: "",
      BEG_DATE: "",
      END_DATE: "",
      PRIORITY_GRP: "",
      PRIORITY: 0,
      DONT_FIX_LINES: 0,
      CLIENT_CODE: "",
      CL_AUXIL_CODE: "*",
      TRADING_GRP: "*",
      PAY_PLAN_CODE: "*",
      PP_GROUP_CODE: "*",
      TOWN_CODE: "*",
      DISTRICT_CODE: "*",
      CITY_CODE: "*",
      COUNTRY_CODE: "",
      VARIABLE_DEFS1: "",
      VARIABLE_DEFS2: "",
      VARIABLE_DEFS3: "",
      VARIABLE_DEFS4: "",
      VARIABLE_DEFS5: "",
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
      XML_ATTRIBUTE: 2,
      DATA_REFERENCE: 1,
      WFSTATUS: 0,
      DELLIST: "0",
      ORGLOGOID: "",
      FICHE_DOC_NUMBER: "*",
      FICHE_AUXIL_CODE: "*",
      FICHE_AUTH_CODE: "*",
      CL_AUXIL_CODE2: "*",
      CL_AUXIL_CODE3: "*",
      CL_AUXIL_CODE4: "*",
      CL_AUXIL_CODE5: "*",
      CL_AUTH_CODE: "*",
      VARIABLE_DEFS6: "",
      VARIABLE_DEFS7: "",
      VARIABLE_DEFS8: "",
      VARIABLE_DEFS9: "",
      VARIABLE_DEFS10: "",
      GUID: ""
    }
  }
}

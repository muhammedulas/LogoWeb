import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchasedServicePrices } from 'src/app/models/purchasedServicePrices';
import { PurchasedServicePricesService } from 'src/app/services/purchasedServicePrices.service';

@Component({
  selector: 'app-Dialog_newPurchasedServicePrice',
  templateUrl: './Dialog_newPurchasedServicePrice.component.html',
  styleUrls: ['./Dialog_newPurchasedServicePrice.component.scss']
})
export class Dialog_newPurchasedServicePriceComponent implements OnInit {
  public date = new Date();
  public newRecord: purchasedServicePrices = new purchasedServicePrices();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchasedServicePriceComponent>,
    private toast: ToastrService,
    private svc: PurchasedServicePricesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    this.svc.addServicePrice(this.newRecord).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

  initializeRecord() {
    this.newRecord = {
      INTERNAL_REFERENCE: 0,
      CARD_CODE: "",
      OWNER_TYPE: 3,
      OWNER_CODE: "",
      CARDREF: 0,
      ARP_CODE: "",
      ARP_AUXCODE: "",
      PAYMENT_CODE: "",
      PAYPLANREF: 0,
      PRICE: 0,
      UNIT_CODE: "",
      UOMREF: 0,
      VAT_INCL: 0,
      CURRENCY: 160,
      PRIORITY: 0,
      MTRL_TYPE: 0,
      LEAD_TIME: 0,
      DATE_STARTED: this.date.toJSON(),
      DATE_ENDED: this.date.toJSON(),
      CONDITION: "",
      SHIPMENT_TYPE: "",
      SPECIALIZED: 0,
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
      SRVCODE: "",
      UNITSETCODE: "",
      XML_ATTRIBUTE: 0,
      EXT_ACC_FLAGS: 0,
      UNIT_CONVERT: 0,
      CYPH_CODE: "",
      ORGLOGOID: "",
      TRADING_GRP: "",
      BEG_TIME: 0,
      END_TIME: 0,
      DEFINITION: "",
      GRPCODE: "",
      GENIUSPAYTYPE: "",
      UPDATE_CHILD_PRC: 0,
      GEN_PAY_TYPE: "",
      GEN_SHP_NR: 0,
      ORDER_NR: 0,
      PRCALTER_TYP1: 0,
      PRCALTER_LMT1: 0,
      PRCALTER_TYP2: 0,
      PRCALTER_LMT2: 0,
      PRCALTER_TYP3: 0,
      PRCALTER_LMT3: 0,
      ACTIVE: 0,
      VGEN_DATA_REFERENCE: 0,
      VGENLIST: "0",
      BRANCH: -1,
      COST_VALUE: 0,
      ALL_DIVISIONS: 1,
      DIVISION_LIST: {
          items: []
      },
      DIVISION_STR: "",
      ARP_AUXCODE2: "",
      ARP_AUXCODE3: "",
      ARP_AUXCODE4: "",
      ARP_AUXCODE5: "",
      ARP_TRDGRP: "",
      ARP_CYPHCODE: "",
      GLOBAL_ID: "",
      VARIANT_CODE: "",
      PROJECTREF: 0,
      PROJECT_CODE: "",
      MARKREF: 0,
      MARK_CODE: "",
      TRANS_SPE_CODE: "",
      GUID: "",
    }
  }
}

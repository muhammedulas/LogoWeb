import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { GlobalVarsService } from 'src/app/globalVars.service';
import { salesOrder } from 'src/app/models/salesOrder';
import { transaction } from 'src/app/models/transaction';
import { SalesOrdersService } from 'src/app/services/salesOrders.service';
import { Dialog_newSalesOrderComponent } from '../dialog_newSalesOrder/dialog_newSalesOrder.component';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { card } from 'src/app/models/card';
import { LoginServiceService } from 'src/app/services/loginService.service';
import { SwipeAngularListComponent } from 'swipe-angular-list';
import { HammerModule } from '@angular/platform-browser';
import { unitSet } from 'src/app/models/unitSet';
import { unit } from 'src/app/models/unit';


@Component({
  selector: 'app-dialog_salesOrder',
  templateUrl: './dialog_salesOrder.component.html',
  styleUrls: ['./dialog_salesOrder.component.scss']
})
export class Dialog_salesOrderComponent implements OnInit {
  @ViewChild('item') inputItem;

  public arpControl = new FormControl();
  public newRecord: salesOrder = new salesOrder();
  public oTransLines = new Subject<transaction[]>();
  public unitSets: unitSet[] = [];
  public selectedUnitSet: unitSet = {
    "INTERNAL_REFERENCE": 0,
    "CODE": "",
    "DESCRIPTION": "",
    "TYPE": 0,
    "CREATED_BY": 0,
    "DATE_CREATED": "",
    "HOUR_CREATED": 0,
    "MIN_CREATED": 0,
    "SEC_CREATED": 0,
    "DATA_REFERENCE": 0,
    "UNITS": {
      "items": [
        {
          "INTERNAL_REFERENCE": 0,
          "CODE": "",
          "NAME": "",
          "UNIT_ORDER": 0,
          "MAIN_UNIT": 0,
          "CONV_FACT1": 0,
          "CONV_FACT2": 0,
          "GLOBAL_CODE": "",
        }
      ]
    },
    "GUID": ""
  }
  public selectedUnit: string;
  public arpOptions: card[] = [];
  public filteredArpOptions: card[] = [];
  public itemOptions: card[] = [];
  public filteredItemOptions: card[] = [];
  public selectedItemOption: card = new card();
  public paymentPlans: card[] = [];
  public filteredPaymentPlans: card[] = [];
  public selectedLine: transaction = new transaction();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newSalesOrderComponent>,
    private toast: ToastrService,
    private svc: SalesOrdersService,
    private global: GlobalVarsService,
    private login: LoginServiceService
  ) {
    this.initializeRecord();
    this.getCards();
  }

  ngOnInit() {
    this.observeLines().subscribe(q => {
      this.newRecord.TRANSACTIONS.items = q
    })
  }

  getCards() {
    this.arpOptions = this.global.arpCodes
    this.filteredArpOptions = this.arpOptions;
    this.itemOptions = this.global.itemCodes
    this.filteredItemOptions = this.itemOptions
    this.paymentPlans = this.global.paymentPlans
    this.filteredPaymentPlans = this.paymentPlans

    this.global.getArpCodes().subscribe(res => {
      this.arpOptions = res.items;
      this.filteredArpOptions = this.arpOptions;
      console.log(this.arpOptions)
    })
    this.global.getItemCodes().subscribe(res => {
      this.itemOptions = res.items
      this.filteredItemOptions = this.itemOptions
      console.log(this.itemOptions)
    })

    this.global.getPaymentPlans().subscribe(res => {
      this.paymentPlans = res.items
      this.filteredPaymentPlans = this.paymentPlans
      console.log(this.paymentPlans)
    })
    this.global.getUnitSets().subscribe(res => {
      this.unitSets = res.items
      console.log(this.unitSets)
    })

  }

  create() {
    console.log(this.newRecord)
    this.newRecord.TRANSACTIONS.items = this.newRecord.TRANSACTIONS.items.slice(1);
    this.svc.add(this.newRecord).subscribe(res => {
      console.log(res)
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

  setArpCode(option: card, source: string, key?: KeyboardEvent) {
    if (key && key.key != "Enter") {
      return
    }
    if (source == 'code') {
      this.newRecord.ARP_DEFINITION_ = option.DEFINITION_
    }
    else {
      this.newRecord.ARP_CODE = option.CODE
    }
  }

  setItemCode(option: card, key?: KeyboardEvent) {
    if (key && key.key != "Enter") {
      return
    }
    this.selectedItemOption = option
    this.selectedUnitSet = this.unitSets.filter(q => { return q.INTERNAL_REFERENCE == option.UNITSETREF })[0]
  }

  setPaymentPlanCode(option: card, key?: KeyboardEvent) {
    if (key && key.key != "Enter") {
      return
    }
    this.newRecord.PAYMENT_CODE = option.CODE
  }

  setUnit(unit: string) {
    this.selectedUnit = unit
  }

  filterArpOptions(val: string, source: string) {
    if (val != "") {
      if (source == "code") {
        this.filteredArpOptions = this.arpOptions.filter(q => { return q.CODE.toLowerCase().includes(val.toLowerCase()) })
      }
      else {
        this.filteredArpOptions = this.arpOptions.filter(q => { return q.DEFINITION_.toLowerCase().includes(val.toLowerCase()) })
      }
    }
    else {
      this.filteredArpOptions = this.arpOptions
    }
  }

  filterItemOptions(val: string) {
    if (val != "") {
      this.filteredItemOptions = this.itemOptions.filter(q => { return q.DEFINITION_.toLowerCase().includes(val.toLowerCase()) })
    }
    else {
      this.filteredItemOptions = this.itemOptions
    }
  }

  filterPaymentOptions(val: string) {
    this.filteredPaymentPlans = this.paymentPlans.filter(q => { return q.CODE.toLowerCase().includes(val.toLowerCase()) || q.DEFINITION_.toLowerCase().includes(val.toLowerCase()) })
  }


  calculate() {
    let temp = {
      discount: 0,
      total: 0,
      vat: 0,
      totalNet: 0
    }
    this.newRecord.TRANSACTIONS.items.forEach(t => {
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

    this.newRecord.TOTAL_DISCOUNTED = parseInt(temp.discount.toFixed(2))
    this.newRecord.TOTAL_GROSS = parseInt(temp.total.toFixed(2))
    this.newRecord.TOTAL_VAT = parseInt(temp.vat.toFixed(2))
    this.newRecord.TOTAL_NET = parseInt(temp.totalNet.toFixed(2))
  }

  observeLines() {
    return this.oTransLines.asObservable()
  }


  newLine(quantity, discRate) {
    let line = new transaction();
    line.MASTER_CODE = this.selectedItemOption.CODE;
    line.DEFINITION_ = this.selectedItemOption.DEFINITION_;
    line.QUANTITY = quantity;
    line.PRICE = 0;
    line.DISCOUNT_RATE = discRate
    line.TOTAL = 0
    line.VAT_RATE = this.selectedItemOption.VAT_RATE;
    line.TOTAL_NET = 0
    line.LINENO = this.newRecord.TRANSACTIONS.items[this.newRecord.TRANSACTIONS.items.length - 1].LINENO + 1
    line.USREF = this.selectedUnitSet.INTERNAL_REFERENCE;
    line.UNIT_CODE = this.selectedUnit
    let temp = this.newRecord.TRANSACTIONS.items
    temp.push(line)
    this.oTransLines.next(temp)
    this.inputItem.nativeElement.value = ''
    console.log(this.newRecord.TRANSACTIONS.items)
  }

  filterLines() {
    let temp = this.newRecord.TRANSACTIONS.items.filter(q => {
      return q.LINENO != -1
    })
    return temp
  }

  selectLine(element: transaction) {
    this.selectedLine = element
  }

  sil() {
    let index = this.newRecord.TRANSACTIONS.items.indexOf(this.selectedLine)
    this.newRecord.TRANSACTIONS.items.splice(index, 1)
  }

  initializeRecord() {
    this.newRecord = {
      "DataObjectParameter": {
        ApplyConditionOnPreSave: true
      },
      "INSPECT": false,
      "INTERNAL_REFERENCE": 0,
      "TYPE": 1,
      "NUMBER": "",
      "DOC_TRACK_NR": "",
      "DATE": "",
      "TIME": 0,
      "DOC_NUMBER": "",
      "AUXIL_CODE": "",
      "AUTH_CODE": "",
      "ARP_CODE": "",
      "CLIENTREF": 0,
      "ARP_CODE_SHPM": "",
      "RECVREF": 0,
      "SHIPLOC_CODE": "",
      "GL_CODE": "",
      "ACCOUNTREF": 0,
      "OHP_CODE": "",
      "CENTERREF": 0,
      "SOURCE_WH": 0,
      "SOURCE_COST_GRP": 0,
      "UPDCURR": 0,
      "ADD_DISCOUNTS": 0.0,
      "TOTAL_DISCOUNTS": 0.0,
      "TOTAL_DISCOUNTED": 0,
      "ADD_EXPENSES": 0.0,
      "TOTAL_EXPENSES": 0.0,
      "TOTAL_PROMOTIONS": 0.0,
      "TOTAL_VAT": 0,
      "TOTAL_GROSS": 0.0,
      "TOTAL_NET": 0,
      "RC_RATE": 0.0,
      "RC_NET": 0.0,
      "NOTES1": "",
      "NOTES2": "",
      "NOTES3": "",
      "NOTES4": "",
      "NOTES5": "",
      "NOTES6": "",
      "EXTENREF": 0,
      "PAYMENT_CODE": "",
      "PAYDEFREF": 0,
      "PRINT_COUNTER": 0,
      "PRINT_DATE": "1899-12-30T00:00:00",
      "DIVISION": 0,
      "DEPARTMENT": 0,
      "ORDER_STATUS": 4,
      "CREATED_BY": 1,
      "DATE_CREATED": "",
      "HOUR_CREATED": 0,
      "MIN_CREATED": 0,
      "SEC_CREATED": 0,
      "MODIFIED_BY": 0,
      "DATE_MODIFIED": "",
      "HOUR_MODIFIED": 0,
      "MIN_MODIFIED": 0,
      "SEC_MODIFIED": 0,
      "SALESMAN_CODE": this.login.salesmanCode,
      "SALESMANREF": 0,
      "SHIPMENT_TYPE": "",
      "SHIPPING_AGENT": "",
      "CURRSEL_TOTAL": 1,
      "CURRSEL_DETAILS": 0,
      "TRADING_GRP": "",
      "TEXTINC": 1,
      "DATA_SITEID": 0,
      "DATA_REFERENCE": 2,
      "FACTORY": 0,
      "TRANSACTIONS": {
        "items": [
          {
            "DEFINITION_": "Açıklaması",
            "EDIT": true,
            "DEVIR": "0",
            "INTERNAL_REFERENCE": 2,
            "TYPE": 0,
            "MASTER_CODE": "Kodu",
            "STOCKREF": 0,
            "ORDFICHEREF": 0,
            "CLIENTREF": 0,
            "PREVLINEREF": 0,
            "PREVLINENO": 0,
            "DETLINE": 0,
            "LINENO": -1,
            "SLIP_TYPE": 1,
            "DATE": "2021-03-05T00:00:00",
            "TIME": "00:00:00",
            "DETAIL_LEVEL": 0,
            "CALC_TYPE": 0,
            "OHP_CODE1": "",
            "CENTERREF": 0,
            "GL_CODE1": "",
            "ACCOUNTREF": 0,
            "GL_CODE2": "",
            "VATACCREF": 0,
            "OHP_CODE2": "",
            "VATCENTERREF": 0,
            "GL_CODE3": "",
            "PRACCREF": 0,
            "OHP_CODE3": "",
            "PRCENTERREF": 0,
            "GL_CODE4": "",
            "PRVATACCREF": 0,
            "OHP_CODE4": "",
            "PRVATCENREF": 0,
            "PROMREF": 0,
            "AUXIL_CODE": "",
            "DELVRY_CODE": "",
            "QUANTITY": 0,
            "PRICE": 0,
            "TOTAL": 0,
            "QUANTITY_SHIPPED": 0.0,
            "DISCOUNT_RATE": 0.0,
            "COST_DISTR": 0.0,
            "DISCOUNT_DISTR": 0.0,
            "EXPENSE_DISTR": 0.0,
            "PROMOTION_DISTR": 0.0,
            "VAT_RATE": 18.0,
            "VAT_AMOUNT": 1.8,
            "VAT_BASE": 30.0,
            "TRANS_DESCRIPTION": "",
            "UNIT_CODE": "ADET",
            "UOMREF": 23,
            "USREF": 5,
            "UNIT_CONV1": 1.0,
            "UNIT_CONV2": 1.0,
            "UNIT_CONV3": 0.0,
            "UNIT_CONV4": 0.0,
            "UNIT_CONV5": 0.0,
            "UNIT_CONV6": 0.0,
            "UNIT_CONV7": 0.0,
            "UNIT_CONV8": 0.0,
            "VAT_INCLUDED": 0,
            "ORDER_CLOSED": 0,
            "ORDER_RESERVE": 1,
            "INUSE": 0,
            "DUE_DATE": "2021-03-05T00:00:00",
            "CURR_PRICE": 0,
            "PC_PRICE": 0.0,
            "RC_XRATE": 0.0,
            "BILLED_ITEM": 0,
            "PAYMENT_CODE": "",
            "PAYDEFREF": 0,
            "EXTENREF": 0,
            "COMPOSITE": 0,
            "SOURCE_WH": 0,
            "SOURCE_COST_GRP": 0,
            "DIVISION": 0,
            "DEPARTMENT": 0,
            "TOTAL_NET": 30.0,
            "SALESMANREF": 0,
            "ORDER_STATUS": 4,
            "DREF": 0,
            "TRGFLAG": 0,
            "DATA_SITEID": 0,
            "DATA_REFERENCE": 1,
            "FACTORY": 0,
            "NET_DSC_FLAG": 0,
            "NET_DSC_RATE": 0.0,
            "NET_DSC_AMOUNT": 0.0,
            "PRODUCED": 0,
            "ORDER_CODE": "",
            "DETDELLIST": "",
            "XML_ATTRIBUTE": 2,
            "REASON_FOR_NOT_SHP": 0,
            "CMPG_LINE_REF": 0,
            "CAMPAIGN_INFOS": {
              "items": [
                {
                  "CAMPCODE1": "",
                  "CAMPCODE2": "",
                  "CAMPCODE3": "",
                  "CAMPCODE4": "",
                  "CAMPCODE5": "",
                  "PCAMPCODE": "",
                  "CAMP_LN_NO": 0
                }
              ]
            },
            "CAMPAIGN_POINT": 0.0,
            "PROM_CLAS_ITEM_CODE": "",
            "PR_RATE": 0.0,
            "GROSS_U_INFO1": 0.0,
            "GROSS_U_INFO2": 0.0,
            "CANCELLED": 0,
            "DEM_PEGGED_AMNT": 0.0,
            "TEXTINC": 0,
            "SALESMAN_CODE": "",
            "PROJECT_CODE": "",
            "PROJECTREF": 0,
            "CURR_TRANSACTIN": 0,
            "ITEXT": "",
            "PRCLISTREF": 0,
            "AFFECT_COLLATRL": 0,
            "VARIANTREF": 0,
            "VARIANTCODE": "",
            "VARIANTNAME": "",
            "CANCONFIG": 0,
            "VCHARLIST": "0",
            "PRIORITY": 0,
            "ADD_TAX_RATE": 0.0,
            "ADD_TAX_CONVFACT": 0.0,
            "ADD_TAX_AMOUNT": 0.0,
            "ADD_TAX_ACCREF": 0,
            "ADD_TAX_CENTERREF": 0,
            "ADD_TAX_AMNTISUPD": 0,
            "ADD_TAX_DISC_AMOUNT": 0.0,
            "EX_ADD_TAX_RATE": 0.0,
            "EX_ADD_TAX_CONVF": 0.0,
            "EX_ADD_TAX_AMOUNT": 0.0,
            "EU_VAT_STATUS": 0,
            "ADD_TAX_EFFECT_KDV": 0,
            "MULTI_ADD_TAX": 0,
            "AFFECT_RISK": 0,
            "EXCLINE_INTERNAL_REFERENCE": 0,
            "EXCLINE_TRANS_REF": 0,
            "EXCLINE_PRICE": 0.0,
            "EXCLINE_TOTAL": 0.0,
            "EXCLINE_DIST_COST": 0.0,
            "EXCLINE_DIST_DISC": 0.0,
            "EXCLINE_DIST_EXP": 0.0,
            "EXCLINE_DIST_PROM": 0.0,
            "EXCLINE_VAT_AMOUNT": 0.0,
            "EXCLINE_VAT_MATRAH": 0.0,
            "EXCLINE_LINE_NET": 0.0,
            "EXCLINE_DIST_ADD_EXP": 0.0,
            "EXCLINE_NET_DISC_AMOUNT": 0.0,
            "EXCLINE_VAT_CALC_DIFF": 0.0,
            "EXCLINE_EU_VAT_AMOUNT": 0.0,
            "EXCLINE_ADD_TAX_AMOUNT": 0.0,
            "EXCLINE_ADD_TAX_CONV_FACT": 0.0,
            "EXCLINE_ADD_TAX_DISC_AMOUNT": 0.0,
            "EXCLINE_EX_ADD_TAX_AMOUNT": 0.0,
            "EXCLINE_EX_ADD_TAX_CONVF": 0.0,
            "ADD_TAX_VAT_MATRAH": 0.0,
            "EXCLINE_ADD_TAX_VAT_MATRAH": 0.0,
            "EDT_PRICE": 0.0,
            "EDT_CURR": 1,
            "ORG_DUE_DATE": "2021-03-05T00:00:00",
            "ORG_QUANTITY": 1.0,
            "ORG_PRICE": 1.0,
            "AUXIL_CODE2": "",
            "RESERVE_DATE": "2021-03-05T00:00:00",
            "RESERVE_AMOUNT": 3.0,
            "PRCLISTCODE": "",
            "PRCLISTTYPE": 0,
            "GLOBAL_ID": "",
            "DEDUCTION_PART1": 2,
            "DEDUCTION_PART2": 3,
            "CANDEDUCT": 1,
            "DEDUCTION_TOT": 3.6,
            "DEDUCTION_TOT_TC": 0.0,
            "OFFERREF": 0,
            "OFFTRANSREF": 0,
            "PRODUCER_CODE": "",
            "BOMREF": 0,
            "BOM_CODE": "",
            "BOM_TYPE": 0,
            "BOMREVREF": 0,
            "BOM_REV_CODE": "",
            "ROUTINGREF": 0,
            "ROUTING_CODE": "",
            "OPERATIONREF": 0,
            "OPERATION_CODE": "",
            "WSREF": 0,
            "WS_CODE": "",
            "ADDITIONAL_ITEMS_CODE": "",
            "PROMOTION_CODE": "",
            "APPLY_ADD_TAX": 0,
            "VATEXCEPT_CODE": "",
            "VATEXCEPT_REASON": "",
            "ADDTAXEXCEPT_CODE": "",
            "ADDTAXEXCEPT_REASON": "",
            "CPA_CODE": "",
            "GTIP_CODE": "",
            "PUBLICCOUNTRYREF": 0,
            "PUBLIC_COUNTRY_CODE": "",
            "PUBLIC_COUNTRY_NAME": "",
            "DIST_DISC_VAT": 0.0,
            "GUID": ""
          }
        ]
      },
      "XBUFS": "1841993E-504F-4384-A93A-117643466C31",
      "XCNT": 0,
      "DOCALS": "0",
      "ITEXT": "",
      "XML_ATTRIBUTE": 2,
      "CUST_ORD_NO": "",
      "DLV_CLIENT": 0,
      "DOC_TRACKING_NR": "",
      "CANCELLED": 0,
      "ORGLOGOID": "",
      "OFFER_REFERENCE": 0,
      "OFFALT_REFERENCE": 0,
      "OFFER_TYP": 0,
      "OFFER_ALTNR": 0,
      "CURR_TRANSACTIN": 0,
      "TC_RATE": 0.0,
      "TC_NET": 31.8,
      "WITH_PAYMENT": 0,
      "PROJECT_CODE": "",
      "PROJECTREF": 0,
      "WFLOWCARDREF": 0,
      "OP_STATUS": 0,
      "UPD_CURR": 0,
      "UPD_TRCURR": 0,
      "GUARANTOR1_FICHETYPE": 0,
      "GUARANTOR1_NR": 0,
      "GUARANTOR1_NAMESURNAME": "",
      "GUARANTOR1_ADDR1": "",
      "GUARANTOR1_ADDR2": "",
      "GUARANTOR1_DISTRICT": "",
      "GUARANTOR1_TOWN": "",
      "GUARANTOR1_CITY": "",
      "GUARANTOR1_COUNTRY": "",
      "GUARANTOR1_POSTCODE": "",
      "GUARANTOR1_TELNR1": "",
      "GUARANTOR1_TELNR2": "",
      "GUARANTOR1_FAXNR": "",
      "GUARANTOR1_SITEID": 0,
      "GUARANTOR1_ORGLOGICREF": 0,
      "GUARANTOR1_CLIENTREF": 0,
      "GUARANTOR1_TAXNR": "",
      "GUARANTOR1_TAXOFFICE": "",
      "GUARANTOR1_TAXXOFFCODE": "",
      "GUARANTOR1_BANKBRANCHCODE": "",
      "GUARANTOR1_BANKBRANCHS": "",
      "GUARANTOR1_BANKACCOUNTS": "",
      "GUARANTOR2_FICHETYPE": 0,
      "GUARANTOR2_NR": 0,
      "GUARANTOR2_NAMESURNAME": "",
      "GUARANTOR2_ADDR1": "",
      "GUARANTOR2_ADDR2": "",
      "GUARANTOR2_DISTRICT": "",
      "GUARANTOR2_TOWN": "",
      "GUARANTOR2_CITY": "",
      "GUARANTOR2_COUNTRY": "",
      "GUARANTOR2_POSTCODE": "",
      "GUARANTOR2_TELNR1": "",
      "GUARANTOR2_TELNR2": "",
      "GUARANTOR2_FAXNR": "",
      "GUARANTOR2_SITEID": 0,
      "GUARANTOR2_ORGLOGICREF": 0,
      "GUARANTOR2_CLIENTREF": 0,
      "GUARANTOR2_TAXNR": "",
      "GUARANTOR2_TAXOFFICE": "",
      "GUARANTOR2_TAXOFFCODE": "",
      "GUARANTOR2_BANKBRANCHCODE": "",
      "GUARANTOR2_BANKBRANCHS": "",
      "GUARANTOR2_BANKACCOUNTS": "",
      "AFFECT_COLLATRL": 0,
      "TOTAL_ADD_TAX": 0.0,
      "TOTAL_EX_ADD_TAX": 0.0,
      "AFFECT_RISK": 0,
      "EXCHINFO_INTERNAL_REFERENCE": 0,
      "EXCHINFO_FICHE_REF": 0,
      "EXCHINFO_ADD_DISCOUNTS": 0.0,
      "EXCHINFO_TOTAL_DISCOUNTS": 0.0,
      "EXCHINFO_TOTAL_DISCOUNTED": 0.0,
      "EXCHINFO_ADD_EXPENSES": 0.0,
      "EXCHINFO_TOTAL_EXPENSES": 0.0,
      "EXCHINFO_DIST_EXPENSE": 0.0,
      "EXCHINFO_TOTAL_DEPOZITO": 0.0,
      "EXCHINFO_TOTAL_PROMOTIONS": 0.0,
      "EXCHINFO_VAT_INC_GROSS": 0.0,
      "EXCHINFO_TOTAL_VAT": 0.0,
      "EXCHINFO_GROSS_TOTAL": 0.0,
      "EXCHINFO_TOTAL_ADD_TAX": 0.0,
      "EXCHINFO_TOTAL_EX_ADD_TAX": 0.0,
      "EXCHINFO_BAGKUR": 0.0,
      "EXCHINFO_STOPAJ": 0.0,
      "EXCHINFO_SSDF": 0.0,
      "EXCHINFO_BORSA": 0.0,
      "EXCHINFO_KOMISYON": 0.0,
      "EXCHINFO_KOM_KDV": 0.0,
      "EXCHINFO_EK1": 0.0,
      "EXCHINFO_EK2": 0.0,
      "EXCHINFO_EK3": 0.0,
      "EXCHINFO_EK4": 0.0,
      "EXCHINFO_EK5": 0.0,
      "PAYMENT_TYPE": 0,
      "APPROVE": 0,
      "APPROVE_DATE": "1899-12-30T00:00:00",
      "GUID": "",
      "FC_STATUS_NAME": "",
      "DEDUCTIONPART1": 2,
      "DEDUCTIONPART2": 3,
      "GLOBAL_ID": "",
      "CANCEL_AUTO_CAMP_PROC": 0,
      "CAMPAIGN_CODE": "",
      "APPLY_ARP_DISCOUNT": 0,
      "DEVIR": 0,
      "DELIVERY_CODE": "",
      "ORIGINAL_DATE": "1899-12-30T00:00:00",
      "ACTIVITY_RENTING": 0,
      "ADD_DISCOUNTS_VAT": 0.0,
      "EINVOICE_TYPE": 0,
      "EINVOICE": 0,
      "EINVOICE_PROFILEID": 2,
      "EINVOICE_STATUS": 0,
      "EINVOICE_STARTDATE": "1899-12-30T00:00:00",
      "EINVOICE_ENDDATE": "1899-12-30T00:00:00",
      "EINVOICE_DESCRIPTION": "",
      "EINVOICE_DURATION": 0.0,
      "EINVOICE_DURATIONTYPE": 0,
      "EINVOICE_TAXTYPE": 0,
      "EINVOICE_TUNAME": "",
      "EINVOICE_TUSURNAME": "",
      "EINVOICE_TUPASSPORTNO": "",
      "EINVOICE_TUPASSPORTDATE": "",
      "EINVOICE_TUNATIONALITY": "",
      "EINVOICE_TUNATIONALITYNAME": "",
      "EINVOICE_TUBANKNAME": "",
      "EINVOICE_TUBNACCOUNTNO": "",
      "EINVOICE_TUBNBRANCH": "",
      "EINVOICE_TUPAYMENTNOTE": "",
      "EINVOICE_TUBNCURR": "",
      "EINVOICE_ADDR1": "",
      "EINVOICE_ADDR2": "",
      "EINVOICE_CITYCODE": "",
      "EINVOICE_CITY": "",
      "EINVOICE_COUNTRYCODE": "",
      "EINVOICE_COUNTRY": "",
      "EINVOICE_DISTRICTCODE": "",
      "EINVOICE_DISTRICT": "",
      "EINVOICE_TOWNCODE": "",
      "EINVOICE_TOWN": "",
      "EINVOICE_EXITTOWN": "",
      "EINVOICE_EXITGATECODE": "",
      "EINVOICE_EXITGATE": "",
      "EINVOICE_AGENCYCODE": "",
      "EINVOICE_AGENCY": "",
      "EINVOICE_EXITCOUNTRYCODE": "",
      "EINVOICE_EXITCOUNTRY": "",
      "EINVOICE_TRANSPORTTYP": 0,
      "EINVOICE_TRANSPORTTYPCODE": "",
      "EINVOICE_TRANSPORTTYPNAME": "",
      "EINVOICE_EXITDATE": "",
      "EINVOICE_EXITTIME": "",
      "EINVOICE_FLIGHTNUMBER": "",
      "EINVOICE_GUIDE": "",
      "EINVOICE_TURETPRICE": 0.0,
      "EINVOICE_TURETPRICESTR": "Sıfır TL",
      "EINVOICE_SENDEINVCUSTOM": 0,
      "EINVOICE_EINVOICETYPSGK": 0,
      "EINVOICE_TAXPAYERCODE": "",
      "EINVOICE_TAXPAYERNAME": "",
      "EINVOICE_DOCUMENTNOSGK": "",
      "EINVOICE_DRIVERNAME1": "",
      "EINVOICE_DRIVERSURNAME1": "",
      "EINVOICE_DRIVERTCKNO1": "",
      "EINVOICE_PLATENUM1": "",
      "EINVOICE_CHASSISNUM1": "",
      "EINVOICE_DRIVERNAME2": "",
      "EINVOICE_DRIVERSURNAME2": "",
      "EINVOICE_DRIVERTCKNO2": "",
      "EINVOICE_PLATENUM2": "",
      "EINVOICE_CHASSISNUM2": "",
      "EINVOICE_DRIVERNAME3": "",
      "EINVOICE_DRIVERSURNAME3": "",
      "EINVOICE_DRIVERTCKNO3": "",
      "EINVOICE_PLATENUM3": "",
      "EINVOICE_CHASSISNUM3": "",
      "EINVOICE_CHAINDELIVERY": 0,
      "EINVOICE_SELLERCLIENTREF": 0,
      "EINVOICE_SELLERCLIENTCODE": "",
      "EINVOICE_TAXNRTOPAY": "",
      "PUBLICBNACCREF": 0,
      "PUBLIC_BNACC_CODE": "",
      "PUBLIC_BNACC_IBAN": "",
      "PUBLIC_BNACC_CURRENCY": 0,
      "ACCEPT_EINV_PUBLIC": 0,
      "EINSTEAD_OF_DISPATCH": 0,
      "VATEXCEPT_CODE": "",
      "VATEXCEPT_REASON": "",
      "ADDTAXEXCEPT_CODE": "",
      "ADDTAXEXCEPT_REASON": "",
      "TAX_FREE_CHECK": 0,
      "EARCHIVEDETR_LOGICALREF": 0,
      "EARCHIVEDETR_ORDFCREF": 0,
      "EARCHIVEDETR_INSTALLMENTNUMBER": "",
      "EARCHIVEDETR_EARCHIVESTATUS": 0,
      "EARCHIVEDETR_EARCHIVESTATUSOLD": 0,
      "EARCHIVEDETR_SENDMOD": 0,
      "EARCHIVEDETR_INTSALESADDR": "",
      "EARCHIVEDETR_INTPAYMENTDESC": "",
      "EARCHIVEDETR_INTPAYMENTTYPE": 0,
      "EARCHIVEDETR_INTPAYMENTAGENT": "",
      "EARCHIVEDETR_INTPAYMENTDATEORG": 0,
      "EARCHIVEDETR_INTPAYMENTDATE": "",
      "EARCHIVEDETR_OCKSERIALNUMBER": "",
      "EARCHIVEDETR_OCKZNUMBER": "",
      "EARCHIVEDETR_OCKFICHENUMBER": "",
      "EARCHIVEDETR_OCKFICHEDATEORG": 0,
      "EARCHIVEDETR_OCKFICHEDATE": "",
      "EARCHIVEDETR_ISCOMP": 0,
      "EARCHIVEDETR_TAXNR": "",
      "EARCHIVEDETR_TCKNO": "",
      "EARCHIVEDETR_NAME": "",
      "EARCHIVEDETR_SURNAME": "",
      "EARCHIVEDETR_DEFINITION": "",
      "EARCHIVEDETR_ADDR1": "",
      "EARCHIVEDETR_ADDR2": "",
      "EARCHIVEDETR_CITYCODE": "",
      "EARCHIVEDETR_CITY": "",
      "EARCHIVEDETR_COUNTRYCODE": "",
      "EARCHIVEDETR_COUNTRY": "",
      "EARCHIVEDETR_POSTCODE": "",
      "EARCHIVEDETR_DISTRICTCODE": "",
      "EARCHIVEDETR_DISTRICT": "",
      "EARCHIVEDETR_TOWNCODE": "",
      "EARCHIVEDETR_TOWN": "",
      "EARCHIVEDETR_EMAILADDR": "",
      "EARCHIVEDETR_ISPERCURR": 0,
      "EARCHIVEDETR_INSTEADOFDESP": 0,
      "EARCHIVEDETR_TAXOFFICE": "",
      "EARCHIVEDETR_TELCODES1": "",
      "EARCHIVEDETR_TELCODES2": "",
      "EARCHIVEDETR_TELNRS1": "",
      "EARCHIVEDETR_TELNRS2": "",
      "EARCHIVEDETR_DRIVERNAME1": "",
      "EARCHIVEDETR_DRIVERSURNAME1": "",
      "EARCHIVEDETR_DRIVERTCKNO1": "",
      "EARCHIVEDETR_PLATENUM1": "",
      "EARCHIVEDETR_CHASSISNUM1": "",
      "EARCHIVEDETR_DRIVERNAME2": "",
      "EARCHIVEDETR_DRIVERSURNAME2": "",
      "EARCHIVEDETR_DRIVERTCKNO2": "",
      "EARCHIVEDETR_PLATENUM2": "",
      "EARCHIVEDETR_CHASSISNUM2": "",
      "EARCHIVEDETR_DRIVERNAME3": "",
      "EARCHIVEDETR_DRIVERSURNAME3": "",
      "EARCHIVEDETR_DRIVERTCKNO3": "",
      "EARCHIVEDETR_PLATENUM3": "",
      "EARCHIVEDETR_CHASSISNUM3": "",
      "EARCHIVEDETR_CHAINDELIVERY": 0,
      "EARCHIVEDETR_SELLERCLIENTREF": 0,
      "EARCHIVEDETR_SELLERCLIENTCODE": ""
    }
  }

}

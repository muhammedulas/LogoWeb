import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { dispatchTrans } from 'src/app/models/dispatchTrans';
import { purchaseDispatch } from 'src/app/models/purchaseDispatch';
import { PurchaseDispatchesService } from 'src/app/services/purchaseDispatches.service';

@Component({
  selector: 'app-dialog_newPurchaseDispatch',
  templateUrl: './dialog_newPurchaseDispatch.component.html',
  styleUrls: ['./dialog_newPurchaseDispatch.component.scss']
})
export class Dialog_newPurchaseDispatchComponent implements OnInit {

  public newRecord: purchaseDispatch = new purchaseDispatch();
  public oTransLines = new Subject<dispatchTrans[]>();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newPurchaseDispatchComponent>,
    private toast: ToastrService,
    private svc: PurchaseDispatchesService
  ) {
    this.initializeRecord();
    this.newLine();
  }

  ngOnInit() {
    this.observeLines().subscribe(q => {
      this.newRecord.TRANSACTIONS.items = q
    })
  }

  create() {
    this.svc.add(this.newRecord).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
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

    this.newRecord.TOTAL_DISCOUNTS = parseInt(temp.discount.toFixed(2))
    this.newRecord.TOTAL_GROSS = parseInt(temp.total.toFixed(2))
    this.newRecord.TOTAL_VAT = parseInt(temp.vat.toFixed(2))
    this.newRecord.TOTAL_NET = parseInt(temp.totalNet.toFixed(2))
  }

  observeLines() {
    return this.oTransLines.asObservable();
  }


  newLine() {
    let line = new dispatchTrans();
    line.QUANTITY = 0;
    line.PRICE = 0;
    line.EXCLINE_NET_DISC_AMOUNT = 0
    line.TOTAL = 0
    line.VAT_RATE = 18
    line.TOTAL_NET = 0
    line.DISCOUNT_RATE = 0
    line.UNIT_CODE = "ADET"

    let temp = this.newRecord.TRANSACTIONS.items
    temp.push(line)
    this.oTransLines.next(temp)
    console.log(this.newRecord.TRANSACTIONS.items)
  }

  initializeRecord() {
    this.newRecord = {
      "INTERNAL_REFERENCE": 0,
      "GRPCODE": 0,
      "TYPE": 1,
      "IOCODE": 1,
      "NUMBER": "",
      "DOC_TRACK_NR": "",
      "PRINTED_DESP_NUMBER": "",
      "DATE": "",
      "TIME": 0,
      "DOC_NUMBER": "",
      "INVOICE_NUMBER": "",
      "AUXIL_CODE": "",
      "AUTH_CODE": "",
      "INVOICEREF": 2,
      "ARP_CODE": "",
      "CLIENTREF": 0,
      "ARP_CODE_SHPM": "",
      "RECVREF": 0,
      "SHIPLOC_CODE": "",
      "SHIPLOC_DEF": "",
      "GL_CODE": "",
      "ACCOUNTREF": 0,
      "OHP_CODE": "",
      "CENTERREF": 0,
      "PRODORDERREF": 0,
      "PORDER_NUMBER": "",
      "PORDER_SLP_INRESERVE": 0,
      "PORDER_TYPE": 0,
      "QPROD_TYPE": 0,
      "SOURCE_TYPE": 0,
      "SOURCE_WH": 0,
      "SOURCEWSCODE": "",
      "SOURCEWSREF": 0,
      "SOURCEPOLNREF": 0,
      "SOURCE_COST_GRP": 0,
      "DEST_TYPE": 0,
      "DEST_WH": 0,
      "DESTWSCODE": "",
      "DESTWSREF": 0,
      "DESTPOLNREF": 0,
      "DEST_COST_GRP": 0,
      "FACTORY": 0,
      "DIVISION": 0,
      "DEPARTMENT": 0,
      "DEST_DIVISION": 0,
      "DEST_DEPARTMENT": 0,
      "DEST_FACTORY": 0,
      "PROD_STATUS": 0,
      "DEVIR": 0,
      "CANCELLED": 0,
      "INVOICED": 0,
      "GL_POSTED": 0,
      "INUSE": 0,
      "INVOICE_TYPE": 0,
      "ADD_DISCOUNTS": 0.0,
      "TOTAL_DISCOUNTS": 0.0,
      "TOTAL_DISCOUNTED": 0,
      "ADD_EXPENSES": 0.0,
      "TOTAL_EXPENSES": 0.0,
      "TOTAL_DEPOSITED": 0.0,
      "TOTAL_PROMOTIONS": 0.0,
      "TOTAL_VAT": 0,
      "TOTAL_GROSS": 0,
      "TOTAL_NET": 0,
      "NOTES1": "",
      "NOTES2": "",
      "NOTES3": "",
      "NOTES4": "",
      "NOTES5": "",
      "NOTES6": "",
      "RC_RATE": 0.0,
      "RC_NET": 0.0,
      "EXTENREF": 0,
      "PAYMENT_CODE": "",
      "PAYDEFREF": 0,
      "PRINT_COUNTER": 0,
      "PRINT_DATE": "1899-12-30T00:00:00",
      "FICHECNT": 1,
      "ACCFICHEREF": 0,
      "CREATED_BY": 1,
      "DATE_CREATED": "0",
      "HOUR_CREATED": 0,
      "MIN_CREATED": 0,
      "SEC_CREATED": 0,
      "MODIFIED_BY": 0,
      "DATE_MODIFIED": "0",
      "HOUR_MODIFIED": 0,
      "MIN_MODIFIED": 0,
      "SEC_MODIFIED": 0,
      "SALESMANCODE": "",
      "SALESMANREF": 0,
      "GL_POST_CANCL": 0,
      "SHIPMENT_TYPE": "",
      "SHIPPING_AGENT": "",
      "TRACK_NR": "",
      "CURRSEL_TOTALS": 0,
      "CURRSEL_DETAILS": 0,
      "TRADING_GRP": "",
      "TEXTINC": 0,
      "DATA_SITEID": 0,
      "DATA_REFERENCE": 0,
      "ORIG_NUMBER": "",
      "TRANSACTIONS": {
        "items": []
      },
      "ACCLIST":"",
      "XBUFS": "",
      "PFICHENO": "",
      "PFICHEDATE": 0,
      "SPOLINENO": "",
      "DPOLINENO": "",
      "DOCALS": "",
      "ITEXT": "",
      "DISTORDERREF": 0,
      "XML_ATTRIBUTE": 2,
      "DLV_CLIENT": 0,
      "DOC_TRACKING_NR": "",
      "ADD_TAX_CALC": 0,
      "TOTAL_ADD_TAX": 0.0,
      "U_DOC_TRACKING_NR": "",
      "VA_ACCREF": 0,
      "VA_ACCCODE": "",
      "VA_CENTERREF": 0,
      "VA_CENTERCODE": "",
      "ORGLOGOID": "",
      "FROM_EXIM": 0,
      "FRG_TYP_CODE": "",
      "SHP_INF_REF": 0,
      "EXIM_WH_FICHEREF": 0,
      "EXIM_WH_FICHENO": "",
      "EXIM_FICHE_TYPE": 0,
      "CURR_TRANSACTION": 0,
      "TC_RATE": 0.0,
      "TC_NET": 0.0,
      "PROJECT_CODE": "",
      "PROJECTREF": 0,
      "WFLOWCRDREF": 0,
      "UPDCURR": 0,
      "UPDTRCURR": 0,
      "TOTALEXADDTAX": 0.0,
      "AFFECT_COLLATRL": 0,
      "STATUS": 0,
      "GRPFIRMTRANS": 0,
      "DEDUCTIONPART1": 2,
      "DEDUCTIONPART2": 3,
      "AFFECT_RISK": 0,
      "EXCHINFO_INTERNAL_REFERENCE": 0,
      "EXCHINFO_FICHE_REF": 0,
      "EXCHINFO_ADD_DISCOUNTS": 0.0,
      "EXCHINFO_TOTAL_DISCOUNTS": 0.0,
      "EXCHINFO_TOTAL_DISCOUNTED": 0.0,
      "EXCHINFO_ADD_EXPENSES": 0.0,
      "EXCHINFO_TOTAL_EXPENSES": 0.0,
      "EXCHINFO_DIST_EXPENSES": 0.0,
      "EXCHINFO_TOTAL_DEPOZITO": 0.0,
      "EXCHINFO_TOTAL_PROMOTIONS": 0.0,
      "EXCHINFO_VAT_INC_GROSS": 0.0,
      "EXCHINFO_TOTAL_VAT": 0.0,
      "EXCHINFO_GROSS_TOTAL": 0.0,
      "EXCHINFO_TOTAL_ADD_TAX": 0.0,
      "EXCHINFO_TOTAL_EX_ADD_tAX": 0.0,
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
      "CONTROL_INFO": 0,
      "APPROVE": 0,
      "APPROVE_DATE": "1899-12-30T00:00:00",
      "DISP_STATUS": 1,
      "AUTOFILL_SLDETAILS": 0,
      "MAIN_MF_REFERENCE": 0,
      "MAIN_MF_SITEID": 0,
      "GUID": "506991D8-6A46-4D9A-B66D-83E3295E5B65",
      "GLOBAL_ID": "",
      "LOC_CONTROL_OFF": 0,
      "CANCEL_AUTO_CAMP_PROC": 0,
      "CAMPAIGN_CODE": "",
      "OFFER_REFERENCE": 0,
      "NO_CALCULATE": 0,
      "APPLY_ARP_DISCOUNT": 0,
      "SHIP_DATE": "2021-06-13T00:00:00",
      "SHIP_TIME": 335877161,
      "DOC_DATE": "2021-06-13T00:00:00",
      "DOC_TIME": 335877161,
      "FROMORDWITHPAY": 0,
      "DELIVERY_CODE": "",
      "DEST_STATUS": 0,
      "CANCEL_EXP": "",
      "UNDO_EXP": "",
      "CANCEL_DATE": "1899-12-30T00:00:00",
      "CREATE_WHERE": 0,
      "PUBLICBNACCREF": 0,
      "PUBLIC_BNACC_CODE": "",
      "PUBLIC_BNACC_IBAN": "",
      "PUBLIC_BNACC_CURRENCY": 0,
      "ACCEPT_EINV_PUBLIC": 0,
      "VATEXCEPT_CODE": "",
      "VATEXCEPT_REASON": "",
      "ADDTAXEXCEPT_CODE": "",
      "ADDTAXEXCEPT_REASON": "",
      "TAX_FREE_CHECK": 0,
      "TOTAL_NET_STR": "YüzSeksen TL DoksanÜç kuruş",
      "TR_NET_STR": "",
      "IS_OKC_FICHE": 0,
      "EDESPATCH": 0,
      "EDESPATCH_PROFILEID": 0,
      "EDESPATCH_STATUS": 0,
      "EINVOICE": 0,
      "EINVOICE_TYPE": 0,
      "EINVOICE_PROFILEID": 0,
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
      "EINVOICE_TUPASSPORTDATE": "1899-12-30T00:00:00",
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
      "EINVOICE_EXITDATE": "1899-12-30T00:00:00",
      "EINVOICE_EXITTIME": "00:00:00",
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
      "EARCHIVEDETR_LOGICALREF": 0,
      "EARCHIVEDETR_STREF": 0,
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
      "EARCHIVEDETR_OLDEARCHIVESTATUS": 0,
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
      "EARCHIVEDETR_SELLERCLIENTCODE": "",
      "EPRODUCER_STATUS": 0,
      "EPRODUCER_SENDMOD": 0,
      "EPRODUCER_TAXNR": "",
      "EPRODUCER_TCKNO": "",
      "EPRODUCER_NAME": "",
      "EPRODUCER_SURNAME": "",
      "EPRODUCER_DEFINITION": "",
      "EPRODUCER_ADDR1": "",
      "EPRODUCER_ADDR2": "",
      "EPRODUCER_CITYCODE": "",
      "EPRODUCER_CITY": "",
      "EPRODUCER_COUNTRYCODE": "",
      "EPRODUCER_COUNTRY": "",
      "EPRODUCER_POSTCODE": "",
      "EPRODUCER_DISTRICTCODE": "",
      "EPRODUCER_DISTRICT": "",
      "EPRODUCER_TOWNCODE": "",
      "EPRODUCER_TOWN": "",
      "EPRODUCER_EMAILADDR": "",
      "EPRODUCER_ISCOMP": 0,
      "EPRODUCER_DELIVERYDATEORG": 0,
      "EPRODUCER_DELIVERYDATE": "",
      "EPRODUCER_ISPERCURR": 0
    }
  }
}

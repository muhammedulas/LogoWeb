import { Component, OnInit } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/itemResp';
import { ItemsService } from '../../../../services/items.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog_StockComponent } from './dialog_Stock/dialog_Stock.component';
import { Dialog_newItemComponent } from './dialog_newItem/dialog_newItem.component';
import { Dialog_editInspectComponent } from './dialog_edit-inspect/dialog_edit-inspect.component';
import { itemStock } from '../../../../models/itemStockModel';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { detailedItemModel } from '../../../../models/detailedItemModel';
import { Dialog_deleteItemComponent } from './dialog_deleteItem/dialog_deleteItem.component';


export interface stockData {
  code: string;
  name: string;
  real: number;
  onHand: number;
  acts: number;
}

export interface itemFormData {
  "INSPECT": boolean;
  "INTERNAL_REFERENCE": number;
  "RECORD_STATUS": number;
  "CARD_TYPE": number;
  "CODE": string;
  "NAME": string;
  "GROUP_CODE": string;
  "PRODUCER_CODE": string;
  "AUXIL_CODE": string;
  "AUTH_CODE": string;
  "CLASS_TYPE": number;
  "USEF_PURCHASING": number;
  "USEF_SALES": number;
  "USEF_MM": number;
  "VAT": number;
  "PAYMENT_CODE": string;
  "TRACK_TYPE": number;
  "LOCATION_TRACKING": number;
  "TOOL": number;
  "AUTOINCSL": number;
  "LOTS_DIVISIBLE": number;
  "DEMAND_MEET_SORT_FLD1": string;
  "DEMAND_MEET_SORT_FLD2": string;
  "DEMAND_MEET_SORT_FLD3": string;
  "DEMAND_MEET_SORT_FLD4": string;
  "DEMAND_MEET_SORT_FLD5": string;
  "SHELF_LIFE": number;
  "SHELF_DATE": number;
  "IMAGEINC": number;
  "DEPREC_TYPE": number;
  "DEPREC_RATE": number;
  "DEPREC_DURATION": number;
  "SALVAGE_VALUE": number;
  "REVAL_FLAG": number;
  "REVDEPREC_RFLAG": number;
  "PARTIAL_DEPREC": number;
  "DEPREC_TYPE2": number;
  "DEPREC_RATE2": number;
  "DEPREC_DURATION2": number;
  "REVAL_FLAG2": number;
  "REVDEPREC_FLAG2": number;
  "PARTIAL_DEPREC2": number;
  "APPROVED": number;
  "UNITSET_CODE": string;
  "QCCSET_CODE": string;
  "DISTRIBUTED_AMOUNT": number;
  "CREATED_BY": number;
  "DATE_CREATED": string;
  "HOUR_CREATED": number;
  "MIN_CREATED": number;
  "SEC_CREATED": number;
  "MODIFIED_BY": number;
  "DATE_MODIFIED": string;
  "HOUR_MODIFIED": number;
  "MIN_MODIFIED": number;
  "SEC_MODIFIED": number;
  "DATA_SITEID": number;
  "DATA_REFERENCE": number;
  "UNIVERSAL_ID": string;
  "DIST_LOT_UNITS": number;
  "COMB_LOT_UNITS": number;
  "FACTORY_PARAMS": {
    "items": [
      {
        "INTERNAL_REFERENCE": 1,
        "FACTORYNR": number;
        "SPECIALIZED": number;
        "PROCURECLASS": number;
        "LOWLEVELCODE": number;
        "DIVLOTSIZE": number;
        "MRPCNTRL": number;
        "PLANPOLICY": number;
        "LOTSIZINGMTD": number;
        "FIXEDLOTSIZE": number;
        "YIELD": number;
        "MINORDERQTY": number;
        "MAXORDERQTY": number;
        "MULTORDERQTY": number;
        "MINORDERDAY": number;
        "MAXORDERDAY": number;
        "REORDERPOINT": number;
        "AUTOMTRISSUE": number;
        "DEFSERILOTNO": string;
        "AUTOLOTOUTMTD": number;
        "LOTPARTY": number;
        "OUTLOTSIZE": number;
        "COUNTFORMPS": number;
        "LOT_SIZING_MTD2": number;
        "FIXED_LOT_SIZE2": number;
        "YIELD2": number;
        "MIN_ORDER_QTY2": number;
        "MAX_ORDER_QTY2": number;
        "MULT_ORDER_QTY2": number;
        "CLAS": number;
        "DOMINANTFLAG": number;
        "DOMINANTCODE": string;
        "PROCURE_INVEN": 0
      }
    ]
  };
  "WH_PARAMS": {};
  "CHARACTERISTICS": {};
  "DOMINANT_CLASSES": {};
  "UNITS": {
    "items": [
      {
        "UNIT_CODE": "ADET",
        "BARCODE": string;
        "USEF_MTRLCLASS": 1,
        "USEF_PURCHCLAS": 1,
        "USEF_SALESCLAS": 1,
        "MTRL_PRIORITY": number;
        "PURCH_PRIORTY": number;
        "SALES_PRIORITY": number;
        "WIDTH": number;
        "LENGTH": number;
        "HEIGHT": number;
        "AREA": number;
        "VOLUME": number;
        "WEIGHT": number;
        "GROSS_VOLUME": number;
        "GROSS_WEIGHT": number;
        "CONV_FACT1": 1.0,
        "CONV_FACT2": 1.0,
        "EXT_ACC_FLAGS": number;
        "WIDTH_CODE": string;
        "LENGTH_CODE": string;
        "HEIGHT_CODE": string;
        "AREA_CODE": string;
        "VOLUME_CODE": string;
        "WEIGHT_CODE": string;
        "GROSS_VOL_CODE": string;
        "GROSS_WGHT_CODE": string;
        "DATA_REFERENCE": 1,
        "DATA_SITEID": number;
        "INTERNAL_REFERENCE": 1,
        "BARCODE2": string;
        "BARCODE3": string;
        "WITHUNIT_BARCODE": string;
        "WBARCODESHIFT": number;
        "BARCODE_LIST": {},
        "GLOBAL_ID": ""
      }
    ]
  };
  "COMPOSITES": {};
  "GL_LINKS": {
    "items": [
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 1,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 2,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 3,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 4,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 5,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 6,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 7,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 8,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 9,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 10,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 11,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 12,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 13,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 14,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 15,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 16,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 17,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 18,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 95,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 96,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 99,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 110,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 111,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 119,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 135,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 136,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 137,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 143,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 162,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 172,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      },
      {
        "INTERNAL_REFERENCE": number;
        "INFO_TYPE": 199,
        "GLACC_CODE": string;
        "OHP_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": 0
      }
    ]
  };
  "SUPPLIERS": {
    "items": [
      {
        "INTERNAL_REFERENCE": number;
        "SUPPLY_TYPE": number;
        "PRIORITY": number;
        "LINE_NO": number;
        "TRADING_GRP": string;
        "CL_CARD_TYPE": number;
        "QCC_CHECK": number;
        "LEAD_TIME": number;
        "MAX_QUANTITY": number;
        "MIN_QUANTITY": number;
        "SPECIALIZED": number;
        "ICUST_SUP_CODE": string;
        "ICUST_SUP_NAME": string;
        "QTY_DEP_LEAD_TIME": number;
        "ARP_CODE": string;
        "PACKET_CODE": string;
        "PACKAGING_AMNT": number;
        "UNIT_CODE": string;
        "PACKET_USE_TYPE": number;
        "UNITSET_CODE": string;
        "ORD_PERC": number;
        "ORD_FREC": 0
      }
    ]
  };
  "ITEXT": string;
  "IMAGE"?: string;
  "DIST_POINT": number;
  "CAN_USE_IN_TRANS": number;
  "ISO_NR": string;
  "GROUP_NR": string;
  "PROD_COUNTRY": string;
  "EXT_ACC_FLAGS": number;
  "ADD_TAX_CODE": string;
  "MULTI_ADD_TAX": number;
  "ADDTAXLIST": {};
  "PACKET": number;
  "SALVAGE_VAL": number;
  "SELVAT": number;
  "RETURNVAT": number;
  "SELPRVAT": number;
  "RETURNPRVAT": number;
  "LOGOID": string;
  "LID_CONFIRMED": number;
  "QPRODS": {};
  "QPRODSUBCONTS": {};
  "GTIPCODE": string;
  "B2CCODE": string;
  "MARKCODE": string;
  "IMG2INC": number;
  "EXPCTGNR": string;
  "EXTCRD_FLAGS": number;
  "MIN_ORD_AMNT": number;
  "FREIGHT_PLACE": string;
  "FREIGHT_TYPE_CODE1": string;
  "FREIGHT_TYPE_CODE2": string;
  "FREIGHT_TYPE_CODE3": string;
  "FREIGHT_TYPE_CODE4": string;
  "FREIGHT_TYPE_CODE5": string;
  "FREIGHT_TYPE_CODE6": string;
  "FREIGHT_TYPE_CODE7": string;
  "FREIGHT_TYPE_CODE8": string;
  "FREIGHT_TYPE_CODE9": string;
  "FREIGHT_TYPE_CODE10": string;
  "FREIGHT_TYPE_DEF1": number;
  "FREIGHT_TYPE_DEF2": number;
  "FREIGHT_TYPE_DEF3": number;
  "FREIGHT_TYPE_DEF4": number;
  "FREIGHT_TYPE_DEF5": number;
  "FREIGHT_TYPE_DEF6": number;
  "FREIGHT_TYPE_DEF7": number;
  "FREIGHT_TYPE_DEF8": number;
  "FREIGHT_TYPE_DEF9": number;
  "FREIGHT_TYPE_DEF10": number;
  "QPRODAMNT": number;
  "QPROD_UOM": number;
  "QPROD_UNITCODE": string;
  "QPRODSOURCEINDEX": number;
  "QPROD_DEPARTMENT": number;
  "QPRODSUB_AMOUNT": number;
  "QPRODSUB_UNITCODE": string;
  "QPRODSUB_SOURCEINDEX": number;
  "QPRODSUB_DEPARTMENT": number;
  "EXPCATEGORY": string;
  "EAN_BARCODE": string;
  "ITEXTENG": string;
  "LOSTFACTOR": number;
  "GENIUSFLDSLIST"?: {};
  "DEPRCLASSTYPE": string;
  "ADD_COST": number;
  "DEFNFLDSLIST"?: {};
  "WFLOWCARDREF": number;
  "ORGLOGOID": string;
  "CODE_CHANGED": number;
  "AVR_WH_DURAITON": number;
  "IMAGE1": string;
  "IMAGE1_SIZE": number;
  "IMAGE2": string;
  "IMAGE2_SIZE": number;
  "CANCONFIGURE": number;
  "CHARSET": string;
  "CHARSETNAME": string;
  "VGEN_DATA_REFERENCE": number;
  "VRNTEXCEPTIONS": {};
  "VRNTCODETEMPS": {};
  "VRNTEXCPTEMPS": {};
  "CONSCODE": string;
  "PROJECT_CODE": string;
  "AUXIL_CODE2": string;
  "AUXIL_CODE3": string;
  "AUXIL_CODE4": string;
  "AUXIL_CODE5": string;
  "UPDATECHILDS": number;
  "CAN_DEDUCT": number;
  "EXPENSE": number;
  "EXIM_TAX1": number;
  "EXIM_TAX2": number;
  "EXIM_TAX3": number;
  "EXIM_TAX4": number;
  "EXIM_TAX5": number;
  "REYON_CODE": string;
  "KDV_DEPT_NR": number;
  "SCALES": number;
  "SCALE_NR": number;
  "ORIGIN": string;
  "NAME2": string;
  "APP_SPE_VAT_MATRAH": number;
  "NAME3": string;
  "NAME4": string;
  "GLOBAL_ID": string;
  "FLTIMAGE1": number;
  "FLTIMAGE2": number;
  "DEDUCT_CODE": string;
  "DEDUCT_DEF": string;
  "SALE_DEDUCTION_PART1": number;
  "SALE_DEDUCTION_PART2": number;
  "PURCH_DEDUCTION_PART1": number;
  "PURCH_DEDUCTION_PART2": number;
  "CATEGORY_ID": string;
  "CATEGORY_NAME": string;
  "KEYWORD1": string;
  "KEYWORD2": string;
  "KEYWORD3": string;
  "KEYWORD4": string;
  "KEYWORD5": string;
  "SUBSGOOD_CODE": string;
  "PRODUCT_LEVEL": number;
  "PORD_AMOUNT_TOLERANCE": number;
  "SORD_AMOUNT_TOLERANCE": number;
  "ALTERNATIVES": {
    "items": [
      {
        "INTERNAL_REFERENCE": number;
        "LINE_NO": number;
        "PRIORITY": number;
        "CONV_FACT1": number;
        "CONV_FACT2": number;
        "MAX_QUANTITY": number;
        "MIN_QUANTITY": number;
        "SUBS_CODE": string;
        "MAIN_CODE": string;
        "DATA_SITEID": number;
        "DATA_REFERENCE": number;
        "MAIN_VRNTCODE": string;
        "SUBS_VRNTCODE": string;
      }
    ]
  };
  "CPA_CODE": string;
  "PUBLIC_COUNTRY_CODE": string;
  "PUBLIC_COUNTRY_NAME": string;
  "FA_USEFUL_LIFE_CODE1": string;
  "FA_USEFUL_LIFE_CODE2": string;
  "MOLD": number;
  "MOLD_LIFETRACKTYPE": number;
  "MOLD_USAGELIFE": number;
  "MOLD_FACTOR": number;
  "MOLD_MAINTNUMBER": number;
  "MOLD_MAINTLIFETYPE": number;
  "MOLD_MAINTLIFE": number;
  "MOLD_LIFEASRATIO": number;
  "MOLD_MAINTTYPE": number;
  "MOLD_MAINTPERIOD": number;
  "MOLD_MAINTPERUNIT": number;
  "OBTAIN_TYPE": number;
  "GAIN_TYPE": number;
  "FORE_CAST_CODE": string;
  "SALES_LIMIT_QUANTITY": number;
  "NO_DISCOUNT": number;
  "GUID": string;
}

@Component({
  selector: 'app-malzemeler',
  templateUrl: './malzemeler.component.html',
  styleUrls: ['./malzemeler.component.scss']
})
export class MalzemelerComponent implements OnInit {
  public stockInfo: stockData = {
    code: "",
    name: "",
    real: 0,
    onHand: 0,
    acts: 0
  }
  public searchButtonActive: boolean = false;
  public searchMode: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  public selectedItem: item = new item;
  private response: itemResp = new itemResp;
  public items: item[] = [];
  private tempItem: detailedItemModel = new detailedItemModel;
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["CardType", "Code", "Name", "MainUnit", "Vat", "ShelfLife", "ShelfDate", "Stock"]
  constructor(private itemsSvc: ItemsService, private toast: ToastrService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.getItemCount()
    this.getItems(1)
  }

  getItems(offset: number) {
    this.itemsSvc.getItems(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.items = this.response.items
      this.loaded = true
    },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.tstUnauthorized()
        }
      }
    )
  }

  getItemCount() {
    this.itemsSvc.itemCount().subscribe(r => {
      this.itemCount = r.items[0].recordCount
      this.pageCount = Math.floor(this.itemCount / this.recLimit)
    })
  }

  select(itm: item) {
    this.selectedItem = itm
    console.log('s', this.selectedItem)
  }

  showStockInfo(itm: item) {
    this.stockInfo = {
      code: itm.CODE,
      name: itm.NAME,
      real: 0,
      onHand: 0,
      acts: 0
    }
    this.itemsSvc.getStock(itm.INTERNAL_REFERENCE.toLocaleString()).subscribe((resp) => {
      resp.items.forEach(v => {
        this.stockInfo.onHand += v.ONHAND
        this.stockInfo.acts += v.ACTSORDER
        this.stockInfo.real = this.stockInfo.onHand - this.stockInfo.acts
        this.dialog.open(Dialog_StockComponent, {
          data: this.stockInfo
        })
      })
      console.log(this.stockInfo)
    }, err => {
      console.log('---', err)
      if (err.status == 401) {
        this.tstUnauthorized()
      }
    })
  }

  addItem() {
    var newItem: detailedItemModel = new detailedItemModel
    this.dialog.open(Dialog_newItemComponent, {
      width: '90vw',
      height: '90vh'
    })
  }

  deleteItem(id: number) {
    this.dialog.open(Dialog_deleteItemComponent, {
      data: this.selectedItem.INTERNAL_REFERENCE
    })
  }

  editItem(inspect: boolean) {

    var editDialog = this.itemsSvc.getItemByID(this.selectedItem.INTERNAL_REFERENCE).subscribe(resp => {
      this.tempItem = resp
      this.tempItem.INSPECT = inspect
      this.dialog.open(Dialog_editInspectComponent, {
        data: this.tempItem,
        width: '90vw',
        height: '90vh'
      })
    })

  }

  searchItem(key:KeyboardEvent, data:string) {
    if(key.key == "Enter"){
      console.log(data)
    }
  }

  disableSearchMode(){
    this.searchMode == false
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getItems(1)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['malzemeler'])
  }

  nextPage() {
    if (this.currPage <= this.pageCount) {
      this.currPage++
    }
    this.loaded = false
    this.itemsSvc.changePage(this.response.next.href).subscribe(
      (resp) => {
        this.response = resp
        console.log(this.response)
        this.items = this.response.items
        this.router.navigate(['malzemeler'])
        this.loaded = true
      },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.tstUnauthorized()
        }
      }
    )
  }

  previousPage() {
    if (this.currPage >= 1) {
      this.currPage--
    }
    this.loaded = false
    this.itemsSvc.changePage(this.response.previous.href).subscribe(
      (resp) => {
        this.response = resp
        console.log(this.response)
        this.items = this.response.items
        this.router.navigate(['malzemeler'])
        this.loaded = true
      },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.tstUnauthorized()
        }
      }
    )
  }

  firstPage() {
    this.loaded = false
    this.currPage = 1
    this.getItems(1)
    this.router.navigate(['malzemeler'])
  }

  lastPage() {
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.itemsSvc.getItems(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.items = this.response.items
      this.loaded = true
    },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.tstUnauthorized()
        }
      }
    )
  }

  gotoPage() {
    this.loaded = false
    let offset = ((this.currPage - 1) * this.recLimit) + 1
    this.itemsSvc.getItems(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.items = this.response.items
      this.router.navigate(['malzemeler'])
      this.loaded = true
    },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.tstUnauthorized()
        }
      })
  }
  //Pagination


  //Toasts
  tstUnauthorized() {
    this.toast.error('Tekrar Giriş Yapmak İçin Sayfayı Yenileyin', 'Bu işlem İçin Yetkiniz Yok', { positionClass: 'toast-top-center', timeOut: 300000 })
  }

  //

}

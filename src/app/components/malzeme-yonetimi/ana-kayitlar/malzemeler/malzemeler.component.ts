import { Component, OnInit } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/itemResp';
import { ItemsService } from '../../../../services/items.service';
import { ToastrService } from 'ngx-toastr';
import { HostListener } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog_StockComponent } from './dialog_Stock/dialog_Stock.component';
import { Dialog_newItemComponent } from './dialog_newItem/dialog_newItem.component';
import { itemStock } from 'src/app/models/itemStockModel';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';

export interface stockData {
  code: string;
  name: string;
  real: number;
  onHand: number;
  acts: number;
}

export interface itemFormData {
  INTERNAL_REFERENCE: number;
  RECORD_STATUS: number;
  CARD_TYPE: number;
  CODE: string;
  NAME: string;
  CLASS_TYPE: number;
  USEF_PURCHASING: number;
  USEF_SALES: number;
  USEF_MM: number;
  VAT: number;
  PAYMENTREF: number;
  TRACK_TYPE: number;
  LOCATION_TRACKING: number;
  TOOL: number;
  AUTOINCSL: number;
  LOTS_DIVISIBLE: number;
  SHELF_LIFE: number;
  SHELF_DATE: number;
  DOMINANTREFS1: number;
  DOMINANTREFS2: number;
  DOMINANTREFS3: number;
  DOMINANTREFS4: number;
  DOMINANTREFS5: number;
  DOMINANTREFS6: number;
  DOMINANTREFS7: number;
  DOMINANTREFS8: number;
  DOMINANTREFS9: number;
  DOMINANTREFS10: number;
  DOMINANTREFS11: number;
  DOMINANTREFS12: number;
  IMAGEINC: number;
  TEXTINC: number;
  DEPREC_TYPE: number;
  DEPREC_RATE: number;
  EPREC_DURATION: number;
  SALVAGE_VALUE: number;
  REVAL_FLAG: number;
  REVDEPREC_RFLAG: number;
  PARTIAL_DEPREC: number;
  DEPREC_TYPE2: number;
  DEPREC_RATE2: number;
  DEPREC_DURATION2: number;
  REVAL_FLAG2: number;
  REVDEPREC_FLAG2: number;
  PARTIAL_DEPREC2: number;
  APPROVED: number;
  UNITSET_CODE: string;
  UNITSETREF: number;
  QCCSETREF: number;
  DISTRIBUTED_AMOUNT: number;
  CREATED_BY: number;
  DATE_CREATED: string;
  HOUR_CREATED: number;
  MIN_CREATED: number;
  SEC_CREATED: number;
  MODIFIED_BY: number;
  DATE_MODIFIED: string;
  HOUR_MODIFIED: number;
  MIN_MODIFIED: number;
  SEC_MODIFIED: number;
  DATA_SITEID: number;
  DATA_REFERENCE: number;
  DIST_LOT_UNITS: number;
  COMB_LOT_UNITS: number;
  MAINUNIT: string;
  AMNT: number;
  FACTORY_PARAMS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  WH_PARAMS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  CHARACTERISTICS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  DOMINANT_CLASSES: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  UNITS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    },
    items: [
      {
        UNIT_CODE: string;
        USEF_MTRLCLASS: number;
        USEF_PURCHCLAS: number;
        USEF_SALESCLAS: number;
        CONV_FACT1: number;
        CONV_FACT2: number;
        DATA_REFERENCE: number;
        INTERNAL_REFERENCE: number;
        BARCODE_LIST: {}
      }
    ]
  };
  COMPOSITES: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  GL_LINKS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  SUPPLIERS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  XCNT: number;
  LANGP: string;
  XML_ATTRIBUTE: number;
  DIST_POINT: number;
  CAN_USE_IN_TRANS: number;
  ADD_TAX_REF: number;
  EXT_ACC_FLAGS: number;
  MULTI_ADD_TAX: number;
  ADDTAXLIST: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  PACKET: number;
  SALVAGE_VAL: number;
  SELVAT: number;
  RETURNVAT: number;
  SELPRVAT: number;
  RETURNPRVAT: number;
  LID_CONFIRMED: number;
  QPRODS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  QPRODSUBCONTS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  MARKREF: number;
  IMG2INC: number;
  EXTCRD_FLAGS: number;
  MIN_ORD_AMNT: number;
  FREIGHT_TYPE_DEF1: number;
  FREIGHT_TYPE_DEF2: number;
  FREIGHT_TYPE_DEF3: number;
  FREIGHT_TYPE_DEF4: number;
  FREIGHT_TYPE_DEF5: number;
  FREIGHT_TYPE_DEF6: number;
  FREIGHT_TYPE_DEF7: number;
  FREIGHT_TYPE_DEF8: number;
  FREIGHT_TYPE_DEF9: number;
  FREIGHT_TYPE_DEF10: number;
  QPRODAMNT: number;
  QPROD_UOM: number;
  QPRODSOURCEINDEX: number;
  QPROD_DEPARTMENT: number;
  QPRODSUB_AMOUNT: number;
  QPRODSUB_UOM: number;
  QPRODSUB_SOURCEINDEX: number;
  QPRODSUB_DEPARTMENT: number;
  TEXTINCENG: number;
  LOSTFACTOR: number;
  GENIUSFLDSLIST: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  ADD_COST: number;
  DEFNFLDSLIST: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  WFLOWCARDREF: number;
  CODE_CHANGED: number;
  AVR_WH_DURAITON: number;
  IMAGE1_SIZE: number;
  IMAGE2_SIZE: number;
  CANCONFIGURE: number;
  CHARSETREF: number;
  VGEN_DATA_REFERENCE: number;
  VRNTEXCEPTIONS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  VRNTCODETEMPS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  VRNTEXCPTEMPS: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  CONSCODEREF: number;
  PROJECTREF: number;
  UPDATECHILDS: number;
  CAN_DEDUCT: number;
  EXPENSE: number;
  EXIM_TAX1: number;
  EXIM_TAX2: number;
  EXIM_TAX3: number;
  EXIM_TAX4: number;
  EXIM_TAX5: number;
  KDV_DEPT_NR: number;
  SCALES: number;
  SCALE_NR: number;
  APP_SPE_VAT_MATRAH: number;
  FLTIMAGE1: number;
  FLTIMAGE2: number;
  SALE_DEDUCTION_PART1: number;
  SALE_DEDUCTION_PART2: number;
  PURCH_DEDUCTION_PART1: number;
  PURCH_DEDUCTION_PART2: number;
  PRODUCT_LEVEL: number;
  PORD_AMOUNT_TOLERANCE: number;
  SORD_AMOUNT_TOLERANCE: number;
  ALTERNATIVES: {
    Meta: {
      href: string;
      mediaType: string;
      apiVersion: string;
    }
  };
  PUBLICCOUNTRYREF: number;
  MOLD: number;
  MOLD_LIFETRACKTYPE: number;
  MOLD_USAGELIFE: number;
  MOLD_FACTOR: number;
  MOLD_MAINTNUMBER: number;
  MOLD_MAINTLIFETYPE: number;
  MOLD_MAINTLIFE: number;
  MOLD_LIFEASRATIO: number;
  MOLD_MAINTTYPE: number;
  MOLD_MAINTBEGDATE: string;
  MOLD_MAINTPERIOD: number;
  MOLD_MAINTPERUNIT: number;
  OBTAIN_TYPE: number;
  GAIN_TYPE: number;
  SALES_LIMIT_QUANTITY: number;
  NO_DISCOUNT: number;
  GUID: string;
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
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  public selectedItem: item = new item;
  private response: itemResp = new itemResp;
  public items: item[] = [];
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["CardType", "Code", "Name", "MainUnit", "Vat", "ShelfLife", "ShelfDate", "Stock"]
  /*   private scrWidth: number = 0;
    public scrHeight: number = 0; */
  constructor(private itemsSvc: ItemsService, private toast: ToastrService, public dialog: MatDialog, private router: Router) {
    /* this.onResize() */
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

  addItem(){
    
    
    this.dialog.open(Dialog_newItemComponent)
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

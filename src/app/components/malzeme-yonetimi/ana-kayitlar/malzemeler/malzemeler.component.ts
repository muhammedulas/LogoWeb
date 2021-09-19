import { Component, OnInit, ViewChild } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/responseModels/itemResp';
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
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { element } from 'protractor';
import { RightsService } from 'src/app/services/rights.service';


export interface stockData {
  code: string;
  name: string;
  real: number;
  onHand: number;
  acts: number;
}

export interface itemFormData extends item {
  NAME2: string;
  NAME3: string;
  AUXIL_CODE: string;
  AUTH_CODE: string;
  GROUP_CODE: string;
  PRODUCER_CODE: string;
  AUXIL_CODE2: string;
  AUXIL_CODE3: string;
  AUXIL_CODE4: string;
  AUXIL_CODE5: string;
  PAYMENT_CODE: string;
  ADD_TAX_CODE: string;
  DEMAND_MEET_SORT_FLD1: string;
  DEMAND_MEET_SORT_FLD2: string;
  DEMAND_MEET_SORT_FLD3: string;
  DEMAND_MEET_SORT_FLD4: string;
  DEMAND_MEET_SORT_FLD5: string;
  GTIPCODE: string;
}

@Component({
  selector: 'app-malzemeler',
  templateUrl: './malzemeler.component.html',
  styleUrls: ['./malzemeler.component.scss']
})

export class MalzemelerComponent implements OnInit {
  @ViewChild("dataTable") dataTable: HTMLElement;
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
  constructor(private itemsSvc: ItemsService, private toast: ToastrService, public dialog: MatDialog, private router: Router, private rightsService: RightsService) {
  }

  ngOnInit() {
    /*     this.getItemCount() */
    this.getItems(1)
  }

  test() {
    let PDF = new jsPDF();
    PDF.text("test", 10, 10)
    PDF.save();
  }

  public downloadPDF(): void {

    html2canvas(document.querySelector("#dataTable")).then(canvas => {
      console.log("test")
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF();
      let position = 0;
      PDF.text("Başlık", 10, 10)
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save();

    });
  }

  getItems(offset: number, q?: string) {
    this.itemsSvc.getItems(offset, this.recLimit, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.items = this.response.items
      this.itemCount = resp.totalCount
      this.pageCount = Math.floor(this.itemCount / this.recLimit)
      console.log(this.pageCount)
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

  /*   getItemCount(q?:string) {
      this.itemsSvc.itemCount(q).subscribe(r => {
        this.itemCount = r.items[0].recordCount
        this.pageCount = Math.floor(this.itemCount / this.recLimit)
      })
    } */

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

  addItem(itemType: number) {
    if(this.rightsService.checkRight(1011) == false){
      this.tstUnAuthorized2()
      return
    }
    var newItem: detailedItemModel = new detailedItemModel
    this.dialog.open(Dialog_newItemComponent, {
      data: itemType
    })
  }

  deleteItem(id: number) {
    if(this.rightsService.checkRight(1023) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteItemComponent, {
      data: this.selectedItem.INTERNAL_REFERENCE
    })
  }

  editItem(inspect: boolean) {
    if(inspect){
      if(this.rightsService.checkRight(1014) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if(this.rightsService.checkRight(1012) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    var editDialog = this.itemsSvc.getItemByID(this.selectedItem.INTERNAL_REFERENCE).subscribe(resp => {
      this.tempItem = resp
      this.tempItem.INSPECT = inspect
      this.dialog.open(Dialog_editInspectComponent, {
        data: this.tempItem
      })
    })

  }

  searchItem(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getItems(1, data)
    }
  }

  cancelSearch() {
    this.searchButtonActive = false;
    this.getItems(1);
  }

  disableSearchMode() {
    this.getItems(1)
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getItems(1)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/malzeme-yonetimi/malzemeler'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++

      this.loaded = false
      this.itemsSvc.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.items = this.response.items
          this.router.navigate(['/malzeme-yonetimi/malzemeler'])
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
  }

  previousPage() {
    if (this.currPage > 1) {
      this.currPage--
      this.loaded = false
      this.itemsSvc.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.items = this.response.items
          this.router.navigate(['/malzeme-yonetimi/malzemeler'])
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
  }

  firstPage() {
    this.loaded = false
    this.currPage = 1
    this.getItems(1)
    this.router.navigate(['/malzeme-yonetimi/malzemeler'])
  }

  lastPage() {
    if (this.currPage >= this.pageCount) return
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
      this.router.navigate(['/malzeme-yonetimi/malzemeler'])
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

  tstUnAuthorized2(){
    this.toast.error('Bu işlem için yetkiniz yok',"", {positionClass:"toast-top-center"})
  }
  //

}

import { Component, OnInit } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/itemResp';
import { ItemsService } from '../../../../services/items.service';
import { ToastrService } from 'ngx-toastr';
import { HostListener } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog_StockComponent } from './dialog_Stock/dialog_Stock.component';
import { itemStock } from 'src/app/models/itemStockModel';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenu } from '@angular/material/menu';

export interface stockData {
  code: string;
  name: string;
  real: number;
  onHand: number;
  acts: number;
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
  public recLimit: number = 10;
  public pages = [];
  public selectedItem: item = new item;
  private response: itemResp = new itemResp;
  public items: item[] = [];
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["CardType", "Code", "Name", "MainUnit", "Vat", "ShelfLife", "ShelfDate", "Stock"]
  /*   private scrWidth: number = 0;
    public scrHeight: number = 0; */
  constructor(private itemsSvc: ItemsService, private toast: ToastrService, public dialog: MatDialog) {
    /* this.onResize() */
  }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.itemsSvc.getItems().subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      //this.response.items.forEach(x => x.AMNT = this.itemsSvc.getStock(x.INTERNAL_REFERENCE.toLocaleString()))
      this.items = this.response.items
      //this.malzemeler.shift();
      this.loaded = true
    },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.toast.error('Tekrar Giriş Yapmak İçin Sayfayı Yenileyin', 'Bu işlem İçin Yetkiniz Yok', { positionClass: 'toast-top-center', timeOut: 300000 })
        }
      }
    )
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
        this.toast.error('Tekrar Giriş Yapmak İçin Sayfayı Yenileyin', 'Bu işlem İçin Yetkiniz Yok', { positionClass: 'toast-top-center', timeOut: 300000 })
      }
    })
  }

  setRecLimit() {

  }

  /*   @HostListener('window:resize', ['$event'])
    onResize(event?: undefined) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth)
    } */


}

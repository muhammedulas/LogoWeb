import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dialog_orderComponent } from 'src/app/commonDialogs/dialog_order/dialog_order.component';
import { Dialog_deleteComponent } from 'src/app/components/shared/dialogs/dialog_delete/dialog_delete.component';
import { purchaseOrder } from 'src/app/models/purchaseOrder';
import { PurchaseOrdersService } from 'src/app/services/purchaseOrders.service';
import { Dialog_editInspectPurchaseOrderComponent } from './dialog_editInspectPurchaseOrder/dialog_editInspectPurchaseOrder.component';
import { Dialog_newPurchaseOrderComponent } from './dialog_newPurchaseOrder/dialog_newPurchaseOrder.component';

@Component({
  selector: 'app-satinalma-siparisleri',
  templateUrl: './satinalma-siparisleri.component.html',
  styleUrls: ['./satinalma-siparisleri.component.scss']
})
export class SatinalmaSiparisleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: PurchaseOrdersService,
    private dialog: MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedRecord: purchaseOrder = new purchaseOrder();
  public dataSet: purchaseOrder[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Date", "FicheNo", "DocNum", "ARPCode", "Warehouse", "Amount"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec: purchaseOrder) {
    this.selectedRecord = rec;
    console.log('s', this.selectedRecord)
  }

  getAllRecords(offset: number, q?: string) {
    this.service.getRecords(this.recLimit, offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.dataSet = this.response.items
      this.itemCount = resp.totalCount
      this.pageCount = Math.floor(this.itemCount / this.recLimit)
      if (this.itemCount % this.recLimit > 0 || this.pageCount < 1) this.pageCount++
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

  add() {
    this.dialog.open(Dialog_newPurchaseOrderComponent, { width: "60vw", height: "65vh" })
  }

  delete(id: number) {
    this.dialog.open(Dialog_deleteComponent, { data: id })
  }

  edit_inspect(inspectMode: boolean) {
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res => {
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectPurchaseOrderComponent, {
        data: data,
        width: "60vw",
        height: "65vh"
      })
    }, err => {
      this.toast.error(err.message, "Hata", { positionClass: "toast-top-center", timeOut: 3000 })
    })

  }
  search(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getAllRecords(0, data)
    }
  }
  cancelSearch() {
    this.searchButtonActive = false;
    this.getAllRecords(0);
  }

  test(){
    this.dialog.open(Dialog_orderComponent,{
      height:"70vh",
      width:"70vw"
    })
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getAllRecords(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['satinalma-siparisleri'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.service.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.dataSet = this.response.items
          this.router.navigate(['satinalma-siparisleri'])
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
      this.service.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.dataSet = this.response.items
          this.router.navigate(['satinalma-siparisleri'])
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
    this.getAllRecords(0)
    this.router.navigate(['satinalma-siparisleri'])
  }

  lastPage() {
    if (this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.service.getRecords(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.dataSet = this.response.items
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
    this.service.getRecords(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.dataSet = this.response.items
      this.router.navigate(['satinalma-siparisleri'])
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

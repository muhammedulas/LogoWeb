import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dialog_deleteComponent } from 'src/app/components/shared/dialogs/dialog_delete/dialog_delete.component';
import { purchaseDispatch } from 'src/app/models/purchaseDispatch';
import { PurchaseDispatchesService } from 'src/app/services/purchaseDispatches.service';
import { Dialog_editInspectPurchaseDispatchComponent } from './dialog_editInspectPurchaseDispatch/dialog_editInspectPurchaseDispatch.component';
import { Dialog_newPurchaseDispatchComponent } from './dialog_newPurchaseDispatch/dialog_newPurchaseDispatch.component';

@Component({
  selector: 'app-satinalma-irsaliyeleri',
  templateUrl: './satinalma-irsaliyeleri.component.html',
  styleUrls: ['./satinalma-irsaliyeleri.component.scss']
})
export class SatinalmaIrsaliyeleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: PurchaseDispatchesService,
    private dialog: MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedRecord: purchaseDispatch = new purchaseDispatch();
  public dataSet: purchaseDispatch[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = [  "Date", "FicheNo", "DocNum", "Type", "ARPCode", "Amount"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec: purchaseDispatch) {
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
    this.dialog.open(Dialog_newPurchaseDispatchComponent, { width: "60vw"}).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  delete(id: number) {
    this.dialog.open(Dialog_deleteComponent, { data: id }).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  edit_inspect(inspectMode: boolean) {
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res => {
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectPurchaseDispatchComponent, {
        data: data,
        width: "60vw"
      }).afterClosed().subscribe(q => {
        this.getAllRecords(0)
        this.currPage = 1
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

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getAllRecords(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/satinalma/satinalma-irsaliyeleri'])
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
          this.router.navigate(['/satinalma/satinalma-irsaliyeleri'])
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
          this.router.navigate(['/satinalma/satinalma-irsaliyeleri'])
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
    this.router.navigate(['/satinalma/satinalma-irsaliyeleri'])
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
      this.router.navigate(['/satinalma/satinalma-irsaliyeleri'])
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

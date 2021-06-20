import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dialog_deleteDistRouteComponent } from 'src/app/components/satis/ana-kayitlar/dagitim-rotalari/Dialog_deleteDistRoute/Dialog_deleteDistRoute.component';
import { Dialog_editInspectDistRouteComponent } from 'src/app/components/satis/ana-kayitlar/dagitim-rotalari/Dialog_editInspectDistRoute/Dialog_editInspectDistRoute.component';
import { Dialog_newDistRouteComponent } from 'src/app/components/satis/ana-kayitlar/dagitim-rotalari/Dialog_newDistRoute/Dialog_newDistRoute.component';
import { itemSlip } from 'src/app/models/itemSlip';
import { ItemSlipsService } from 'src/app/services/itemSlips.service';
import { Dialog_editInspectItemSlipComponent } from './dialog_editInspectItemSlip/dialog_editInspectItemSlip.component';
import { Dialog_newItemSlipComponent } from './dialog_newItemSlip/dialog_newItemSlip.component';

@Component({
  selector: 'app-malzeme-yonetim-fisleri',
  templateUrl: './malzeme-yonetim-fisleri.component.html',
  styleUrls: ['./malzeme-yonetim-fisleri.component.scss']
})
export class MalzemeYonetimFisleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: ItemSlipsService,
    private dialog: MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedRecord: itemSlip = new itemSlip();
  public dataSet: itemSlip[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["HyerarchyCode", "Type", "Date", "FicheNo", "DocNum", "POrderFicheNr", "Amount"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec: itemSlip) {
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
    this.dialog.open(Dialog_newItemSlipComponent, { width: "60vw", height: "65vh" })
  }

  delete(id: number) {
    this.dialog.open(Dialog_deleteDistRouteComponent, { data: id })
  }

  edit_inspect(inspectMode: boolean) {
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res => {
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectItemSlipComponent, {
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

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getAllRecords(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/malzeme-yonetimi/malzeme-yonetim-fisleri'])
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
          this.router.navigate(['/malzeme-yonetimi/malzeme-yonetim-fisleri'])
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
          this.router.navigate(['/malzeme-yonetimi/malzeme-yonetim-fisleri'])
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
    this.router.navigate(['/malzeme-yonetimi/malzeme-yonetim-fisleri'])
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
      this.router.navigate(['/malzeme-yonetimi/malzeme-yonetim-fisleri'])
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

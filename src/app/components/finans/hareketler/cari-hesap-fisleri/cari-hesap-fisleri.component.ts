import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dialog_deleteComponent } from 'src/app/components/shared/dialogs/dialog_delete/dialog_delete.component';
import { arpSlips } from 'src/app/models/arpSlips';
import { ArpSlipsService } from 'src/app/services/arpSlips.service';
import { RightsService } from 'src/app/services/rights.service';
import { Dialog_editInspectArpSlipComponent } from './dialog_editInspectArpSlip/dialog_editInspectArpSlip.component';
import { Dialog_newArpSlipComponent } from './dialog_newArpSlip/dialog_newArpSlip.component';

@Component({
  selector: 'app-cari-hesap-fisleri',
  templateUrl: './cari-hesap-fisleri.component.html',
  styleUrls: ['./cari-hesap-fisleri.component.scss']
})
export class CariHesapFisleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: ArpSlipsService,
    private dialog: MatDialog,
    private rightsService: RightsService

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedRecord: arpSlips = new arpSlips();
  public dataSet: arpSlips[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["HyerarchyCode", "Date", "Type", "FicheNo", "Debit", "Credit", "Notes"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec: arpSlips) {
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
    if (this.rightsService.checkRight(2061) == false) {
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_newArpSlipComponent, { width: "60vw", height: "65vh" })
  }

  delete(id: number) {
    if (this.rightsService.checkRight(2063) == false) {
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteComponent, { data: id })
  }

  edit_inspect(inspectMode: boolean) {
    if (inspectMode) {
      if (this.rightsService.checkRight(2064) == false) {
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if (this.rightsService.checkRight(2062) == false) {
        this.tstUnAuthorized2()
        return
      }
    }
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res => {
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectArpSlipComponent, {
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
    this.router.navigate(['/finans/cari-hesap-fisleri'])
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
          this.router.navigate(['/finans/cari-hesap-fisleri'])
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
          this.router.navigate(['/finans/cari-hesap-fisleri'])
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
    this.router.navigate(['/finans/cari-hesap-fisleri'])
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
      this.router.navigate(['/finans/cari-hesap-fisleri'])
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

  tstUnAuthorized2() {
    this.toast.error('Bu işlem için yetkiniz yok', "", { positionClass: "toast-top-center" })
  }
  //
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cheque_Pnote } from 'src/app/models/chequeAndPnote';
import { ChequeAndPnotesService } from 'src/app/services/chequeAndPnotes.service';
import { RightsService } from 'src/app/services/rights.service';
import { Dialog_deleteCnPnoteComponent } from './Dialog_deleteCnPnote/Dialog_deleteCnPnote.component';
import { Dialog_editInspectCnPnoteComponent } from './Dialog_editInspectCnPnote/Dialog_editInspectCnPnote.component';

@Component({
  selector: 'app-cek-senetler',
  templateUrl: './cek-senetler.component.html',
  styleUrls: ['./cek-senetler.component.scss']
})
export class CekSenetlerComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private CPService:ChequeAndPnotesService,
    private dialog:MatDialog,
    private rightsService: RightsService

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedCP:cheque_Pnote = new cheque_Pnote
  public CPs:cheque_Pnote[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["PortfolioNumber", "SerialNumber", "Account", "Amount", "DueDate", "Status"]



  ngOnInit() {
    this.getCPs(0)
  }

  select(itemChar:cheque_Pnote){
    this.selectedCP = itemChar;
    console.log('s', this.selectedCP)
  }

  getCPs(offset: number, q?: string) {
    this.CPService.getCPs(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.CPs = this.response.items
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


  delete(id:number) {
    if(this.rightsService.checkRight(2033) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteCnPnoteComponent,{data:id})
  }

  edit_inspect(inspectMode:boolean){
    if(inspectMode){
      if(this.rightsService.checkRight(2034) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if(this.rightsService.checkRight(2032) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    var CP
    this.CPService.getCPById(this.selectedCP.INTERNAL_REFERENCE).subscribe(res=>{
      CP = res
      CP.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectCnPnoteComponent,{
        data:CP,
        width:"50vw",
        height:"50vh"
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  search(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getCPs(0, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getCPs(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getCPs(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/finans/cek-senetler'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.CPService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.CPs = this.response.items
          this.router.navigate(['/finans/cek-senetler'])
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
      this.CPService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.CPs = this.response.items
          this.router.navigate(['/finans/cek-senetler'])
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
    this.getCPs(0)
    this.router.navigate(['/finans/cek-senetler'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.CPService.getCPs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.CPs = this.response.items
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
    this.CPService.getCPs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.CPs = this.response.items
      this.router.navigate(['/finans/cek-senetler'])
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

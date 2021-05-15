import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { safeDeposit } from 'src/app/models/safeDeposit';
import { SafeDepositService } from 'src/app/services/safeDeposit.service';
import { Dialog_deleteSDComponent } from './Dialog_deleteSD/Dialog_deleteSD.component';
import { Dialog_editInspectSDComponent } from './Dialog_editInspectSD/Dialog_editInspectSD.component';
import { Dialog_newSDComponent } from './Dialog_newSD/Dialog_newSD.component';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.scss']
})
export class KasaComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private SDService:SafeDepositService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedSD:safeDeposit = new safeDeposit
  public safeDeposits:safeDeposit[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Code", "Description", "Usage_Note"]



  ngOnInit() {
    this.getSDs(0)
  }

  select(itemChar:safeDeposit){
    this.selectedSD = itemChar;
    console.log('s', this.selectedSD)
  }

  getSDs(offset: number, q?: string) {
    this.SDService.getSDs(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.safeDeposits = this.response.items
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

  addSD(){
    this.dialog.open(Dialog_newSDComponent,{width:"60vw",height:"65vh"})
  }

  deleteSD(id:number) {
    this.dialog.open(Dialog_deleteSDComponent,{data:id})
  }

  edit_inspectSD(inspectMode:boolean){
    var bank
    this.SDService.getSDByID(this.selectedSD.INTERNAL_REFERENCE).subscribe(res=>{
      bank = res
      bank.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectSDComponent,{
        data:bank,
        width:"60vw",
        height:"65vh"
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  searchSD(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getSDs(0, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getSDs(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getSDs(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['birim-setleri'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.SDService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.safeDeposits = this.response.items
          this.router.navigate(['birim-setleri'])
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
      this.SDService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.safeDeposits = this.response.items
          this.router.navigate(['birim-setleri'])
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
    this.getSDs(0)
    this.router.navigate(['birim-setleri'])
  }

  lastPage() {
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.SDService.getSDs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.safeDeposits = this.response.items
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
    this.SDService.getSDs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.safeDeposits = this.response.items
      this.router.navigate(['birim-setleri'])
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

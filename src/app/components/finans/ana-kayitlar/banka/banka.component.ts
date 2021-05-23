import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';
import { Dialog_deleteBankComponent } from './Dialog_deleteBank/Dialog_deleteBank.component';
import { Dialog_editInspectBankComponent } from './Dialog_editInspectBank/Dialog_editInspectBank.component';
import { Dialog_newBankComponent } from './Dialog_newBank/Dialog_newBank.component';

@Component({
  selector: 'app-banka',
  templateUrl: './banka.component.html',
  styleUrls: ['./banka.component.scss']
})
export class BankaComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private bankService:BankService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedBank:bank = new bank
  public banks:bank[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Code", "Title", "Division"]



  ngOnInit() {
    this.getBanks(0)
  }

  select(itemChar:bank){
    this.selectedBank = itemChar;
    console.log('s', this.selectedBank)
  }

  getBanks(offset: number, q?: string) {
    this.bankService.getBanks(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.banks = this.response.items
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

  addBank(){
    this.dialog.open(Dialog_newBankComponent,{width:"60vw",height:"65vh"})
  }

  deleteBank(id:number) {
    this.dialog.open(Dialog_deleteBankComponent,{data:id})
  }

  edit_inspectBank(inspectMode:boolean){
    var bank
    this.bankService.getBankByID(this.selectedBank.INTERNAL_REFERENCE).subscribe(res=>{
      bank = res
      bank.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectBankComponent,{
        data:bank,
        width:"60vw",
        height:"65vh"
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  searchBank(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getBanks(0, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getBanks(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getBanks(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['banka'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.bankService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.banks = this.response.items
          this.router.navigate(['banka'])
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
      this.bankService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.banks = this.response.items
          this.router.navigate(['banka'])
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
    this.getBanks(0)
    this.router.navigate(['banka'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.bankService.getBanks(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.banks = this.response.items
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
    this.bankService.getBanks(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.banks = this.response.items
      this.router.navigate(['banka'])
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

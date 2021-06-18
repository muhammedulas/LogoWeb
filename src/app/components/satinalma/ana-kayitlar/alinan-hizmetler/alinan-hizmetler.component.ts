import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { purchasedService } from 'src/app/models/purchasedService';
import { PurchasedServicesService } from 'src/app/services/purchasedServices.service';
import { Dialog_deletePurchasedServiceComponent } from './Dialog_deletePurchasedService/Dialog_deletePurchasedService.component';
import { Dialog_editInspectPurchasedServiceComponent } from './Dialog_editInspectPurchasedService/Dialog_editInspectPurchasedService.component';
import { Dialog_newPurchasedServiceComponent } from './Dialog_newPurchasedService/Dialog_newPurchasedService.component';

@Component({
  selector: 'app-alinan-hizmetler',
  templateUrl: './alinan-hizmetler.component.html',
  styleUrls: ['./alinan-hizmetler.component.scss']
})
export class AlinanHizmetlerComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private service:PurchasedServicesService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedPS:purchasedService = new purchasedService
  public purchasedServices:purchasedService[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["HyerarchyCode", "Code", "Description", "VAT"]



  ngOnInit() {
    this.getPSs(0)
  }

  select(service:purchasedService){
    this.selectedPS = service;
    console.log('s', this.selectedPS)
  }

  getPSs(offset: number, q?: string) {
    this.service.getPurchasedServices(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.purchasedServices = this.response.items
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

  addPS(){
    this.dialog.open(Dialog_newPurchasedServiceComponent).afterClosed().subscribe(q => {
      this.getPSs(0)
      this.currPage = 1
    })
  }

  deletePS(id:number) {
    this.dialog.open(Dialog_deletePurchasedServiceComponent,{data:id}).afterClosed().subscribe(q => {
      this.getPSs(0)
      this.currPage = 1
    })
  }

  edit_inspectPS(inspectMode:boolean){
    var bank
    this.service.getPurchasedServiceByID(this.selectedPS.INTERNAL_REFERENCE).subscribe(res=>{
      bank = res
      bank.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectPurchasedServiceComponent,{
        data:bank
      }).afterClosed().subscribe(q => {
        this.getPSs(0)
        this.currPage = 1
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  searchPS(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getPSs(0, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getPSs(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getPSs(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/satinalma/alinan-hizmetler'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.service.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.purchasedServices = this.response.items
          this.router.navigate(['/satinalma/alinan-hizmetler'])
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
          this.purchasedServices = this.response.items
          this.router.navigate(['/satinalma/alinan-hizmetler'])
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
    this.getPSs(0)
    this.router.navigate(['/satinalma/alinan-hizmetler'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.service.getPurchasedServices(this.recLimit,offset).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.purchasedServices = this.response.items
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
    this.service.getPurchasedServices(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.purchasedServices = this.response.items
      this.router.navigate(['/satinalma/alinan-hizmetler'])
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

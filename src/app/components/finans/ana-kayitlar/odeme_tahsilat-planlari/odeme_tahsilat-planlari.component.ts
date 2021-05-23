import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { paymentPlan } from 'src/app/models/paymentPlans';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';
import { Dialog_deletePaymentPlanComponent } from './Dialog_deletePaymentPlan/Dialog_deletePaymentPlan.component';
import { Dialog_editInspectPaymentPlanComponent } from './Dialog_editInspectPaymentPlan/Dialog_editInspectPaymentPlan.component';
import { Dialog_newPaymentPlanComponent } from './Dialog_newPaymentPlan/Dialog_newPaymentPlan.component';

@Component({
  selector: 'app-odeme_tahsilat-planlari',
  templateUrl: './odeme_tahsilat-planlari.component.html',
  styleUrls: ['./odeme_tahsilat-planlari.component.scss']
})
export class Odeme_tahsilatPlanlariComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private PPService:PaymentPlansService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedPaymentPlan:paymentPlan = new paymentPlan
  public paymentPlans:paymentPlan[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Code", "Description", "EIR", "LIR"]



  ngOnInit() {
    this.getPPs(0)
  }

  select(plan:paymentPlan){
    this.selectedPaymentPlan = plan;
    console.log('s', this.selectedPaymentPlan)
  }

  getPPs(offset: number, q?: string) {
    this.PPService.getPaymentPlans(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.paymentPlans = this.response.items
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

  addPP(){
    this.dialog.open(Dialog_newPaymentPlanComponent,{width:"60vw",height:"65vh"})
  }

  deletePP(id:number) {
    this.dialog.open(Dialog_deletePaymentPlanComponent,{data:id})
  }

  edit_inspectPP(inspectMode:boolean){
    var bank
    this.PPService.getPaymentPlanByID(this.selectedPaymentPlan.INTERNAL_REFERENCE).subscribe(res=>{
      bank = res
      bank.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectPaymentPlanComponent,{
        data:bank,
        width:"60vw",
        height:"65vh"
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  searchPP(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getPPs(0, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getPPs(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getPPs(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['odeme-tahsilat-planlari'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.PPService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.paymentPlans = this.response.items
          this.router.navigate(['odeme-tahsilat-planlari'])
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
      this.PPService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.paymentPlans = this.response.items
          this.router.navigate(['odeme-tahsilat-planlari'])
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
    this.getPPs(0)
    this.router.navigate(['odeme-tahsilat-planlari'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.PPService.getPaymentPlans(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.paymentPlans = this.response.items
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
    this.PPService.getPaymentPlans(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.paymentPlans = this.response.items
      this.router.navigate(['odeme-tahsilat-planlari'])
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

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { purchaseCampaigns } from 'src/app/models/purchaseCampaigns';
import { PurchaseCampaignsService } from 'src/app/services/purchaseCampaigns.service';
import { Dialog_deletePurchaseCampaignComponent } from './Dialog_deletePurchaseCampaign/Dialog_deletePurchaseCampaign.component';
import { Dialog_editInspectPurchaseCampaignComponent } from './Dialog_editInspectPurchaseCampaign/Dialog_editInspectPurchaseCampaign.component';
import { Dialog_newPurchaseCampaignComponent } from './Dialog_newPurchaseCampaign/Dialog_newPurchaseCampaign.component';

@Component({
  selector: 'app-satinalma-kampanyalari',
  templateUrl: './satinalma-kampanyalari.component.html',
  styleUrls: ['./satinalma-kampanyalari.component.scss']
})
export class SatinalmaKampanyalariComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private service:PurchaseCampaignsService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedRecord:purchaseCampaigns = new purchaseCampaigns
  public dataSet:purchaseCampaigns[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["HyerarchyCode", "Code", "Name", "BeginDate", "EndDate", "ARPCode", "TradingGroup"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec:purchaseCampaigns){
    this.selectedRecord = rec;
    console.log('s', this.selectedRecord)
  }

  getAllRecords(offset: number, q?: string) {
    this.service.getCampaigns(this.recLimit,offset, q).subscribe((resp) => {
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

  add(){
    this.dialog.open(Dialog_newPurchaseCampaignComponent,{width:"60vw",height:"65vh"})
  }

  delete(id:number) {
    this.dialog.open(Dialog_deletePurchaseCampaignComponent,{data:id})
  }

  edit_inspect(inspectMode:boolean){
    var data
    this.service.getCampaignByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res=>{
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectPurchaseCampaignComponent,{
        data:data,
        width:"60vw",
        height:"65vh"
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  search(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getAllRecords(0, data)
    }
  }
  cancelSearch(){
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
    this.router.navigate(['birim-setleri'])
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
      this.service.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.dataSet = this.response.items
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
    this.getAllRecords(0)
    this.router.navigate(['birim-setleri'])
  }

  lastPage() {
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.service.getCampaigns(offset, this.recLimit).subscribe((resp) => {
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
    this.service.getCampaigns(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.dataSet = this.response.items
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

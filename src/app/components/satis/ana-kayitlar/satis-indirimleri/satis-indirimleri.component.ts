import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { soldDiscount } from 'src/app/models/soldDiscount';
import { RightsService } from 'src/app/services/rights.service';
import { SoldDiscountService } from 'src/app/services/soldDiscount.service';
import { Dialog_deleteSoldDiscountComponent } from './Dialog_deleteSoldDiscount/Dialog_deleteSoldDiscount.component';
import { Dialog_editInspectSoldDiscountComponent } from './Dialog_editInspectSoldDiscount/Dialog_editInspectSoldDiscount.component';
import { Dialog_newSoldDiscountComponent } from './Dialog_newSoldDiscount/Dialog_newSoldDiscount.component';

@Component({
  selector: 'app-satis-indirimleri',
  templateUrl: './satis-indirimleri.component.html',
  styleUrls: ['./satis-indirimleri.component.scss']
})
export class SatisIndirimleriComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private service:SoldDiscountService,
    private dialog:MatDialog,
    private rightsService: RightsService

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedRecord:soldDiscount = new soldDiscount
  public dataSet:soldDiscount[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["HyerarchyCode", "Code", "Description"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec:soldDiscount){
    this.selectedRecord = rec;
    console.log('s', this.selectedRecord)
  }

  getAllRecords(offset: number, q?: string) {
    this.service.getRecords(this.recLimit,offset, q).subscribe((resp) => {
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
    if(this.rightsService.checkRight(4021) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_newSoldDiscountComponent).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  delete(id:number) {
    if(this.rightsService.checkRight(4023) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteSoldDiscountComponent,{data:id}).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  edit_inspect(inspectMode:boolean){
    if(inspectMode){
      if(this.rightsService.checkRight(4024) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if(this.rightsService.checkRight(4022) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res=>{
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectSoldDiscountComponent,{
        data:data
      }).afterClosed().subscribe(q => {
        this.getAllRecords(0)
        this.currPage = 1
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
    this.router.navigate(['/satis/satis-indirimleri'])
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
          this.router.navigate(['/satis/satis-indirimleri'])
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
          this.router.navigate(['/satis/satis-indirimleri'])
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
    this.router.navigate(['/satis/satis-indirimleri'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
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
      this.router.navigate(['/satis/satis-indirimleri'])
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

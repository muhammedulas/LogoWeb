import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { itemSalePrice } from 'src/app/models/itemSalePrice';
import { ItemSalePricesService } from 'src/app/services/itemSalePrices.service';
import { RightsService } from 'src/app/services/rights.service';
import { Dialog_deleteItemSalePriceComponent } from './Dialog_deleteItemSalePrice/Dialog_deleteItemSalePrice.component';
import { Dialog_editInspectItemSalePriceComponent } from './Dialog_editInspectItemSalePrice/Dialog_editInspectItemSalePrice.component';
import { Dialog_newItemSalePriceComponent } from './Dialog_newItemSalePrice/Dialog_newItemSalePrice.component';

@Component({
  selector: 'app-malzeme-satis-fiyatlari',
  templateUrl: './malzeme-satis-fiyatlari.component.html',
  styleUrls: ['./malzeme-satis-fiyatlari.component.scss']
})
export class MalzemeSatisFiyatlariComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private service:ItemSalePricesService,
    private dialog:MatDialog,
    private rightsService: RightsService

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedRecord:itemSalePrice = new itemSalePrice
  public dataSet:itemSalePrice[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Type", "HyerarchyCode", "CardCode", "OwnerCode", "ARPCode", "Price", "Unit"]



  ngOnInit() {
    this.getAllRecords(0)
  }

  select(rec:itemSalePrice){
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
    if(this.rightsService.checkRight(4041) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_newItemSalePriceComponent).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  delete(id:number) {
    if(this.rightsService.checkRight(4043) == false){
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteItemSalePriceComponent,{data:id}).afterClosed().subscribe(q => {
      this.getAllRecords(0)
      this.currPage = 1
    })
  }

  edit_inspect(inspectMode:boolean){
    if(inspectMode){
      if(this.rightsService.checkRight(4044) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if(this.rightsService.checkRight(4042) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res=>{
      data = res
      data.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectItemSalePriceComponent,{
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
    this.router.navigate(['/satis/malzeme-satis-fiyatlari'])
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
          this.router.navigate(['/satis/malzeme-satis-fiyatlari'])
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
          this.router.navigate(['/satis/malzeme-satis-fiyatlari'])
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
    this.router.navigate(['/satis/malzeme-satis-fiyatlari'])
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
      this.router.navigate(['/satis/malzeme-satis-fiyatlari'])
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

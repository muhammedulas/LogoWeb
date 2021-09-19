import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { itemCharasteristics } from 'src/app/models/itemCharasteristics';
import { ItemCharsService } from 'src/app/services/itemChars.service';
import { RightsService } from 'src/app/services/rights.service';
import { Dialog_deleteItemCharComponent } from './Dialog_deleteItemChar/Dialog_deleteItemChar.component';
import { Dialog_editInspectItemCharComponent } from './Dialog_edit-inspectItemChar/Dialog_edit-inspectItemChar.component';
import { Dialog_newItemCharComponent } from './Dialog_newItemChar/Dialog_newItemChar.component';

@Component({
  selector: 'app-malzeme-ozellikleri',
  templateUrl: './malzeme-ozellikleri.component.html',
  styleUrls: ['./malzeme-ozellikleri.component.scss']
})
export class MalzemeOzellikleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private ICService: ItemCharsService,
    private dialog: MatDialog,
    private rightsService: RightsService

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedItemChar: itemCharasteristics = new itemCharasteristics
  public itemChars: itemCharasteristics[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Code", "Name"]



  ngOnInit() {
    this.getItemChars(0)
  }
  select(itemChar: itemCharasteristics) {
    this.selectedItemChar = itemChar;
    console.log('s', this.selectedItemChar)
  }

  getItemChars(offset: number, q?: string) {
    this.ICService.getItemChars(this.recLimit, offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.itemChars = this.response.items
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

  addItemChar() {
    if(this.rightsService.checkRight(1031) == false){
      this.tstUnAuthorized2()
      return
    }
    let ref = this.dialog.open(Dialog_newItemCharComponent)
    ref.afterClosed().subscribe(q => {
      this.getItemChars(0)
    })
  }

  deleteItemChar(id: number) {
    if(this.rightsService.checkRight(1033) == false){
      this.tstUnAuthorized2()
      return
    }
    let ref = this.dialog.open(Dialog_deleteItemCharComponent, { data: id })
    ref.afterClosed().subscribe(q => {
      this.getItemChars(0)
    })
  }

  edit_inspectItemChar(inspectMode: boolean) {
    if(inspectMode){
      if(this.rightsService.checkRight(1034) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if(this.rightsService.checkRight(1032) == false){
        this.tstUnAuthorized2()
        return
      }
    }
    var itemChar
    this.ICService.getItemCharByID(this.selectedItemChar.INTERNAL_REFERENCE).subscribe(res => {
      itemChar = res
      itemChar.INSPECT = inspectMode
      let ref = this.dialog.open(Dialog_editInspectItemCharComponent, {
        data: itemChar
      })
      ref.afterClosed().subscribe(q => {
        this.getItemChars(0)
      })
    }, err => {
      this.toast.error(err.message, "Hata", { positionClass: "toast-top-center", timeOut: 3000 })
    })


  }
  searchItemChar(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getItemChars(0, data)
    }
  }
  cancelSearch() {
    this.searchButtonActive = false;
    this.getItemChars(0);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getItemChars(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/malzeme-yonetimi/malzeme-ozellikeri'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.ICService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.itemChars = this.response.items
          this.router.navigate(['/malzeme-yonetimi/malzeme-ozellikeri'])
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
      this.ICService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.itemChars = this.response.items
          this.router.navigate(['/malzeme-yonetimi/malzeme-ozellikeri'])
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
    this.getItemChars(0)
    this.router.navigate(['/malzeme-yonetimi/malzeme-ozellikeri'])
  }

  lastPage() {
    if (this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.ICService.getItemChars(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.itemChars = this.response.items
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
    this.ICService.getItemChars(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.itemChars = this.response.items
      this.router.navigate(['/malzeme-yonetimi/malzeme-ozellikeri'])
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

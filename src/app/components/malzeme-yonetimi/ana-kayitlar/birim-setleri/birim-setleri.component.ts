import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { unitSet } from 'src/app/models/unitSet';
import { unitSetsResp } from 'src/app/models/responseModels/unitSetsResp';
import { UnitSetsService } from 'src/app/services/unitSets.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog_deleteUSComponent } from './dialog_deleteUS/dialog_deleteUS.component';
import { Dialog_newUSComponent } from './dialog_newUS/dialog_newUS.component';
import { Dialog_editInspectUSComponent } from './dialog_edit-inspectUS/dialog_edit-inspectUS.component';

@Component({
  selector: 'app-birim-setleri',
  templateUrl: './birim-setleri.component.html',
  styleUrls: ['./birim-setleri.component.scss']
})
export class BirimSetleriComponent implements OnInit {

  constructor(
    private USService: UnitSetsService,
    private toast: ToastrService,
    private router: Router,
    private dialog:MatDialog
    ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  public selectedUS: unitSet = new unitSet;
  private response: unitSetsResp = new unitSetsResp;
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["CardType", "Code", "Name"]
  public unitSets!: unitSet[];

  ngOnInit() {
    this.getUnitSets(0)
  }

  select(unitSet: unitSet) {
    this.selectedUS = unitSet
    console.log('s', this.selectedUS)
  }
  searchUnitset(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getUnitSets(0, data)
    }
  }

  cancelSearch(){
    this.searchButtonActive = false;
    this.getUnitSets(0);
  }

  getUnitSets(offset: number, q?: string) {
    this.USService.getUnitSets(offset, this.recLimit, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.unitSets = this.response.items
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

  addUnitSet(){
    this.dialog.open(Dialog_newUSComponent)
  }

  deleteUnitSet(id:number) {
    this.dialog.open(Dialog_deleteUSComponent,{data:id})
  }

  edit_inspectUnitSet(inspectMode:boolean){
    var detailedUS
    this.USService.getUnitSetByID(this.selectedUS.INTERNAL_REFERENCE).subscribe(res=>{
      detailedUS = res
      detailedUS.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectUSComponent,{
        data:detailedUS
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }


  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getUnitSets(0)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/malzeme-yonetimi/birim-setleri'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++

      this.loaded = false
      this.USService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.unitSets = this.response.items
          this.router.navigate(['/malzeme-yonetimi/birim-setleri'])
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
      this.USService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.unitSets = this.response.items
          this.router.navigate(['/malzeme-yonetimi/birim-setleri'])
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
    this.getUnitSets(0)
    this.router.navigate(['/malzeme-yonetimi/birim-setleri'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.USService.getUnitSets(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.unitSets = this.response.items
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
    this.USService.getUnitSets(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.unitSets = this.response.items
      this.router.navigate(['/malzeme-yonetimi/birim-setleri'])
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

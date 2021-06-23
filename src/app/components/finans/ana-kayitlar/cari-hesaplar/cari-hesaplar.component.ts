import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { arp } from 'src/app/models/arp';
import { ArpService } from 'src/app/services/arp.service';
import { Dialog_deleteARPComponent } from './Dialog_deleteARP/Dialog_deleteARP.component';
import { Dialog_editInspectARPComponent } from './Dialog_editInspectARP/Dialog_editInspectARP.component';
import { Dialog_newARPComponent } from './Dialog_newARP/Dialog_newARP.component';
import { ARPTypePipe } from '../../../../pipes/ARPType.pipe';

@Component({
  selector: 'app-cari-hesaplar',
  templateUrl: './cari-hesaplar.component.html',
  styleUrls: ['./cari-hesaplar.component.scss']
})
export class CariHesaplarComponent implements OnInit {

  constructor(
    private toast:ToastrService,
    private router:Router,
    private ARPService:ArpService,
    private dialog:MatDialog

  ) { }
  public searchButtonActive: boolean = false;
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response:any;
  public selectedARP:arp = new arp
  public ARPs:arp[] = []
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Acc_Type", "Hyerarchy_Code", "Code", "Title"]



  ngOnInit() {
    this.getARPs(1)
  }

  select(itemChar:arp){
    this.selectedARP = itemChar;
    console.log('s', this.selectedARP)
  }

  getARPs(offset: number, q?: string) {
    this.ARPService.getARPs(this.recLimit,offset, q).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.ARPs = this.response.items
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

  addARP(){
    let ref = this.dialog.open(Dialog_newARPComponent,{width:"65vw",height:"70vh"})
    ref.afterClosed().subscribe(q=>{
      this.getARPs(1)
    })
  }

  deleteARP(id:number) {
    this.dialog.open(Dialog_deleteARPComponent,{data:id}).afterClosed().subscribe(q=>{
      this.getARPs(1)
    })
  }

  edit_inspectARP(inspectMode:boolean){
    var bank
    this.ARPService.getARPByID(this.selectedARP.INTERNAL_REFERENCE).subscribe(res=>{
      bank = res
      bank.INSPECT = inspectMode
      this.dialog.open(Dialog_editInspectARPComponent,{
        data:bank,
        width:"65vw",
        height:"70vh"
      }).afterClosed().subscribe(q=>{
        this.getARPs(1)
      })
    },err=>{
      this.toast.error(err.message,"Hata",{positionClass:"toast-top-center",timeOut:3000})
    })

  }
  searchARP(key: KeyboardEvent, data: string) {
    if (key.key == "Enter") {
      this.getARPs(1, data)
    }
  }
  cancelSearch(){
    this.searchButtonActive = false;
    this.getARPs(1);
  }

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getARPs(1)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
          this.router.navigate(['/finans/cari-hesaplar'])
  }

  nextPage() {
    if (this.currPage < this.pageCount) {
      this.currPage++
      this.loaded = false
      this.ARPService.changePage(this.response.next.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.ARPs = this.response.items
          this.router.navigate(['/finans/cari-hesaplar'])
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
      this.ARPService.changePage(this.response.previous.href).subscribe(
        (resp) => {
          this.response = resp
          console.log(this.response)
          this.ARPs = this.response.items
                this.router.navigate(['/finans/cari-hesaplar'])
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
    this.getARPs(1)
          this.router.navigate(['/finans/cari-hesaplar'])
  }

  lastPage() {
    if(this.currPage >= this.pageCount) return
    this.loaded = false
    this.currPage = this.pageCount
    var offset = this.itemCount - this.recLimit
    this.ARPService.getARPs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.ARPs = this.response.items
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
    this.ARPService.getARPs(offset, this.recLimit).subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      this.ARPs = this.response.items
            this.router.navigate(['/finans/cari-hesaplar'])
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

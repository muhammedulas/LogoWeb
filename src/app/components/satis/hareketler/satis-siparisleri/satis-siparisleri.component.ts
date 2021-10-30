import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { config } from 'process';
import { Dialog_deleteComponent } from 'src/app/components/shared/dialogs/dialog_delete/dialog_delete.component';
import { GlobalVarsService } from 'src/app/globalVars.service';
import { orderPreview } from 'src/app/models/orderPreview';
import { salesOrder } from 'src/app/models/salesOrder';
import { RightsService } from 'src/app/services/rights.service';
import { SalesOrdersService } from 'src/app/services/salesOrders.service';
import { isJSDocThisTag } from 'typescript';
import { Dialog_deleteSalesOrderComponent } from './dialog_deleteSalesOrder/dialog_deleteSalesOrder.component';
import { Dialog_editInspectSalesOrderComponent } from './dialog_editInspectSalesOrder/dialog_editInspectSalesOrder.component';
import { Dialog_newSalesOrderComponent } from './dialog_newSalesOrder/dialog_newSalesOrder.component';
import { Dialog_salesOrderComponent } from './dialog_salesOrder/dialog_salesOrder.component';

@Component({
  selector: 'app-satis-siparisleri',
  templateUrl: './satis-siparisleri.component.html',
  styleUrls: ['./satis-siparisleri.component.scss']
})
export class SatisSiparisleriComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service: SalesOrdersService,
    private dialog: MatDialog,
    private rightsService: RightsService,
    private global: GlobalVarsService

  ) { }
  private scrHeight: number;
  private scrWidth: number;
  public searchString: string = "";
  public pageCount: number = 0;
  public itemCount: number = 0;
  public currPage: number = 1;
  public recLimit: number = 10;
  private response: any;
  public selectedRecord: orderPreview = new orderPreview();
  public dataSet: orderPreview[] = [];
  private errorMsg: string = "";
  private errorCode: string = "";
  public loaded: boolean = false;
  public displayedColumns: string[] = ["Date", "FicheNo", "DocNum", "ARPCode", "Salesman", "Amount"]



  ngOnInit() {
    this.getScreenSize()
    this.getAllRecords(true)
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
  }

  filteredDatasource(): orderPreview[] {
    if (this.searchString != "") {
      return this.dataSet.filter(q => {
        return q.FICHENO.toLocaleLowerCase().includes(this.searchString.toLowerCase()) ||
          q.DEFINITION_.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()) ||
          q.NETTOTAL.toLocaleString().includes(this.searchString) ||
          q.DOCODE.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase())
        })
    }
    else return this.dataSet
  }

  select(rec: orderPreview) {
    this.selectedRecord = rec;
    console.log('s', this.selectedRecord)
  }

  getAllRecords(lastMonth:boolean) {
    /*     this.service.getRecords(this.recLimit, offset, q).subscribe((resp) => {
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
        ) */

    this.service.getRecordsUnsafe(lastMonth).subscribe(res => {
      this.dataSet = res.items;
      console.log(res);
      this.itemCount = res.count;
      this.pageCount = Math.floor(this.itemCount / this.recLimit)
      if (this.itemCount % this.recLimit > 0 || this.pageCount < 1) this.pageCount++
      console.log(this.pageCount)
      this.loaded = true
    }, err => {
      console.error(err)
      if (err.status == 401) this.tstUnauthorized();
    })
  }


  add() {
    if (this.rightsService.checkRight(4081) == false) {
      this.tstUnAuthorized2()
      return
    }
    this.global.getArpCodes().subscribe(res => {
      console.log(res)
    });
    this.global.getItemCodes().subscribe(res => {
      console.log(res)
    });;
    let width: string;
    let height: string;
    let conf = {}
    if (this.scrWidth > 1200) {
      this.dialog.open(Dialog_salesOrderComponent, {
        height: '80vh',
        width: '60vw'
      }).afterClosed().subscribe(q => {
        this.getAllRecords(true)
        this.currPage = 1
      })
    }
    else {
      this.dialog.open(Dialog_salesOrderComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%'
      }).afterClosed().subscribe(q => {
        this.getAllRecords(true)
        this.currPage = 1
      })
    }
  }

  delete(id: number) {
    if (this.rightsService.checkRight(4083) == false) {
      this.tstUnAuthorized2()
      return
    }
    this.dialog.open(Dialog_deleteSalesOrderComponent, { data: id }).afterClosed().subscribe(q => {
      this.getAllRecords(true)
      this.currPage = 1
    })
  }

  edit_inspect(inspectMode: boolean) {
    if (inspectMode) {
      if (this.rightsService.checkRight(4084) == false) {
        this.tstUnAuthorized2()
        return
      }
    }
    else {
      if (this.rightsService.checkRight(4082) == false) {
        this.tstUnAuthorized2()
        return
      }
    }
    var data
    this.service.getRecordByID(this.selectedRecord.INTERNAL_REFERENCE).subscribe(res => {
      data = res
      data.INSPECT = inspectMode
      data.ARP_DEFINITION_ = ""
      data.isNew = false
      this.dialog.open(Dialog_salesOrderComponent, {
        data: data,
        width: "100vw",
        height: "100vh"
      }).afterClosed().subscribe(q => {
        this.getAllRecords(true)
        this.currPage = 1
      })
    }, err => {
      this.toast.error(err.message, "Hata", { positionClass: "toast-top-center", timeOut: 3000 })
    })

  }
  /*   search(key: KeyboardEvent, data: string) {
      if (key.key == "Enter") {
        this.getAllRecords(0, data)
      }
    }
    cancelSearch() {
      this.searchButtonActive = false;
      this.getAllRecords(0);
    } */

  //Pagination

  setRecLimit(newLim: number) {
    this.currPage = 1
    this.recLimit = newLim
    this.loaded = false
    this.getAllRecords(true)
    this.pageCount = Math.floor(this.itemCount / this.recLimit)
    this.router.navigate(['/satis/satis-siparisleri'])
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
          this.router.navigate(['/satis/satis-siparisleri'])
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
          this.router.navigate(['/satis/satis-siparisleri'])
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
    this.getAllRecords(true)
    this.router.navigate(['/satis/satis-siparisleri'])
  }

  lastPage() {
    if (this.currPage >= this.pageCount) return
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
      this.router.navigate(['/satis/satis-siparisleri'])
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

  tstUnAuthorized2() {
    this.toast.error('Bu işlem için yetkiniz yok', "", { positionClass: "toast-top-center" })
  }
  //
}

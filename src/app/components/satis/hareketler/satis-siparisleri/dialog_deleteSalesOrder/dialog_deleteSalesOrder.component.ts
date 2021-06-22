import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SalesOrdersService } from 'src/app/services/salesOrders.service';

@Component({
  selector: 'app-dialog_deleteSalesOrder',
  templateUrl: './dialog_deleteSalesOrder.component.html',
  styleUrls: ['./dialog_deleteSalesOrder.component.scss']
})
export class Dialog_deleteSalesOrderComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSalesOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: SalesOrdersService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.delete(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }
}

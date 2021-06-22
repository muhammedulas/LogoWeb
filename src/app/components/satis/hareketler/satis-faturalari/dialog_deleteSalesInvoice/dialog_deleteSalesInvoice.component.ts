import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SalesInvoicesService } from 'src/app/services/salesInvoices.service';

@Component({
  selector: 'app-dialog_deleteSalesInvoice',
  templateUrl: './dialog_deleteSalesInvoice.component.html',
  styleUrls: ['./dialog_deleteSalesInvoice.component.scss']
})
export class Dialog_deleteSalesInvoiceComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSalesInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: SalesInvoicesService
  ) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.ref)
    this.svc.delete(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }
}

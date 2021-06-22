import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseInvoicesService } from 'src/app/services/purchaseInvoices.service';

@Component({
  selector: 'app-dialog_deletePurchaseInvoice',
  templateUrl: './dialog_deletePurchaseInvoice.component.html',
  styleUrls: ['./dialog_deletePurchaseInvoice.component.scss']
})
export class Dialog_deletePurchaseInvoiceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseInvoicesService
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

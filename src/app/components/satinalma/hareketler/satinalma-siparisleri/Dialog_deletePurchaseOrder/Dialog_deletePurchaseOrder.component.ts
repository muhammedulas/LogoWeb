import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseOrdersService } from 'src/app/services/purchaseOrders.service';

@Component({
  selector: 'app-Dialog_deletePurchaseOrder',
  templateUrl: './Dialog_deletePurchaseOrder.component.html',
  styleUrls: ['./Dialog_deletePurchaseOrder.component.scss']
})
export class Dialog_deletePurchaseOrderComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseOrdersService
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

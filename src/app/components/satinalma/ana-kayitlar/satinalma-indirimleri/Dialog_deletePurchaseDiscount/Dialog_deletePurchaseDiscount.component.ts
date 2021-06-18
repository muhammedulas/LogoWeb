import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseDiscountsService } from 'src/app/services/purchaseDiscounts.service';

@Component({
  selector: 'app-Dialog_deletePurchaseDiscount',
  templateUrl: './Dialog_deletePurchaseDiscount.component.html',
  styleUrls: ['./Dialog_deletePurchaseDiscount.component.scss']
})
export class Dialog_deletePurchaseDiscountComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseDiscountComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseDiscountsService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.deletePurchaseDiscount(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }

}

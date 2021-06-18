import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseDiscount } from 'src/app/models/purchaseDiscount';
import { PurchaseDiscountsService } from 'src/app/services/purchaseDiscounts.service';

@Component({
  selector: 'app-Dialog_editInspectPurchaseDiscount',
  templateUrl: './Dialog_editInspectPurchaseDiscount.component.html',
  styleUrls: ['./Dialog_editInspectPurchaseDiscount.component.scss']
})
export class Dialog_editInspectPurchaseDiscountComponent implements OnInit {
  public stopage: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPurchaseDiscountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: purchaseDiscount,
    private toast: ToastrService,
    private svc: PurchaseDiscountsService
  ) { }

  ngOnInit() {
    if (this.data.STOPPAGE_DISC == 1) this.stopage = true
    else this.stopage = false
  }

  update() {
    if (this.stopage) this.data.STOPPAGE_DISC = 1
    else this.data.STOPPAGE_DISC = 0
    this.svc.updatePurchaseDiscount(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

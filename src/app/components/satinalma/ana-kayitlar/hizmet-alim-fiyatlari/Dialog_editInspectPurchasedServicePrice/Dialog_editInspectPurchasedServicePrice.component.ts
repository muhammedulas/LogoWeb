import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchasedServicePrices } from 'src/app/models/purchasedServicePrices';
import { PurchasedServicePricesService } from 'src/app/services/purchasedServicePrices.service';

@Component({
  selector: 'app-Dialog_editInspectPurchasedServicePrice',
  templateUrl: './Dialog_editInspectPurchasedServicePrice.component.html',
  styleUrls: ['./Dialog_editInspectPurchasedServicePrice.component.scss']
})
export class Dialog_editInspectPurchasedServicePriceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPurchasedServicePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: purchasedServicePrices,
    private toast: ToastrService,
    private svc: PurchasedServicePricesService
  ) {
  }

  ngOnInit() {
  }

  update() {
    this.svc.updateServicePrice(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

}

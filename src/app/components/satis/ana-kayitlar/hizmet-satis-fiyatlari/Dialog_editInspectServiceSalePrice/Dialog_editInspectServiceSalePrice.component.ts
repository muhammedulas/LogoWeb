import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { serviceSalePrice } from 'src/app/models/serviceSalePrice';
import { ServiceSalePricesService } from 'src/app/services/serviceSalePrices.service';

@Component({
  selector: 'app-Dialog_editInspectServiceSalePrice',
  templateUrl: './Dialog_editInspectServiceSalePrice.component.html',
  styleUrls: ['./Dialog_editInspectServiceSalePrice.component.scss']
})
export class Dialog_editInspectServiceSalePriceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectServiceSalePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: serviceSalePrice,
    private toast: ToastrService,
    private svc: ServiceSalePricesService
  ) {
  }

  ngOnInit() {
  }

  update() {
    this.svc.update(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

}

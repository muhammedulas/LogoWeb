import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { itemSalePrice } from 'src/app/models/itemSalePrice';
import { ItemSalePricesService } from 'src/app/services/itemSalePrices.service';

@Component({
  selector: 'app-Dialog_editInspectItemSalePrice',
  templateUrl: './Dialog_editInspectItemSalePrice.component.html',
  styleUrls: ['./Dialog_editInspectItemSalePrice.component.scss']
})
export class Dialog_editInspectItemSalePriceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectItemSalePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: itemSalePrice,
    private toast: ToastrService,
    private svc: ItemSalePricesService
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

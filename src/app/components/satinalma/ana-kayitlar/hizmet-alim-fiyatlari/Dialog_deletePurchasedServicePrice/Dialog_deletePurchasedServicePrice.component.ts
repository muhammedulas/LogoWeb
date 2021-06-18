import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchasedServicePricesService } from 'src/app/services/purchasedServicePrices.service';

@Component({
  selector: 'app-Dialog_deletePurchasedServicePrice',
  templateUrl: './Dialog_deletePurchasedServicePrice.component.html',
  styleUrls: ['./Dialog_deletePurchasedServicePrice.component.scss']
})
export class Dialog_deletePurchasedServicePriceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchasedServicePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchasedServicePricesService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.deleteServicePrice(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }


}

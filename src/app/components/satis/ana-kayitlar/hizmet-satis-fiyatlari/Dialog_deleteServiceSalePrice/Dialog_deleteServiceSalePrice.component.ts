import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { serviceSalePrice } from 'src/app/models/serviceSalePrice';
import { ServiceSalePricesService } from 'src/app/services/serviceSalePrices.service';

@Component({
  selector: 'app-Dialog_deleteServiceSalePrice',
  templateUrl: './Dialog_deleteServiceSalePrice.component.html',
  styleUrls: ['./Dialog_deleteServiceSalePrice.component.scss']
})
export class Dialog_deleteServiceSalePriceComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteServiceSalePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: ServiceSalePricesService
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

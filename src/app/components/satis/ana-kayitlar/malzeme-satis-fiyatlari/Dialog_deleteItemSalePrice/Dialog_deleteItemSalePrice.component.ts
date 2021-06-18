import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemSalePricesService } from 'src/app/services/itemSalePrices.service';

@Component({
  selector: 'app-Dialog_deleteItemSalePrice',
  templateUrl: './Dialog_deleteItemSalePrice.component.html',
  styleUrls: ['./Dialog_deleteItemSalePrice.component.scss']
})
export class Dialog_deleteItemSalePriceComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteItemSalePriceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: ItemSalePricesService
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

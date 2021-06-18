import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { soldDiscount } from 'src/app/models/soldDiscount';
import { SoldDiscountService } from 'src/app/services/soldDiscount.service';

@Component({
  selector: 'app-Dialog_editInspectSoldDiscount',
  templateUrl: './Dialog_editInspectSoldDiscount.component.html',
  styleUrls: ['./Dialog_editInspectSoldDiscount.component.scss']
})
export class Dialog_editInspectSoldDiscountComponent implements OnInit {

  public stopage: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectSoldDiscountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: soldDiscount,
    private toast: ToastrService,
    private svc: SoldDiscountService
  ) { }

  ngOnInit() {
    if (this.data.STOPPAGE_DISC == 1) this.stopage = true
    else this.stopage = false
  }

  update() {
    if (this.stopage) this.data.STOPPAGE_DISC = 1
    else this.data.STOPPAGE_DISC = 0
    this.svc.update(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }
}

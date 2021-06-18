import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoldDiscountService } from 'src/app/services/soldDiscount.service';

@Component({
  selector: 'app-Dialog_deleteSoldDiscount',
  templateUrl: './Dialog_deleteSoldDiscount.component.html',
  styleUrls: ['./Dialog_deleteSoldDiscount.component.scss']
})
export class Dialog_deleteSoldDiscountComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSoldDiscountComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: SoldDiscountService
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

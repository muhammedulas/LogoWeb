import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseDispatchesService } from 'src/app/services/purchaseDispatches.service';

@Component({
  selector: 'app-dialog_deletePurchaseDispatch',
  templateUrl: './dialog_deletePurchaseDispatch.component.html',
  styleUrls: ['./dialog_deletePurchaseDispatch.component.scss']
})
export class Dialog_deletePurchaseDispatchComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseDispatchComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseDispatchesService
  ) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.ref)
    this.svc.delete(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }

}

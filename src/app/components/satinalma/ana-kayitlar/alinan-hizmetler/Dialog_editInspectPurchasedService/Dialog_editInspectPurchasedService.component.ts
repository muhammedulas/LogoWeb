import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchasedService } from 'src/app/models/purchasedService';
import { PurchasedServicesService } from 'src/app/services/purchasedServices.service';

@Component({
  selector: 'app-Dialog_editInspectPurchasedService',
  templateUrl: './Dialog_editInspectPurchasedService.component.html',
  styleUrls: ['./Dialog_editInspectPurchasedService.component.scss']
})
export class Dialog_editInspectPurchasedServiceComponent implements OnInit {
  public canDeduct: boolean = false
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPurchasedServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: purchasedService,
    private toast: ToastrService,
    private svc: PurchasedServicesService
  ) { }

  ngOnInit() {
    if (this.data.CANDEDUCT == 1) this.canDeduct = true
  }

  update() {
    if(this.canDeduct) this.data.CANDEDUCT = 1
    else this.data.CANDEDUCT = 0
    this.svc.updatePurchasedService(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

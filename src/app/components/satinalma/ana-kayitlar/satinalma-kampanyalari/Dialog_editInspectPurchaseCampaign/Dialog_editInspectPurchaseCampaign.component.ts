import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseCampaigns } from 'src/app/models/purchaseCampaigns';
import { PurchaseCampaignsService } from 'src/app/services/purchaseCampaigns.service';

@Component({
  selector: 'app-Dialog_editInspectPurchaseCampaign',
  templateUrl: './Dialog_editInspectPurchaseCampaign.component.html',
  styleUrls: ['./Dialog_editInspectPurchaseCampaign.component.scss']
})
export class Dialog_editInspectPurchaseCampaignComponent implements OnInit {

  public isRateChangable: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPurchaseCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: purchaseCampaigns,
    private toast: ToastrService,
    private svc: PurchaseCampaignsService
  ) { }

  ngOnInit() {
  }

  update() {
    this.svc.updateCampaign(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

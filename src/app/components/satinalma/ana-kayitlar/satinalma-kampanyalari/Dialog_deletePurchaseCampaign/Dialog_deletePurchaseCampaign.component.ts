import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { purchaseCampaigns } from 'src/app/models/purchaseCampaigns';
import { PurchaseCampaignsService } from 'src/app/services/purchaseCampaigns.service';

@Component({
  selector: 'app-Dialog_deletePurchaseCampaign',
  templateUrl: './Dialog_deletePurchaseCampaign.component.html',
  styleUrls: ['./Dialog_deletePurchaseCampaign.component.scss']
})
export class Dialog_deletePurchaseCampaignComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseCampaignsService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.deleteCampaign(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }

}

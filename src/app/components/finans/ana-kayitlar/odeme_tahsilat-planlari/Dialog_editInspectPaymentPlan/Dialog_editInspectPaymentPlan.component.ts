import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { arp } from 'src/app/models/arp';
import { paymentPlan } from 'src/app/models/paymentPlans';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';

@Component({
  selector: 'app-Dialog_editInspectPaymentPlan',
  templateUrl: './Dialog_editInspectPaymentPlan.component.html',
  styleUrls: ['./Dialog_editInspectPaymentPlan.component.scss']
})
export class Dialog_editInspectPaymentPlanComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPaymentPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public paymentPlan: paymentPlan,
    private toast: ToastrService,
    private svc: PaymentPlansService
  ) { }

  ngOnInit() {
  }

}

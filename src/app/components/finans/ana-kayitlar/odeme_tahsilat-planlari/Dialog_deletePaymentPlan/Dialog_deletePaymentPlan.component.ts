import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';

@Component({
  selector: 'app-Dialog_deletePaymentPlan',
  templateUrl: './Dialog_deletePaymentPlan.component.html',
  styleUrls: ['./Dialog_deletePaymentPlan.component.scss']
})
export class Dialog_deletePaymentPlanComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePaymentPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public ref:number,
    private toastr:ToastrService,
    private svc: PaymentPlansService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.deletePaymentPlan(this.ref).subscribe(res=>{
      if(res == null){
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
        this.dialogRef.close()
      }
    })
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { cheque_Pnote } from 'src/app/models/chequeAndPnote';
import { ChequeAndPnotesService } from 'src/app/services/chequeAndPnotes.service';
import { PaymentPlansService } from 'src/app/services/paymentPlans.service';

@Component({
  selector: 'app-Dialog_editInspectCnPnote',
  templateUrl: './Dialog_editInspectCnPnote.component.html',
  styleUrls: ['./Dialog_editInspectCnPnote.component.scss']
})
export class Dialog_editInspectCnPnoteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectCnPnoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: cheque_Pnote,
    private toast: ToastrService,
    private svc: ChequeAndPnotesService
  ) { }

  ngOnInit() {
  }

  update() {
    this.svc.updateCP(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { safeDeposit } from 'src/app/models/safeDeposit';
import { SafeDepositService } from 'src/app/services/safeDeposit.service';

@Component({
  selector: 'app-Dialog_editInspectSD',
  templateUrl: './Dialog_editInspectSD.component.html',
  styleUrls: ['./Dialog_editInspectSD.component.scss']
})
export class Dialog_editInspectSDComponent implements OnInit {
  @ViewChild('status') status!: MatSelect
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectSDComponent>,
    @Inject(MAT_DIALOG_DATA) public data: safeDeposit,
    private toast: ToastrService,
    private svc: SafeDepositService
  ) { }

  ngOnInit() {
  }

  update() {
    this.svc.updateSD(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

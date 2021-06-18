import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { salesExpense } from 'src/app/models/salesExpense';
import { SalesExpensesService } from 'src/app/services/salesExpenses.service';

@Component({
  selector: 'app-Dialog_editInspectSalesExpense',
  templateUrl: './Dialog_editInspectSalesExpense.component.html',
  styleUrls: ['./Dialog_editInspectSalesExpense.component.scss']
})
export class Dialog_editInspectSalesExpenseComponent implements OnInit {

  public isRateChangable: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectSalesExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: salesExpense,
    private toast: ToastrService,
    private svc: SalesExpensesService
  ) { }

  ngOnInit() {
    if (this.data.EXT_ACCESS_FLAGS == 0) this.isRateChangable = false
    if (this.data.EXT_ACCESS_FLAGS == 4) this.isRateChangable = true
  }

  update() {
    if (this.isRateChangable) this.data.EXT_ACCESS_FLAGS = 4
    else this.data.EXT_ACCESS_FLAGS = 0
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

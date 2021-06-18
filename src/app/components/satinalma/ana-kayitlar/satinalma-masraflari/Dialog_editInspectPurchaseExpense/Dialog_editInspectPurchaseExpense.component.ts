import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { purchaseExpense } from 'src/app/models/purchaseExpense';
import { PurchaseExpensesService } from 'src/app/services/purchaseExpenses.service';

@Component({
  selector: 'app-Dialog_editInspectPurchaseExpense',
  templateUrl: './Dialog_editInspectPurchaseExpense.component.html',
  styleUrls: ['./Dialog_editInspectPurchaseExpense.component.scss']
})
export class Dialog_editInspectPurchaseExpenseComponent implements OnInit {
  public isRateChangable: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectPurchaseExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: purchaseExpense,
    private toast: ToastrService,
    private svc: PurchaseExpensesService
  ) { }

  ngOnInit() {
    if (this.data.EXT_ACCESS_FLAGS == 0) this.isRateChangable = false
    if (this.data.EXT_ACCESS_FLAGS == 4) this.isRateChangable = true
  }

  update() {
    if (this.isRateChangable) this.data.EXT_ACCESS_FLAGS = 4
    else this.data.EXT_ACCESS_FLAGS = 0
    this.svc.updatePurchaseExpense(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }
}

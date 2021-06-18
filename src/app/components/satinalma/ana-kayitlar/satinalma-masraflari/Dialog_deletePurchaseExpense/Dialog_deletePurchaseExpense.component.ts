import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchaseExpensesService } from 'src/app/services/purchaseExpenses.service';

@Component({
  selector: 'app-Dialog_deletePurchaseExpense',
  templateUrl: './Dialog_deletePurchaseExpense.component.html',
  styleUrls: ['./Dialog_deletePurchaseExpense.component.scss']
})
export class Dialog_deletePurchaseExpenseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchaseExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: PurchaseExpensesService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.deletePurchaseExpense(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }
}

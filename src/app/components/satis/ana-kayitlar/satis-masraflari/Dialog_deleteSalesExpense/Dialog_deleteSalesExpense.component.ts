import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SalesExpensesService } from 'src/app/services/salesExpenses.service';

@Component({
  selector: 'app-Dialog_deleteSalesExpense',
  templateUrl: './Dialog_deleteSalesExpense.component.html',
  styleUrls: ['./Dialog_deleteSalesExpense.component.scss']
})
export class Dialog_deleteSalesExpenseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSalesExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: SalesExpensesService
  ) { }

  ngOnInit() {
  }

  delete() {
    this.svc.delete(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }
}

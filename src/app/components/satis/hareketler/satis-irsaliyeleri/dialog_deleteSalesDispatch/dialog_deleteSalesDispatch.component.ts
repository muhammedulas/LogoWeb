import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { salesDispatch } from 'src/app/models/salesDispatch';
import { SalesDispatchesService } from 'src/app/services/salesDispatches.service';

@Component({
  selector: 'app-dialog_deleteSalesDispatch',
  templateUrl: './dialog_deleteSalesDispatch.component.html',
  styleUrls: ['./dialog_deleteSalesDispatch.component.scss']
})
export class Dialog_deleteSalesDispatchComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSalesDispatchComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: SalesDispatchesService
  ) { }

  ngOnInit() {
  }

  delete() {
    console.log(this.ref)
    this.svc.delete(this.ref).subscribe(res => {
      if (res == null) {
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
        this.dialogRef.close()
      }
    })
  }

}

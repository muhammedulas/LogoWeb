import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { soldService } from 'src/app/models/soldService';
import { SoldServicesService } from 'src/app/services/soldServices.service';

@Component({
  selector: 'app-Dialog_editInspectSoldService',
  templateUrl: './Dialog_editInspectSoldService.component.html',
  styleUrls: ['./Dialog_editInspectSoldService.component.scss']
})
export class Dialog_editInspectSoldServiceComponent implements OnInit {

  public canDeduct: boolean = false
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectSoldServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: soldService,
    private toast: ToastrService,
    private svc: SoldServicesService
  ) { }

  ngOnInit() {
    if (this.data.CANDEDUCT == 1) this.canDeduct = true
  }

  update() {
    if(this.canDeduct) this.data.CANDEDUCT = 1
    else this.data.CANDEDUCT = 0
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

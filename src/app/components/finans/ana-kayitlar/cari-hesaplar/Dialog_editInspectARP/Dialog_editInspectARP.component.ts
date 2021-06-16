import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { arp } from 'src/app/models/arp';
import { ArpService } from 'src/app/services/arp.service';

@Component({
  selector: 'app-Dialog_editInspectARP',
  templateUrl: './Dialog_editInspectARP.component.html',
  styleUrls: ['./Dialog_editInspectARP.component.scss']
})
export class Dialog_editInspectARPComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectARPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: arp,
    private toast: ToastrService,
    private svc: ArpService
  ) {
    if(this.data.TAX_ID){
      if (this.data.TAX_ID.length == 11) this.data.PCOMP = 1
      else this.data.PCOMP = 0
    }
  }

  ngOnInit() {
  }

  clearTaxId() {
    this.data.TAX_ID = " "
  }

  update() {
    this.svc.updateARP(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

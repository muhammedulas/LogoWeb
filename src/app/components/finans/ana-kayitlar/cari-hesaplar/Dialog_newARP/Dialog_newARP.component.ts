import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { arp } from 'src/app/models/arp';
import { ArpService } from 'src/app/services/arp.service';

@Component({
  selector: 'app-Dialog_newARP',
  templateUrl: './Dialog_newARP.component.html',
  styleUrls: ['./Dialog_newARP.component.scss']
})
export class Dialog_newARPComponent implements OnInit {
public newArp:arp;
  constructor(
    public dialogRef: MatDialogRef<Dialog_newARPComponent>,
    private toast: ToastrService,
    private svc:ArpService
  ) {
    this.newArp = new arp();
    this.newArp.RECORD_STATUS = 0
    this.newArp.PCOMP = 1
    this.newArp.ACCOUNT_TYPE = 3
    this.clearTaxId();
  }

  ngOnInit() {
  }

  clearTaxId(){
    this.newArp.TAX_ID = " "
  }

  create(){
    this.svc.addARP(this.newArp).subscribe(res=>{
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    },err=>{
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

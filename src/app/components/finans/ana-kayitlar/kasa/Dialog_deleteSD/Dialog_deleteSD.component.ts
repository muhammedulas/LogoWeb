import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SafeDepositService } from 'src/app/services/safeDeposit.service';

@Component({
  selector: 'app-Dialog_deleteSD',
  templateUrl: './Dialog_deleteSD.component.html',
  styleUrls: ['./Dialog_deleteSD.component.scss']
})
export class Dialog_deleteSDComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSDComponent>,
    @Inject(MAT_DIALOG_DATA) public ref:number,
    private toastr:ToastrService,
    private router:Router,
    private svc:SafeDepositService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.deleteSD(this.ref).subscribe(res=>{
      if(res == null){
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
        this.dialogRef.close()
      }
    })
  }

}

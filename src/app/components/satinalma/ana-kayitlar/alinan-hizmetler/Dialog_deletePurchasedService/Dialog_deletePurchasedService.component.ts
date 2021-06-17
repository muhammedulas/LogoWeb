import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PurchasedServicesService } from 'src/app/services/purchasedServices.service';

@Component({
  selector: 'app-Dialog_deletePurchasedService',
  templateUrl: './Dialog_deletePurchasedService.component.html',
  styleUrls: ['./Dialog_deletePurchasedService.component.scss']
})
export class Dialog_deletePurchasedServiceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deletePurchasedServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref:number,
    private toastr:ToastrService,
    private router:Router,
    private svc:PurchasedServicesService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.deletePurchasedService(this.ref).subscribe(res=>{
      if(res == null){
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
        this.dialogRef.close()
      }
    })
  }

}

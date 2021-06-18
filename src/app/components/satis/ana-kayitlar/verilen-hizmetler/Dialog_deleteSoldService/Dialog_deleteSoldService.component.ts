import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoldServicesService } from 'src/app/services/soldServices.service';

@Component({
  selector: 'app-Dialog_deleteSoldService',
  templateUrl: './Dialog_deleteSoldService.component.html',
  styleUrls: ['./Dialog_deleteSoldService.component.scss']
})
export class Dialog_deleteSoldServiceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteSoldServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public ref:number,
    private toastr:ToastrService,
    private router:Router,
    private svc:SoldServicesService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.delete(this.ref).subscribe(res=>{
      if(res == null){
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
        this.dialogRef.close()
      }
    })
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArpService } from 'src/app/services/arp.service';

@Component({
  selector: 'app-Dialog_deleteARP',
  templateUrl: './Dialog_deleteARP.component.html',
  styleUrls: ['./Dialog_deleteARP.component.scss']
})
export class Dialog_deleteARPComponent implements OnInit {

  constructor(private svc:ArpService,
    public dialogRef: MatDialogRef<Dialog_deleteARPComponent>,
    @Inject(MAT_DIALOG_DATA) public ref:number,
    private toastr:ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.deleteARP(this.ref).subscribe(res=>{
      if(res == null){
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
        this.dialogRef.close()
      }
    })
  }

}

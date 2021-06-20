import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DistributionRoutesService } from 'src/app/services/distributionRoutes.service';

@Component({
  selector: 'app-Dialog_deleteDistRoute',
  templateUrl: './Dialog_deleteDistRoute.component.html',
  styleUrls: ['./Dialog_deleteDistRoute.component.scss']
})
export class Dialog_deleteDistRouteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteDistRouteComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: DistributionRoutesService
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

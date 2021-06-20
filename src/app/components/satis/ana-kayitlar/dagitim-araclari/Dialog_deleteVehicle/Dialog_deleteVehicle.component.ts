import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-Dialog_deleteVehicle',
  templateUrl: './Dialog_deleteVehicle.component.html',
  styleUrls: ['./Dialog_deleteVehicle.component.scss']
})
export class Dialog_deleteVehicleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public ref: number,
    private toastr: ToastrService,
    private router: Router,
    private svc: VehiclesService
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

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { vehicle } from 'src/app/models/vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-Dialog_editInspectVehicle',
  templateUrl: './Dialog_editInspectVehicle.component.html',
  styleUrls: ['./Dialog_editInspectVehicle.component.scss']
})
export class Dialog_editInspectVehicleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: vehicle,
    private toast: ToastrService,
    private svc: VehiclesService
  ) {
  }

  ngOnInit() {
  }

  update() {
    this.svc.update(this.data).subscribe(res => {
      this.toast.success("Kayıt Güncellendi", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

}

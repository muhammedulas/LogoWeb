import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { vehicle } from 'src/app/models/vehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-Dialog_newVehicle',
  templateUrl: './Dialog_newVehicle.component.html',
  styleUrls: ['./Dialog_newVehicle.component.scss']
})
export class Dialog_newVehicleComponent implements OnInit {

  public date = new Date();
  public newRecord: vehicle = new vehicle();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newVehicleComponent>,
    private toast: ToastrService,
    private svc: VehiclesService
  ) {
    this.initializeRecord();
  }

  ngOnInit() {
  }

  create() {
    this.svc.add(this.newRecord).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.ValError0[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
    })
  }

  initializeRecord(){
    
  }
}

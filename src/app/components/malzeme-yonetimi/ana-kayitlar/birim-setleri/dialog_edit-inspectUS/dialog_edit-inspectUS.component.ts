import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { detailedUnit } from 'src/app/models/detailedUnit';
import { detailedUnitSet } from 'src/app/models/detailedUnitSet';
import { unitSet } from 'src/app/models/unitSet';
import { UnitSetsService } from 'src/app/services/unitSets.service';
import { Dialog_editInspectComponent } from '../../malzemeler/dialog_edit-inspect/dialog_edit-inspect.component';

@Component({
  selector: 'app-dialog_edit-inspectUS',
  templateUrl: './dialog_edit-inspectUS.component.html',
  styleUrls: ['./dialog_edit-inspectUS.component.scss']
})
export class Dialog_editInspectUSComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectComponent>,
    @Inject(MAT_DIALOG_DATA) public unitSet: detailedUnitSet,
    private USService: UnitSetsService,
    private toast: ToastrService
  ) { }
  public units: detailedUnit[] = [];
  public selctedUnit: detailedUnit = new detailedUnit;

  ngOnInit() {
    this.units = this.unitSet.UNITS.items
    this.selctedUnit = this.units[0]
  }

  select(unt: detailedUnit) {
    this.selctedUnit = unt
  }

  newLine() {
    var controller = true
    this.units.forEach(unit => {
      if (unit.CODE == null) {
        controller = false
      }
    })
    if (controller == true) {
      this.units.push(new detailedUnit)
    }

    if (this.selctedUnit.CONV_FACT1 == 0 || this.selctedUnit.CONV_FACT2 == 0) {
      this.selctedUnit.CONV_FACT1 = 1;
      this.selctedUnit.CONV_FACT2 = 1
    }
  }

  save() {
    console.log(JSON.stringify(this.unitSet))
    this.unitSet.UNITS.items = this.units
    this.USService.updateUnitSet(this.unitSet).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 300000 })
      console.log(res)
    }, err => {
      this.toast.error("Kayıt Başarısız", "", { positionClass: 'toast-top-center', timeOut: 300000 })
      console.log(err)
    })
  }
}

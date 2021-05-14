import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { detailedUnit } from 'src/app/models/detailedUnit';
import { detailedUnitSet } from 'src/app/models/detailedUnitSet';
import { UnitSetsService } from 'src/app/services/unitSets.service';

@Component({
  selector: 'app-dialog_newUS',
  templateUrl: './dialog_newUS.component.html',
  styleUrls: ['./dialog_newUS.component.scss']
})
export class Dialog_newUSComponent implements OnInit {

  constructor(private USService:UnitSetsService, private toast:ToastrService) { }
  public newUS:detailedUnitSet = {
    INSPECT:false,
    "INTERNAL_REFERENCE": 0,
    "CODE": "",
    "DESCRIPTION": "",
    "XML_ATTRIBUTE": 0,
    "TYPE": 5,
    "ITEM_SPECIFIC": 0,
    "AUXIL_CODE": "",
    "AUTH_CODE": "",
    "CREATED_BY": 0,
    "DATE_CREATED": "",
    "HOUR_CREATED": 0,
    "MIN_CREATED": 0,
    "SEC_CREATED": 0,
    "MODIFIED_BY": 0,
    "DATE_MODIFIED": "",
    "HOUR_MODIFIED": 0,
    "MIN_MODIFIED": 0,
    "SEC_MODIFIED": 0,
    "DATA_SITEID": 0,
    "DATA_REFERENCE": 0,
    "WF_STATUS": 0,
    "UNITS": {
        "items": []
    },
    "GUID": ""
  }
  public units:detailedUnit[] = [];
  public selctedUnit:detailedUnit = new detailedUnit;

  ngOnInit() {
    
    this.units.push(new detailedUnit)
    this.units[0].MAIN_UNIT = 1
    this.units[0].DIVISIBLE = 0
    this.selctedUnit = this.units[0]
  }

  select(unt:detailedUnit){
    this.selctedUnit = unt
  }

  newLine(){
    var controller = true
    this.units.forEach(unit=>{
      if(unit.CODE == null){
        controller = false
      }
    })
    if(controller == true){
      this.units.push(new detailedUnit)
    }

    if(this.selctedUnit.CONV_FACT1 == 0 || this.selctedUnit.CONV_FACT2 == 0){
      this.selctedUnit.CONV_FACT1 == 1;
      this.selctedUnit.CONV_FACT2 == 1
    }
  }

  save(){
    console.log(JSON.stringify(this.newUS))
    this.newUS.UNITS.items = this.units
    this.USService.addUnitSet(this.newUS).subscribe(res=>{
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 300000 })
      console.log(res)
    },err=>{
      this.toast.error("Kayıt Başarısız", "", { positionClass: 'toast-top-center', timeOut: 300000 })
      console.log(err)
    })
  }
}

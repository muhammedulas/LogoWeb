import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTab } from '@angular/material/tabs';
import { ToastrService } from 'ngx-toastr';
import { httpErrResp } from 'src/app/models/responseModels/httpErrResp';
import { unit } from '../../../../../models/unit';
import { unitSet } from '../../../../../models/unitSet';
import { ItemsService } from '../../../../../services/items.service';

export interface item {
  CODE: string;
  NAME: string;
  NAME2: string;
  NAME3: string;
  AUXIL_CODE: string;
  AUXIL_CODE2: string;
  AUXIL_CODE3: string;
  AUXIL_CODE4: string;
  AUXIL_CODE5: string;
  AUTH_CODE: string;
  GROUP_CODE: string;
  PRODUCER_CODE: string;
  PAYMENT_CODE: string;
  ADD_TAX_CODE: string;
  RECORD_STATUS: number;
  VAT: number;
  SELVAT: number;
  RETURNVAT: number;
  SELPRVAT: number;
  RETURNPRVAT: number;
  TRACK_TYPE: number;
  DEMAND_MEET_SORT_FLD1: string;
  DEMAND_MEET_SORT_FLD2: string;
  DEMAND_MEET_SORT_FLD3: string;
  DEMAND_MEET_SORT_FLD4: string;
  DEMAND_MEET_SORT_FLD5: string;
  UNITSET_CODE: string;
  GTIPCODE: string;
  EXIM_TAX1: number;
  EXIM_TAX2: number;
  EXIM_TAX3: number;
  EXIM_TAX4: number;
  EXIM_TAX5: number;
}

@Component({
  selector: 'app-dialog_newItem',
  templateUrl: './dialog_newItem.component.html',
  styleUrls: ['./dialog_newItem.component.scss']
})
export class Dialog_newItemComponent implements OnInit {
  constructor(private itemsSvc: ItemsService,
    private toast:ToastrService,
    @Inject(MAT_DIALOG_DATA) public itemType: number
  ) { }

  private httpError:httpErrResp = new httpErrResp

  public newItem = {
    CODE: "",
    NAME: "",
    NAME2: "",
    NAME3: "",
    CARD_TYPE: this.itemType,
    AUXIL_CODE: "",
    AUXIL_CODE2: "",
    AUXIL_CODE3: "",
    AUXIL_CODE4: "",
    AUXIL_CODE5: "",
    AUTH_CODE: "",
    GROUP_CODE: "",
    PRODUCER_CODE: "",
    PAYMENT_CODE: "",
    ADD_TAX_CODE: "",
    RECORD_STATUS: 0,
    VAT: 18,
    SELVAT: 18,
    RETURNVAT: 18,
    SELPRVAT: 18,
    RETURNPRVAT: 18,
    TRACK_TYPE: 0,
    DEMAND_MEET_SORT_FLD1: "",
    DEMAND_MEET_SORT_FLD2: "",
    DEMAND_MEET_SORT_FLD3: "",
    DEMAND_MEET_SORT_FLD4: "",
    DEMAND_MEET_SORT_FLD5: "",
    UNITSET_CODE: "05",
    GTIPCODE: "",
    EXIM_TAX1: 0,
    EXIM_TAX2: 0,
    EXIM_TAX3: 0,
    EXIM_TAX4: 0,
    EXIM_TAX5: 0
  }
  public unitSets: unitSet[] = []

  public currentUnitSet: unitSet = new unitSet;
  public selectedUnit: unit = new unit
  public unitSetAutocomplete: string[] = [];
  public unitsAutoComplete: string[] = [];
  public units: unit[] = [];
  ngOnInit() {
    this.getUnitSets()
    this.units[0] = {
      "INTERNAL_REFERENCE": 0,
      "CODE": "",
      "NAME": "",
      "UNIT_ORDER": 0,
      "MAIN_UNIT": 0,
      "CONV_FACT1": 0,
      "CONV_FACT2": 0,
      "GLOBAL_CODE": ""
    }
  }


  getUnitSets() {
    this.itemsSvc.getUnits().subscribe(resp => {
      this.unitSets = resp.items
      this.currentUS()
      resp.items.forEach(set => {
        this.unitSetAutocomplete.push(set.CODE)
      })
    })
  }

  currentUS() {
    for (let i = 0; i < this.unitSets.length; i++) {
      if (this.unitSets[i].CODE == this.newItem.UNITSET_CODE) {
        this.currentUnitSet = this.unitSets[i]
        this.units = []
        this.currentUnitSet.UNITS.items.forEach(unt => this.units.push(unt))
        this.selectedUnit = this.units[0]
      }
    }
  }

  selectUnitSet(code: string) {
    this.newItem.UNITSET_CODE = code
    for (let i = 0; i < this.unitSets.length; i++) {
      if (this.unitSets[i].CODE == this.newItem.UNITSET_CODE) {
        this.units = []
        this.currentUnitSet = this.unitSets[i]
        this.unitSets[i].UNITS.items.forEach(unt => this.unitSetAutocomplete.push(unt.CODE))
        this.unitSets[i].UNITS.items.forEach(unt => this.units.push(unt))
      }
    }
  }


  save() {
    this.itemsSvc.addItem(this.newItem).subscribe(res => {
      console.log(res)
    }, err=>{
      this.httpError = err
      this.toast.error(this.httpError.error.ModelState.DBError[0], 'Kayıt Esnasında Hata Meydana Geldi', { positionClass: 'toast-top-center', timeOut: 300000 })
    })
  }
}

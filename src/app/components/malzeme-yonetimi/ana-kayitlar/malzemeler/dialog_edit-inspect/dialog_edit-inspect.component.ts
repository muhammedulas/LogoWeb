import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { itemFormData } from '../malzemeler.component';
import { MatTab } from '@angular/material/tabs';
import { unitSet } from '../../../../../models/unitSet';
import { ItemsService } from '../../../../../services/items.service';
import { unit } from '../../../../../models/unit'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dialog_edit-inspect',
  templateUrl: './dialog_edit-inspect.component.html',
  styleUrls: ['./dialog_edit-inspect.component.scss']
})
export class Dialog_editInspectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData: itemFormData,
    private itemsSvc: ItemsService

  ) { }
  private unitSets: unitSet[] = [];
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

    console.log(this.itemData)

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

  selectUnitSet(code: string) {
    this.itemData.UNITSET_CODE = code
    for (let i = 0; i < this.unitSets.length; i++) {
      if (this.unitSets[i].CODE == this.itemData.UNITSET_CODE) {
        this.units = []
        this.currentUnitSet = this.unitSets[i]
        this.unitSets[i].UNITS.items.forEach(unt => this.unitSetAutocomplete.push(unt.CODE))
        this.unitSets[i].UNITS.items.forEach(unt => this.units.push(unt))
      }
    }
  }

  currentUS() {
    for (let i = 0; i < this.unitSets.length; i++) {
      if (this.unitSets[i].CODE == this.itemData.UNITSET_CODE) {
        this.currentUnitSet = this.unitSets[i]
        this.units = []
        this.currentUnitSet.UNITS.items.forEach(unt => this.units.push(unt))
        this.selectedUnit = this.units[0]
      }
    }
  }

  save() {
    delete this.itemData.IMAGEINC
    delete this.itemData.DEFNFLDSLIST
    delete this.itemData.GENIUSFLDSLIST
/*     this.itemsSvc.updateItem(this.itemData).subscribe(res => {
      console.log(res)
    }) */


  }
}

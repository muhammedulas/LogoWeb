import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { itemCharasteristics, itemCharVal } from 'src/app/models/itemCharasteristics';
import { ItemCharsService } from 'src/app/services/itemChars.service';

@Component({
  selector: 'app-Dialog_newItemChar',
  templateUrl: './Dialog_newItemChar.component.html',
  styleUrls: ['./Dialog_newItemChar.component.scss']
})
export class Dialog_newItemCharComponent implements OnInit {
  public newItemChar = new itemCharasteristics();
  constructor(
    public dialogRef: MatDialogRef<Dialog_newItemCharComponent>,
    private svc: ItemCharsService,
    private toast: ToastrService
  ) {
    this.newItemChar = {
      "INTERNAL_REFERENCE": 0,
      "CODE": "",
      "NAME": "",
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
      "DATA_REFERENCE": 0,
      "VALUES": {
        "items": []
      }
    }

    this.newItemChar.VALUES.items[0] = {
      INTERNAL_REFERENCE: 0,
      CODE: "",
      VALNO: 1,
      NAME: ""
    }
  }

  ngOnInit() {
  }

  newLine() {
    let empty = {
      INTERNAL_REFERENCE: 0,
      CHARCODEREF: 0,
      VALNO: (this.newItemChar.VALUES.items[this.newItemChar.VALUES.items.length - 1].VALNO) + 1,
      CODE: "",
      NAME: ""
    }
    this.newItemChar.VALUES.items.push(empty)
  }


  removeLine(i: number) {
    this.newItemChar.VALUES.items.splice(i, 1)
  }

  create() {
    this.svc.addItemChar(this.newItemChar).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }

}

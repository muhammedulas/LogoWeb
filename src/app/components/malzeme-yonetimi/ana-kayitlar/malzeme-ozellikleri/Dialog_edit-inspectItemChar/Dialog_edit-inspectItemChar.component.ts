import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { itemCharasteristics } from 'src/app/models/itemCharasteristics';
import { ItemCharsService } from 'src/app/services/itemChars.service';

@Component({
  selector: 'app-Dialog_edit-inspectItemChar',
  templateUrl: './Dialog_edit-inspectItemChar.component.html',
  styleUrls: ['./Dialog_edit-inspectItemChar.component.scss']
})
export class Dialog_editInspectItemCharComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<Dialog_editInspectItemCharComponent>,
    @Inject(MAT_DIALOG_DATA) public data: itemCharasteristics,
    private svc: ItemCharsService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    console.log(this.data)
  }

  newLine() {
    let empty = {
      INTERNAL_REFERENCE: 0,
      CHARCODEREF: 1,
      VALNO: (this.data.VALUES.items[this.data.VALUES.items.length - 1].VALNO) + 1,
      CODE: "",
      NAME: ""
    }
    this.data.VALUES.items.push(empty)
  }


  removeLine(i: number) {
    this.data.VALUES.items.splice(i, 1)
  }

  update() {
    this.svc.updateItemChar(this.data).subscribe(res => {
      this.toast.success("Kayıt Başarılı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    }, err => {
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      console.log(err)
      this.dialogRef.close()
    })
  }
}

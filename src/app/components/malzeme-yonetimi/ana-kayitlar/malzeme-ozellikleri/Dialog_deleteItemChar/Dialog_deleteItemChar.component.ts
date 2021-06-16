import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ItemCharsService } from 'src/app/services/itemChars.service';

@Component({
  selector: 'app-Dialog_deleteItemChar',
  templateUrl: './Dialog_deleteItemChar.component.html',
  styleUrls: ['./Dialog_deleteItemChar.component.scss']
})
export class Dialog_deleteItemCharComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Dialog_deleteItemCharComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private svc: ItemCharsService,
    private toast:ToastrService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.svc.deleteItemChar(this.data).subscribe(res=>{
      this.toast.success("Kayıt Silindiı", "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    },err=>{
      this.toast.error(err.error.ModelState.OtherError[0], "", { positionClass: 'toast-top-center', timeOut: 3000 })
      this.dialogRef.close()
    })
  }

}

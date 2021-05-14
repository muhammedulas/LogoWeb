import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UnitSetsService } from 'src/app/services/unitSets.service';

@Component({
  selector: 'app-dialog_deleteUS',
  templateUrl: './dialog_deleteUS.component.html',
  styleUrls: ['./dialog_deleteUS.component.scss']
})
export class Dialog_deleteUSComponent implements OnInit {

  constructor(private USService: UnitSetsService,
    public dialogRef: MatDialogRef<Dialog_deleteUSComponent>,
    @Inject(MAT_DIALOG_DATA) public USRef: number,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
  }

  delete() {
    this.USService.deleteUnitSet(this.USRef).subscribe(res => {
      if (res == null) {
        this.router.navigate(['birim-setleri'])
        this.toastr.success('Kayıt Silindi', '', { positionClass: 'toast-top-center', timeOut: 3000 })
      }
    },err=>{
      this.toastr.error("Kayıt Silinemedi", "", {positionClass:"toast-top-center", timeOut:3000})
    })
  }


}

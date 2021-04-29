import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-dialog_deleteItem',
  templateUrl: './dialog_deleteItem.component.html',
  styleUrls: ['./dialog_deleteItem.component.scss']
})
export class Dialog_deleteItemComponent implements OnInit {

  constructor(private itemsSvc:ItemsService,
    public dialogRef: MatDialogRef<Dialog_deleteItemComponent>,
    @Inject(MAT_DIALOG_DATA) public itemRef:number,
    private toastr:ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  delete(){
    this.itemsSvc.deleteItem(this.itemRef).subscribe(res=>{
      if(res == null){
        this.router.navigate(['malzemeler'])
        this.toastr.success('Kayıt Silindi','',{positionClass:'toast-top-center',timeOut:3000})
      }
    })
  }

}

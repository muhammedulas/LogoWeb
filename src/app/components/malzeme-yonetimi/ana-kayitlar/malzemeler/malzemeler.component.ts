import { Component, OnInit } from '@angular/core';
import { item } from '../../../../models/itemModel';
import { itemResp } from '../../../../models/itemResp';
import { ItemsService } from '../../../../services/items.service';
import { MatCard } from '@angular/material/card';
import { MatTable } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ToastrService } from 'ngx-toastr';
import { HostListener } from '@angular/core';
import { ItemTypesPipe } from './itemTypes.pipe';

@Component({
  selector: 'app-malzemeler',
  templateUrl: './malzemeler.component.html',
  styleUrls: ['./malzemeler.component.scss']
})
export class MalzemelerComponent implements OnInit {
  public recLimit: number = 10
  public pages = []
  public selectedItem: item = new item;
  private response: itemResp = new itemResp
  public items: item[] = [];
  private errorMsg: string = ""
  private errorCode: string = ""
  public loaded: boolean = false;
  public displayedColumns: string[] = ["CardType","Code","Name","MainUnit","Vat","ShelfLife","ShelfDate","Stock"]
  /*   private scrWidth: number = 0;
    public scrHeight: number = 0; */
  constructor(private itemsSvc: ItemsService, private toast: ToastrService) {
    /* this.onResize() */
  }

  ngOnInit() {
    this.itemsSvc.getItems().subscribe((resp) => {
      this.response = resp
      console.log(this.response)
      //this.response.items.forEach(x => x.AMNT = this.itemsSvc.getStock(x.INTERNAL_REFERENCE.toLocaleString()))
      this.items = this.response.items
      //this.malzemeler.shift();
      this.loaded = true
    },
      err => {
        console.log('---', err)
        if (err.status == 401) {
          this.toast.error('Tekrar Giriş Yapmak İçin Sayfayı Yenileyin', 'Bu işlem İçin Yetkiniz Yok', { positionClass: 'toast-top-center', timeOut: 300000 })
        }
      }
    )

  }

  select(itm: item) {
    this.selectedItem = itm
  }

  /*   @HostListener('window:resize', ['$event'])
    onResize(event?: undefined) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth)
    } */


}

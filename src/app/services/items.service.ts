import { Injectable } from '@angular/core';
import { item } from '../models/itemModel';
import { itemResp } from '../models/itemResp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { itemStock } from '../models/itemStockModel';
import { LoginComponent } from '../components/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient, private loginComp: LoginComponent) { }
  private token = localStorage.getItem('Token')!

  getItems() {
    // let url :string = localStorage.getItem('rootUrl');
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<itemResp>("http://localhost:33082/api/v1/items?offset=1&limit=25&expandlevel=full", { headers })

  }

  getStock(ref: string) {
    var resp
    var val: number = 0
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    var body: string = '"SELECT PURAMNT FROM LV_001_01_STINVTOT WHERE STOCKREF = \'' + ref + '\''
    resp = this.http.get<itemStock>("http://localhost:33082/api/v1/queries?tsql=SELECT PURAMNT FROM LV_00" + this.loginComp.frmNr + '_0' + this.loginComp.perNr + '_STINVTOT WHERE STOCKREF = ' + ref + ' AND INVENNO = -1', { headers })
    resp.subscribe(v => v.items.forEach(x => console.log(x.PURAMNT)))
    return val
  }

}

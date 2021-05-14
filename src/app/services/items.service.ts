import { Injectable } from '@angular/core';
import { item } from '../models/itemModel';
import { itemResp } from '../models/responseModels/itemResp';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { itemStock } from '../models/itemStockModel';
import { LoginComponent } from '../components/login/login.component';
import { itemCount } from '../models/count';
import { itmSearchValue } from '../models/responseModels/itmSearchResp';
import { detailedItemModel } from '../models/detailedItemModel';
import { unitSetsResp } from '../models/responseModels/unitSetsResp';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient, private loginComp: LoginComponent) { }
  private token = localStorage.getItem('Token')!
  private rootUrl = localStorage.getItem('rootUrl');


  getItems(offset: number, lim: number, q?:string) {
    // let url :string = localStorage.getItem('rootUrl');
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if(q==null){
      return this.http.get<itemResp>(this.rootUrl + "/api/v1/items?offset=" + offset + "&limit=" + lim+"&fields=INTERNAL_REFERENCE,CODE,NAME,CARD_TYPE,SELVAT,SHELF_LIFE,SHELF_DATE&withCount=true", { headers })
     // return this.http.get<itemResp>(this.rootUrl + "/api/v1/items?offset=" + offset + "&limit=" + lim+"&q=(CODE like '*"+ q+"*' or NAME like '*"+q+"*')"+"&fields=INTERNAL_REFERENCE,CODE,NAME,CARD_TYPE,SELVAT,SHELF_LIFE,SHELF_DATE", { headers })
    }
    else    return this.http.get<itemResp>(this.rootUrl + "/api/v1/items?offset=" + offset + "&limit=" + lim+"&q=(CODE like '*"+ q+"*' or NAME like '*"+q+"*')"+"&fields=INTERNAL_REFERENCE,CODE,NAME,CARD_TYPE,SELVAT,SHELF_LIFE,SHELF_DATE&withCount=true", { headers })

  }

  getItemByID(id: number) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<detailedItemModel>(this.rootUrl + "/api/v1/items/" + id + '?expandLevel=full', { headers })
  }

  getUnits() {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<unitSetsResp>(this.rootUrl + "/api/v1/unitSets?limit=50", { headers })
  }

  getStock(ref: string) {
    var resp
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    var body: string = '"SELECT PURAMNT FROM LV_001_01_STINVTOT WHERE STOCKREF = \'' + ref + '\''
    return this.http.get<itemStock>(this.rootUrl + "/api/v1/queries?tsql=SELECT PURAMNT, ONHAND, ACTSORDER FROM LV_00" + this.loginComp.frmNr + '_0' + this.loginComp.perNr + '_STINVTOT WHERE STOCKREF = ' + ref + ' AND INVENNO = -1', { headers })
  }


  updateItem(item: detailedItemModel) {
    delete item.IMAGE
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(item)
    return this.http.put<detailedItemModel>(this.rootUrl + "/api/v1/items/" + item.INTERNAL_REFERENCE, body, { headers })
  }

  addItem(item: any) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(item)
    console.log(body)
    return this.http.post(this.rootUrl + '/api/v1/items', body, { headers })
  }

  deleteItem(id:number){
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.delete(this.rootUrl + '/api/v1/items/' + id , {headers})
  }

  itemCount(q?:string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    if(q==null){
      return this.http.get<itemCount>(this.rootUrl + "/api/v1/queries?tsql=SELECT COUNT(1) as recordCount FROM LG_00" + this.loginComp.frmNr + "_ITEMS", { headers })
    }
    else   return this.http.get<itemCount>(this.rootUrl + "/api/v1/queries?tsql=SELECT COUNT(1) WHERE CODE like '%"+q+"%' or NAME like '%"+q+"%' as recordCount FROM LG_00" + this.loginComp.frmNr + "_ITEMS", { headers })

  }

  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<itemResp>(url, { headers })
  }

  searchItems() {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<itmSearchValue>("http")
  }

}

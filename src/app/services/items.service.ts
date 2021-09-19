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
import { LoginServiceService } from './loginService.service';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient, private loginComp: LoginComponent, private loginSvc: LoginServiceService) { }
  private token = localStorage.getItem('Token')!
  private rootUrl = localStorage.getItem('rootUrl');


/*   getItems(offset: number, lim: number, q?: string) {
  let queryString = "";

    if (q != null) {
      
    }


        let queryString = "&fields=INTERNAL_REFERENCE,CODE,NAME,CARD_TYPE,SELVAT,SHELF_LIFE,SHELF_DATE&withCount=true"
        if (this.loginSvc.authCodes.length > 0) {
          var authCodes = this.loginSvc.authCodes
          console.log(authCodes)
          queryString += "AUTH_CODE eq '" + authCodes[0].ACSKEY + "'"
          if (authCodes.length > 1) {
            for (let i = 1; authCodes.length - 1; i++) {
              queryString += "or AUTH_CODE eq '" + authCodes[i].ACSKEY + "'"
            }
          }
          console.log(queryString)
        }
        let auth = "Bearer " + this.token;
        let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
        if (q == null) {
          return this.http.get<itemResp>(this.rootUrl + "/api/v1/items?offset=" + offset + "&limit=" + lim + queryString, { headers })
        }
        else return this.http.get<itemResp>(this.rootUrl + "/api/v1/items?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&fields=INTERNAL_REFERENCE,CODE,NAME,CARD_TYPE,SELVAT,SHELF_LIFE,SHELF_DATE&withCount=true", { headers })

  } */

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
    let firmNr = "0".repeat(3 - this.loginComp.frmNr.length) + this.loginComp.frmNr
    let periodNr = "0".repeat(2 - this.loginComp.perNr.length) + this.loginComp.perNr
    let tableName = "LV_" + firmNr + "_" + periodNr + "_GNTOTST"
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\"DECLARE  @STOCKREF AS INT = " + ref + ", @RECORDCOUNT AS INT " +
      "SET @RECORDCOUNT = (SELECT COUNT(STOCKREF) AS RECORDCOUNT FROM " + tableName + " WHERE STOCKREF = @STOCKREF) " +
      "IF (@RECORDCOUNT < 1) BEGIN " +
      "SELECT 0 AS ONHAND, 0 AS ACTSORDER, 0 AS PURAMNT END ELSE BEGIN " +
      "SELECT ONHAND, ACTSORDER, PURAMNT FROM " + tableName + " WHERE INVENNO = -1 AND STOCKREF = @STOCKREF END \""
    return this.http.post<itemStock>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
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

  deleteItem(id: number) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.delete(this.rootUrl + '/api/v1/items/' + id, { headers })
  }

  itemCount(q?: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    if (q == null) {
      return this.http.get<itemCount>(this.rootUrl + "/api/v1/queries?tsql=SELECT COUNT(1) as recordCount FROM LG_00" + this.loginComp.frmNr + "_ITEMS", { headers })
    }
    else return this.http.get<itemCount>(this.rootUrl + "/api/v1/queries?tsql=SELECT COUNT(1) WHERE CODE like '%" + q + "%' or NAME like '%" + q + "%' as recordCount FROM LG_00" + this.loginComp.frmNr + "_ITEMS", { headers })

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

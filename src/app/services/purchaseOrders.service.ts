import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchaseOrder } from '../models/purchaseOrder';
import { purchaseOrderResp } from '../models/responseModels/purchaseOrderResp';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrdersService {


  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<purchaseOrderResp>(this.rootUrl + "/api/v1/purchaseOrders?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<purchaseOrderResp>(this.rootUrl + "/api/v1/purchaseOrders?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DIVISION like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchaseOrder>(this.rootUrl + "/api/v1/purchaseOrders/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchaseOrders/" + id, { headers })
  }

  add(newRec: purchaseOrder) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchaseOrders/", JSON.stringify(newRec), { headers })
  }

  update(rec: purchaseOrder) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<purchaseOrderResp>(this.rootUrl + "/api/v1/purchaseOrders/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchaseOrderResp>(url, { headers })
  }

}

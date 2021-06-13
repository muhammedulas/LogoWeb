import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salesDispatchResp } from '../models/responseModels/salesDispatchResp';
import { salesDispatch } from '../models/salesDispatch';

@Injectable({
  providedIn: 'root'
})
export class SalesDispatchesService {
  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<salesDispatchResp>(this.rootUrl + "/api/v1/salesDispatches?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<salesDispatchResp>(this.rootUrl + "/api/v1/salesDispatches?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or INVOICE_NUMBER like '*" + q + "* 'or ARP_CODE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<salesDispatch>(this.rootUrl + "/api/v1/salesDispatches/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/salesDispatches/" + id, { headers })
  }

  add(newRec: salesDispatch) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/salesDispatches/", JSON.stringify(newRec), { headers })
  }

  update(rec: salesDispatch) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<salesDispatchResp>(this.rootUrl + "/api/v1/salesDispatches/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<salesDispatchResp>(url, { headers })
  }
}

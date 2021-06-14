import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemSlip } from '../models/itemSlip';
import { itemSlipResp } from '../models/responseModels/itemSlipResp';

@Injectable({
  providedIn: 'root'
})
export class ItemSlipsService {


  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<itemSlipResp>(this.rootUrl + "/api/v1/itemSlips?offset=" + offset + "&limit=" + lim + "&withCount=true&expandLevel=full", { headers })
    }

    else return this.http.get<itemSlipResp>(this.rootUrl + "/api/v1/itemSlips?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or DOC_NUMBER like '*" + q + "* 'or ARP_CODE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<itemSlip>(this.rootUrl + "/api/v1/itemSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/itemSlips/" + id, { headers })
  }

  add(newRec: itemSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/itemSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: itemSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<itemSlipResp>(this.rootUrl + "/api/v1/itemSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<itemSlip>(url, { headers })
  }

}

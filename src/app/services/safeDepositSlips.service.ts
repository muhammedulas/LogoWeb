import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { safeDepositSlipResp } from '../models/responseModels/safeDepositSlipResp';
import { safeDepositSlip } from '../models/safeDepositSlip';

@Injectable({
  providedIn: 'root'
})
export class SafeDepositSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<safeDepositSlipResp>(this.rootUrl + "/api/v1/safeDepositSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<safeDepositSlipResp>(this.rootUrl + "/api/v1/safeDepositSlips?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or MASTER_TITLE like '*" + q + "* 'or DIVISION like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<safeDepositSlip>(this.rootUrl + "/api/v1/safeDepositSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/safeDepositSlips/" + id, { headers })
  }

  add(newRec: safeDepositSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/safeDepositSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: safeDepositSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<safeDepositSlipResp>(this.rootUrl + "/api/v1/safeDepositSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<safeDepositSlipResp>(url, { headers })
  }
}

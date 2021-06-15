import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exportNationalizationSlip } from '../models/exportNationalizationSlip';
import { exportNationalizationSlipResp } from '../models/responseModels/exportNationalizationSlipResp';

@Injectable({
  providedIn: 'root'
})
export class ExportNationalizationSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<exportNationalizationSlipResp>(this.rootUrl + "/api/v1/exportNationalizationSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<exportNationalizationSlipResp>(this.rootUrl + "/api/v1/exportNationalizationSlips?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DIVISION like '*" + q + "*')" + "&withCount=true", { headers })
  }

  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<exportNationalizationSlip>(this.rootUrl + "/api/v1/exportNationalizationSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/exportNationalizationSlips/" + id, { headers })
  }

  add(newRec: exportNationalizationSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/exportNationalizationSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: exportNationalizationSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<exportNationalizationSlipResp>(this.rootUrl + "/api/v1/exportNationalizationSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<exportNationalizationSlipResp>(url, { headers })
  }
}

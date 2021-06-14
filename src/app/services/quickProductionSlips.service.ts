import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { quickProductionSlip } from '../models/quickProductionSlip';
import { quickProductionSlipResp } from '../models/responseModels/quickProductionSlipResp';

@Injectable({
  providedIn: 'root'
})
export class QuickProductionSlipsService {
  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<quickProductionSlipResp>(this.rootUrl + "/api/v1/quickProductionSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<quickProductionSlipResp>(this.rootUrl + "/api/v1/quickProductionSlips?offset=" + offset + "&limit=" + lim + "&q=(FICHENO like '*" + q + "*' or ITEM_CODE like '*" + q + "* 'or ORDERFCNO like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<quickProductionSlip>(this.rootUrl + "/api/v1/quickProductionSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/quickProductionSlips/" + id, { headers })
  }

  add(newRec: quickProductionSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/quickProductionSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: quickProductionSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<quickProductionSlipResp>(this.rootUrl + "/api/v1/quickProductionSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<quickProductionSlipResp>(url, { headers })
  }

}

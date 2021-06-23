import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { costDistributionSlip } from '../models/costDistributionSlip';
import { costDistributionSlipResp } from '../models/responseModels/costDistributionSlipResp';

@Injectable({
  providedIn: 'root'
})
export class CostDistSlipsService {
  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<costDistributionSlipResp>(this.rootUrl + "/api/v1/costDistributionSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<costDistributionSlipResp>(this.rootUrl + "/api/v1/costDistributionSlips?offset=" + offset + "&limit=" + lim + "&q=(FICHENO like '*" + q + "*' or PROJECT_CODE like '*" + q + "* 'or CYPHCODE like '*" + q + "*' or DOCODE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<costDistributionSlip>(this.rootUrl + "/api/v1/costDistributionSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/costDistributionSlips/" + id, { headers })
  }

  add(newRec: costDistributionSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/costDistributionSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: costDistributionSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<costDistributionSlipResp>(this.rootUrl + "/api/v1/costDistributionSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<costDistributionSlipResp>(url, { headers })
  }
}

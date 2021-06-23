import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arpSlips } from '../models/arpSlips';
import { arpSlipResp } from '../models/responseModels/arpSlipResp';

@Injectable({
  providedIn: 'root'
})
export class ArpSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<arpSlipResp>(this.rootUrl + "/api/v1/ArpSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<arpSlipResp>(this.rootUrl + "/api/v1/ArpSlips?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or DOC_NUMBER like '*" + q + "* 'or DOC_TRACK_NR like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<arpSlips>(this.rootUrl + "/api/v1/ArpSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/ArpSlips/" + id, { headers })
  }

  add(newRec: arpSlips) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/ArpSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: arpSlips) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<arpSlipResp>(this.rootUrl + "/api/v1/ArpSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<arpSlipResp>(url, { headers })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inwardProccessingPermit } from '../models/inwardProcessingPermit';
import { inwardProcessingPermitResp } from '../models/responseModels/inwardProcessingPermitResp';

@Injectable({
  providedIn: 'root'
})
export class InwardProcessingPermitsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<inwardProcessingPermitResp>(this.rootUrl + "/api/v1/inwardProcessingPermits?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<inwardProcessingPermitResp>(this.rootUrl + "/api/v1/inwardProcessingPermits?offset=" + offset + "&limit=" + lim + "&q=(FICHENO like '*" + q + "*' or DOCODE like '*" + q + "* 'or BEGDATE like '*" + q + "*' or ENDDATE like '*" + q + "*')" + "&withCount=true", { headers })
  }

  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<inwardProccessingPermit>(this.rootUrl + "/api/v1/inwardProcessingPermits/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/inwardProcessingPermits/" + id, { headers })
  }

  add(newRec: inwardProccessingPermit) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/inwardProcessingPermits/", JSON.stringify(newRec), { headers })
  }

  update(rec: inwardProccessingPermit) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<inwardProcessingPermitResp>(this.rootUrl + "/api/v1/inwardProcessingPermits/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<inwardProcessingPermitResp>(url, { headers })
  }

}

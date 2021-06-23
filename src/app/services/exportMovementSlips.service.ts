import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exportMovementSlip } from '../models/exportMovementSlip';
import { exportMovementSlipResp } from '../models/responseModels/exportMovementSlipResp';

@Injectable({
  providedIn: 'root'
})
export class ExportMovementSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<exportMovementSlipResp>(this.rootUrl + "/api/v1/exportMovementSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<exportMovementSlipResp>(this.rootUrl + "/api/v1/exportMovementSlips?offset=" + offset + "&limit=" + lim + "&q=(FICHENO like '*" + q + "*' or EXIMFILECODE like '*" + q + "* 'or EXIMFILELNNR like '*" + q + "*')" + "&withCount=true", { headers })
  }

  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<exportMovementSlip>(this.rootUrl + "/api/v1/exportMovementSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/exportMovementSlips/" + id, { headers })
  }

  add(newRec: exportMovementSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/exportMovementSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: exportMovementSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<exportMovementSlipResp>(this.rootUrl + "/api/v1/exportMovementSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<exportMovementSlipResp>(url, { headers })
  }
}

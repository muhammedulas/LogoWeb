import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exportOperationSlip } from '../models/exportOperationSlip';
import { exportOperationSlipResp } from '../models/responseModels/exportOperationSlipResp';

export { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportOperationSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<exportOperationSlipResp>(this.rootUrl + "/api/v1/exportOperationSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<exportOperationSlipResp>(this.rootUrl + "/api/v1/exportOperationSlips?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DIVISION like '*" + q + "*')" + "&withCount=true", { headers })
  }

  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<exportOperationSlip>(this.rootUrl + "/api/v1/exportOperationSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/exportOperationSlips/" + id, { headers })
  }

  add(newRec: exportOperationSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/exportOperationSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: exportOperationSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<exportOperationSlipResp>(this.rootUrl + "/api/v1/exportOperationSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<exportOperationSlipResp>(url, { headers })
  }
}

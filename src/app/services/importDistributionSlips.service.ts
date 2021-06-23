import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { importDistributionSlip } from '../models/importDistributionSlip';
import { importDistributionSlipResp } from '../models/responseModels/importDistributionSlipResp';

@Injectable({
  providedIn: 'root'
})
export class ImportDistributionSlipsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<importDistributionSlipResp>(this.rootUrl + "/api/v1/importDistributionSlips?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<importDistributionSlipResp>(this.rootUrl + "/api/v1/importDistributionSlips?offset=" + offset + "&limit=" + lim + "&q=(FICHENO like '*" + q + "*' or EXIMINFO_FILECODE like '*" + q + "* 'or PROCESSNR like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<importDistributionSlip>(this.rootUrl + "/api/v1/importDistributionSlips/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/importDistributionSlips/" + id, { headers })
  }

  add(newRec: importDistributionSlip) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/importDistributionSlips/", JSON.stringify(newRec), { headers })
  }

  update(rec: importDistributionSlip) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<importDistributionSlipResp>(this.rootUrl + "/api/v1/importDistributionSlips/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<importDistributionSlipResp>(url, { headers })
  }
}

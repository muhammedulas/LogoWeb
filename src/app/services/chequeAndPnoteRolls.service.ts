import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chequeAndPnoteRolls } from '../models/chequeAndPnoteRolls';
import { chequeAndPnoteRollsResp } from '../models/responseModels/chequeAndPnoteRollsResp';

@Injectable({
  providedIn: 'root'
})
export class ChequeAndPnoteRollsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<chequeAndPnoteRollsResp>(this.rootUrl + "/api/v1/chequeAndPnoteRolls?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<chequeAndPnoteRollsResp>(this.rootUrl + "/api/v1/chequeAndPnoteRolls?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or DOC_NUMBER like '*" + q + "* 'or MASTER_CODE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<chequeAndPnoteRolls>(this.rootUrl + "/api/v1/chequeAndPnoteRolls/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/chequeAndPnoteRolls/" + id, { headers })
  }

  add(newRec: chequeAndPnoteRolls) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/chequeAndPnoteRolls/", JSON.stringify(newRec), { headers })
  }

  update(rec: chequeAndPnoteRolls) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<chequeAndPnoteRollsResp>(this.rootUrl + "/api/v1/chequeAndPnoteRolls/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<chequeAndPnoteRollsResp>(url, { headers })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { salesExpenseResp } from '../models/responseModels/salesExpenseResp';
import { salesExpense } from '../models/salesExpense';

@Injectable({
  providedIn: 'root'
})
export class SalesExpensesService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<salesExpenseResp>(this.rootUrl + "/api/v1/salesExpenses?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<salesExpenseResp>(this.rootUrl + "/api/v1/salesExpenses?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' and CARD_TYPE = 4)" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<salesExpense>(this.rootUrl + "/api/v1/salesExpenses/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/salesExpenses/" + id, { headers })
  }

  add(newRec: salesExpense) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/salesExpenses/", JSON.stringify(newRec), { headers })
  }

  update(rec: salesExpense) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<salesExpenseResp>(this.rootUrl + "/api/v1/salesExpenses/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<salesExpense>(url, { headers })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serviceSalePriceResp } from '../models/responseModels/serviceSalePriceResp';
import { serviceSalePrice } from '../models/serviceSalePrice';

@Injectable({
  providedIn: 'root'
})
export class ServiceSalePricesService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<serviceSalePriceResp>(this.rootUrl + "/api/v1/salesServicePrices?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<serviceSalePriceResp>(this.rootUrl + "/api/v1/salesServicePrices?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<serviceSalePrice>(this.rootUrl + "/api/v1/salesServicePrices/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/salesServicePrices/" + id, { headers })
  }

  add(newRec: serviceSalePrice) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/salesServicePrices/", JSON.stringify(newRec), { headers })
  }

  update(rec: serviceSalePrice) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<serviceSalePriceResp>(this.rootUrl + "/api/v1/salesServicePrices/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<serviceSalePrice>(url, { headers })
  }

}

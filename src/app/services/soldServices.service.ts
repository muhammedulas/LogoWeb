import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { soldServiceResp } from '../models/responseModels/soldServiceResp';
import { soldService } from '../models/soldService';

@Injectable({
  providedIn: 'root'
})
export class SoldServicesService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<soldServiceResp>(this.rootUrl + "/api/v1/soldServices?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<soldServiceResp>(this.rootUrl + "/api/v1/soldServices?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<soldService>(this.rootUrl + "/api/v1/soldServices/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/soldServices/" + id, { headers })
  }

  add(campaign: soldService) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/soldServices/", JSON.stringify(campaign), { headers })
  }

  update(campaign: soldService) {
    var id = campaign.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(campaign)
    console.log(body)
    return this.http.put<soldServiceResp>(this.rootUrl + "/api/v1/soldServices/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<soldService>(url, { headers })
  }
}

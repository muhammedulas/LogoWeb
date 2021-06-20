import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distRoute } from '../models/distRoute';
import { distRouteResp } from '../models/responseModels/distRouteResp';

@Injectable({
  providedIn: 'root'
})
export class DistributionRoutesService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<distRouteResp>(this.rootUrl + "/api/v1/distributionRoutes?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<distRouteResp>(this.rootUrl + "/api/v1/distributionRoutes?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "* 'or AUXIL_CODE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<distRoute>(this.rootUrl + "/api/v1/distributionRoutes/" + id + '?expandLevel=full', { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/distributionRoutes/" + id, { headers })
  }

  add(newRec: distRoute) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/distributionRoutes/", JSON.stringify(newRec), { headers })
  }

  update(rec: distRoute) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<distRouteResp>(this.rootUrl + "/api/v1/distributionRoutes/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<distRoute>(url, { headers })
  }
}

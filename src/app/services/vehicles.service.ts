import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { vehicleResp } from '../models/responseModels/vehicleResp';
import { vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<vehicleResp>(this.rootUrl + "/api/v1/vehicles?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }

    else return this.http.get<vehicleResp>(this.rootUrl + "/api/v1/vehicles?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DEFINITION like '*" + q + "*' or PLAQUE like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<vehicle>(this.rootUrl + "/api/v1/vehicles/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/vehicles/" + id, { headers })
  }

  add(newRec: vehicle) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/vehicles/", JSON.stringify(newRec), { headers })
  }

  update(rec: vehicle) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<vehicleResp>(this.rootUrl + "/api/v1/vehicles/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<vehicle>(url, { headers })
  }

}

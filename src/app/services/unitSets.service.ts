import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailedUnitSet } from '../models/detailedUnitSet';
import { unitSetsResp } from '../models/responseModels/unitSetsResp';

@Injectable({
  providedIn: 'root'
})
export class UnitSetsService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token')!
  private rootUrl = localStorage.getItem('rootUrl');



  getUnitSets(offset: number, lim: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<unitSetsResp>(this.rootUrl + "/api/v1/unitSets?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<unitSetsResp>(this.rootUrl + "/api/v1/unitSets?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*')" + "&withCount=true", { headers }) 

  }

  getUnitSetByID(id: number) {
    console.log(this.rootUrl + "api/v1/unitSets/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<detailedUnitSet>(this.rootUrl + "/api/v1/unitSets/" + id, {headers})
  }

  deleteUnitSet(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/unitSets/" + id, { headers })
  }

  addUnitSet(us:detailedUnitSet){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/unitSets/",JSON.stringify(us), { headers })
  }

  updateUnitSet(unitSet: detailedUnitSet) {
    var id = unitSet.INTERNAL_REFERENCE;
    delete unitSet.INTERNAL_REFERENCE;
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(unitSet)
    console.log(body)
    return this.http.put<detailedUnitSet>(this.rootUrl + "/api/v1/unitSets/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<unitSetsResp>(url, { headers })
  }


}

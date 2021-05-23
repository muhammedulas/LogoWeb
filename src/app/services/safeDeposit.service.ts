import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { safeDepositResp } from '../models/responseModels/safeDepositResp';
import { safeDeposit } from '../models/safeDeposit';

@Injectable({
  providedIn: 'root'
})
export class SafeDepositService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getSDs(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<safeDepositResp>(this.rootUrl + "/api/v1/safeDeposits?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<safeDepositResp>(this.rootUrl + "/api/v1/safeDeposits?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' or USAGE_NOTE like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getSDByID(id: number) {
    console.log(this.rootUrl + "api/v1/safeDeposits/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<safeDeposit>(this.rootUrl + "/api/v1/safeDeposits/" + id, {headers})
  }
  
  deleteSD(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/safeDeposits/" + id, { headers })
  }
  
  addSD(us:safeDeposit){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/safeDeposits/",JSON.stringify(us), { headers })
  }
  
  updateSD(itemChar: safeDeposit) {
    var id = itemChar.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(itemChar)
    console.log(body)
    return this.http.put<safeDepositResp>(this.rootUrl + "/api/v1/safeDeposits/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<safeDepositResp>(url, { headers })
  }
}

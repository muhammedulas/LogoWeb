import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bank } from '../models/bank';
import { bankResp } from '../models/responseModels/bankResp';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getBanks(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<bankResp>(this.rootUrl + "/api/v1/banks?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<bankResp>(this.rootUrl + "/api/v1/banks?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or TITLE like '*" + q + "*' or DIVISION like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getBankByID(id: number) {
    console.log(this.rootUrl + "api/v1/banks/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<bank>(this.rootUrl + "/api/v1/banks/" + id, {headers})
  }
  
  deleteBank(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/banks/" + id, { headers })
  }
  
  addBank(us:bank){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/banks/",JSON.stringify(us), { headers })
  }
  
  updateBank(itemChar: bank) {
    var id = itemChar.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(itemChar)
    console.log(body)
    return this.http.put<bankResp>(this.rootUrl + "/api/v1/banks/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<bankResp>(url, { headers })
  }
}

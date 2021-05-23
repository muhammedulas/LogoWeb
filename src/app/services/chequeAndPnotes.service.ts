import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cheque_Pnote } from '../models/chequeAndPnote';
import { chequeAndPnoteResp } from '../models/responseModels/chequeAndPnoteResp';

@Injectable({
  providedIn: 'root'
})
export class ChequeAndPnotesService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getCPs(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<chequeAndPnoteResp>(this.rootUrl + "/api/v1/chequeAndPnotes?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<chequeAndPnoteResp>(this.rootUrl + "/api/v1/chequeAndPnotes?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or OWING like '*" + q + "*' or NEW_SERIAL_NO like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getCPById(id: number) {
    console.log(this.rootUrl + "api/v1/chequeAndPnotes/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<cheque_Pnote>(this.rootUrl + "/api/v1/chequeAndPnotes/" + id, {headers})
  }
  
  deleteCP(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/chequeAndPnotes/" + id, { headers })
  }
  
  addCP(item:cheque_Pnote){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/chequeAndPnotes/",JSON.stringify(item), { headers })
  }
  
  updateCP(item: cheque_Pnote) {
    var id = item.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(item)
    console.log(body)
    return this.http.put<chequeAndPnoteResp>(this.rootUrl + "/api/v1/chequeAndPnotes/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<chequeAndPnoteResp>(url, { headers })
  }

}

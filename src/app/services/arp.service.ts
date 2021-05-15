import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arp } from '../models/arp';
import { arpResp } from '../models/responseModels/ARPsResp';

@Injectable({
  providedIn: 'root'
})
export class ArpService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getARPs(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<arpResp>(this.rootUrl + "/api/v1/ARPs?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<arpResp>(this.rootUrl + "/api/v1/ARPs?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getARPByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<arp>(this.rootUrl + "/api/v1/ARPs/" + id, {headers})
  }
  
  deleteARP(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/ARPs/" + id, { headers })
  }
  
  addARP(us:arp){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/ARPs/",JSON.stringify(us), { headers })
  }
  
  updateARP(itemChar: arp) {
    var id = itemChar.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(itemChar)
    console.log(body)
    return this.http.put<arpResp>(this.rootUrl + "/api/v1/ARPs/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<arpResp>(url, { headers })
  }
}

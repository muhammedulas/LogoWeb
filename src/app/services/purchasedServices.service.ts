import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchasedService } from '../models/purchasedService';
import { purchasedServicesResp } from '../models/responseModels/purchasedSerivesResp';

@Injectable({
  providedIn: 'root'
})
export class PurchasedServicesService {
  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getPurchasedServices(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<purchasedServicesResp>(this.rootUrl + "/api/v1/purchasedServices?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<purchasedServicesResp>(this.rootUrl + "/api/v1/purchasedServices?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' or VAT_PERC like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getPurchasedServiceByID(id: number) {
    console.log(this.rootUrl + "api/v1/purchasedServices/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchasedService>(this.rootUrl + "/api/v1/purchasedServices/" + id, {headers})
  }
  
  deletePurchasedService(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchasedServices/" + id, { headers })
  }
  
  addPurchasedService(us:purchasedService){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchasedServices/",JSON.stringify(us), { headers })
  }
  
  updatePurchasedService(Service: purchasedService) {
    var id = Service.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(Service)
    console.log(body)
    return this.http.put<purchasedServicesResp>(this.rootUrl + "/api/v1/purchasedServices/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchasedServicesResp>(url, { headers })
  }
}

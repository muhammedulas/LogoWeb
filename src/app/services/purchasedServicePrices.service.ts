import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchasedServicePrices } from '../models/purchasedServicePrices';
import { pruchasedServicePricesResp } from '../models/responseModels/purchasedServicePricesResp';

@Injectable({
  providedIn: 'root'
})
export class PurchasedServicePricesService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getServicePrices(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<pruchasedServicePricesResp>(this.rootUrl + "/api/v1/purchasedServicePrices?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<pruchasedServicePricesResp>(this.rootUrl + "/api/v1/purchasedServicePrices?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getServicePriceByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchasedServicePrices>(this.rootUrl + "/api/v1/purchasedServicePrices/" + id, {headers})
  }
  
  deleteServicePrice(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchasedServicePrices/" + id, { headers })
  }
  
  addServicePrice(price:purchasedServicePrices){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchasedServicePrices/",JSON.stringify(price), { headers })
  }
  
  updateServicePrice(price: purchasedServicePrices) {
    var id = price.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(price)
    console.log(body)
    return this.http.put<pruchasedServicePricesResp>(this.rootUrl + "/api/v1/purchasedServicePrices/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchasedServicePrices>(url, { headers })
  }
}

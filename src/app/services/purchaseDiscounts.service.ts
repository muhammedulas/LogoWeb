import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchaseDiscount } from '../models/purchaseDiscount';
import { purchaseDiscountResp } from '../models/responseModels/purchaseDiscountResp';

@Injectable({
  providedIn: 'root'
})
export class PurchaseDiscountsService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getPurchaseDiscounts(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<purchaseDiscountResp>(this.rootUrl + "/api/v1/purchaseDiscounts?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<purchaseDiscountResp>(this.rootUrl + "/api/v1/purchaseDiscounts?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' and CardType = 1)" + "&withCount=true", { headers }) 
  }
  
  
  getPurchaseDiscountByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchaseDiscount>(this.rootUrl + "/api/v1/purchaseDiscounts/" + id, {headers})
  }
  
  deletePurchaseDiscount(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchaseDiscounts/" + id, { headers })
  }
  
  addPurchaseDiscount(discount:purchaseDiscount){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchaseDiscounts/",JSON.stringify(discount), { headers })
  }
  
  updatePurchaseDiscount(discount: purchaseDiscount) {
    var id = discount.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(discount)
    console.log(body)
    return this.http.put<purchaseDiscountResp>(this.rootUrl + "/api/v1/purchaseDiscounts/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchaseDiscount>(url, { headers })
  }
}

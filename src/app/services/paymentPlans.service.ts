import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { paymentPlan } from '../models/paymentPlans';
import { paymentPlanResp } from '../models/responseModels/paymentPlanResp';

@Injectable({
  providedIn: 'root'
})
export class PaymentPlansService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getPaymentPlans(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<paymentPlanResp>(this.rootUrl + "/api/v1/paymentPlans?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<paymentPlanResp>(this.rootUrl + "/api/v1/paymentPlans?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' or AUXIL_CODE like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getPaymentPlanByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<paymentPlan>(this.rootUrl + "/api/v1/paymentPlans/" + id, {headers})
  }
  
  deletePaymentPlan(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/paymentPlans/" + id, { headers })
  }
  
  addPaymentPlan(us:paymentPlan){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/paymentPlans/",JSON.stringify(us), { headers })
  }
  
  updatePaymentPlan(itemChar: paymentPlan) {
    var id = itemChar.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(itemChar)
    console.log(body)
    return this.http.put<paymentPlanResp>(this.rootUrl + "/api/v1/paymentPlans/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<paymentPlan>(url, { headers })
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchaseExpense } from '../models/purchaseExpense';
import { purchaseExpenseResp } from '../models/responseModels/purchaseExpenseResp';

@Injectable({
  providedIn: 'root'
})
export class PurchaseExpensesService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getPurchaseExpenses(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<purchaseExpenseResp>(this.rootUrl + "/api/v1/purchaseExpenses?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<purchaseExpenseResp>(this.rootUrl + "/api/v1/purchaseExpenses?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or DESCRIPTION like '*" + q + "*' and CardType = 3)" + "&withCount=true", { headers }) 
  }
  
  
  getPurchaseExpenseByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchaseExpense>(this.rootUrl + "/api/v1/purchaseExpenses/" + id, {headers})
  }
  
  deletePurchaseExpense(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchaseExpenses/" + id, { headers })
  }
  
  addPurchaseExpense(expense:purchaseExpense){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchaseExpenses/",JSON.stringify(expense), { headers })
  }
  
  updatePurchaseExpense(expense: purchaseExpense) {
    var id = expense.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(expense)
    console.log(body)
    return this.http.put<purchaseExpenseResp>(this.rootUrl + "/api/v1/purchaseExpenses/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchaseExpense>(url, { headers })
  }
}

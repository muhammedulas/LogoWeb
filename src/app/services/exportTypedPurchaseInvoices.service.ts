import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exportTypedPurchaseInvoice } from '../models/exportTypedPurchaseInvoice';
import { exportTypedPurchaseInvoiceResp } from '../models/responseModels/exportTypedPurchaseInvoiceResp';

@Injectable({
  providedIn: 'root'
})
export class ExportTypedPurchaseInvoicesService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<exportTypedPurchaseInvoiceResp>(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices?offset=" + offset + "&limit=" + lim + "&withCount=true&q=EXIM_FICHE_TYPE eq 4", { headers })
    }

    else return this.http.get<exportTypedPurchaseInvoiceResp>(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DOC_NUMBER like '*" + q + "*' or TOTAL_NET like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<exportTypedPurchaseInvoice>(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices/" + id, { headers })
  }

  add(newRec: exportTypedPurchaseInvoice) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices/", JSON.stringify(newRec), { headers })
  }

  update(rec: exportTypedPurchaseInvoice) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<exportTypedPurchaseInvoiceResp>(this.rootUrl + "/api/v1/exportTypedPurchaseInvoices/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<exportTypedPurchaseInvoiceResp>(url, { headers })
  }
}

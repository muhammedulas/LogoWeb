import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exportTypedSalesInvoice } from '../models/exportTypedSalesInvoice';
import { exportTypedSalesInvoiceResp } from '../models/responseModels/exportTypedSalesInvoiceResp';

@Injectable({
  providedIn: 'root'
})
export class ExportTypedSalesInvoiceService {

  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<exportTypedSalesInvoiceResp>(this.rootUrl + "/api/v1/exportTypedSalesInvoices?offset=" + offset + "&limit=" + lim + "&withCount=true&q=EXIM_FICHE_TYPE eq 5", { headers })
    }

    else return this.http.get<exportTypedSalesInvoiceResp>(this.rootUrl + "/api/v1/exportTypedSalesInvoices?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DOC_NUMBER like '*" + q + "*' or TOTAL_NET like '*" + q + "*')" + "&withCount=true", { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<exportTypedSalesInvoice>(this.rootUrl + "/api/v1/exportTypedSalesInvoices/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/exportTypedSalesInvoices/" + id, { headers })
  }

  add(newRec: exportTypedSalesInvoice) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/exportTypedSalesInvoices/", JSON.stringify(newRec), { headers })
  }

  update(rec: exportTypedSalesInvoice) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<exportTypedSalesInvoiceResp>(this.rootUrl + "/api/v1/exportTypedSalesInvoices/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<exportTypedSalesInvoiceResp>(url, { headers })
  }

}

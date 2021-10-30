import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { orderPreview } from '../models/orderPreview';
import { orderPreviewResp } from '../models/responseModels/orderPreviewResp';
import { salesOrderResp } from '../models/responseModels/salesOrderResp';
import { salesOrder } from '../models/salesOrder';

@Injectable({
  providedIn: 'root'
})
export class SalesOrdersService {

  constructor(private http: HttpClient, private loginComp: LoginComponent) { }
  private date = new Date();
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');


  getRecords(lim: number, offset: number, q?: string) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<salesOrderResp>(this.rootUrl + "/api/v1/salesOrders?offset=" + offset + "&limit=" + lim + "&withCount=true&expandLevel=full", { headers })
    }

    else return this.http.get<salesOrderResp>(this.rootUrl + "/api/v1/salesOrders?offset=" + offset + "&limit=" + lim + "&q=(NUMBER like '*" + q + "*' or ARP_CODE like '*" + q + "* 'or DIVISION like '*" + q + "*' or DOC_NUMBER like '*" + q + "*' or TOTAL_NET like '*" + q + "*')" + "&withCount=true", { headers })
  }

  getRecordsUnsafe(lastMonth: boolean) {
    let firmNr = "0".repeat(3 - this.loginComp.frmNr.length) + this.loginComp.frmNr;
    let periodNr = "0".repeat(2 - this.loginComp.perNr.length) + this.loginComp.perNr;
    let cardTablePrefix = `LG_${firmNr}_`
    let transTablePrefix = `LG_${firmNr}_${periodNr}_`
    let queries = "";
    if (lastMonth) {
      let startDate = new Date();
      let endDate = new Date();
      startDate.setDate(this.date.getMonth() - 1);
      endDate.setDate(this.date.getDate());

      queries += ` AND LGMAIN.DATE_ BETWEEN '${startDate.toISOString().slice(0, 19).replace('T', ' ')}' AND '${endDate.toISOString().slice(0, 19).replace('T', ' ')}' `
      console.log(queries)
    }
    if(localStorage.getItem('salesmanCode' && localStorage.getItem('salesmanCode')) != "" ){
      queries += ` AND SLSMC.CODE = '${localStorage.getItem("salesmanCode")}'`
    }
    let auth = `Bearer ${this.token}`;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = `"SET ROWCOUNT 0

    SELECT TOP 150 
    LGMAIN.LOGICALREF AS INTERNAL_REFERENCE, LGMAIN.DATE_, LGMAIN.FICHENO, LGMAIN.DOCODE, LGMAIN.DOCTRACKINGNR, LGMAIN.APPROVE, LGMAIN.BRANCH, LGMAIN.TRCODE, LGMAIN.STATUS, LGMAIN.SPECODE, LGMAIN.CYPHCODE, LGMAIN.NETTOTAL, LGMAIN.GENEXCTYP, LGMAIN.CLIENTREF, LGMAIN.REPORTRATE, LGMAIN.DEPARTMENT, LGMAIN.SOURCEINDEX, LGMAIN.FACTORYNR, LGMAIN.PRINTCNT, LGMAIN.ORGLOGICREF, LGMAIN.CANCELLED, LGMAIN.TRCURR, LGMAIN.TRRATE, LGMAIN.WITHPAYTRANS, LGMAIN.WFLOWCRDREF, LGMAIN.TIME_, LGMAIN.LINEEXCTYP, LGMAIN.TRNET, LGMAIN.REPORTNET, LGMAIN.TRANSFERWITHPAY, LGMAIN.SALESMANREF, LGMAIN.TEXTINC, LGMAIN.TYP, LGMAIN.EINVOICE, CLNTC.DEFINITION_, CLNTC.PIECEORDINFLICT, CLNTC.EINVCUSTOM, CLNTC.ACCEPTEINV, CLNTC.EINVOICETYP, SLSMC.CODE AS SALESMANCODE, SLSMC.DEFINITION_ AS SALESMANNAME
     FROM 
    ${transTablePrefix}ORFICHE LGMAIN WITH(NOLOCK) LEFT OUTER JOIN ${cardTablePrefix}CLCARD CLNTC WITH(NOLOCK) ON (LGMAIN.CLIENTREF  =  CLNTC.LOGICALREF) LEFT OUTER JOIN LG_SLSMAN SLSMC WITH(NOLOCK) ON (LGMAIN.SALESMANREF  =  SLSMC.LOGICALREF)
     WHERE 
    (LGMAIN.TRCODE = 1 ${queries})
    
    ORDER BY 
    LGMAIN.TRCODE, LGMAIN.DATE_, LGMAIN.TIME_, LGMAIN.LOGICALREF"`
    console.log(body)
    return this.http.post<orderPreviewResp>(`${this.rootUrl}/api/v1/queries/unsafe`, body, { headers })
  }


  getRecordByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<salesOrder>(this.rootUrl + "/api/v1/salesOrders/" + id, { headers })
  }

  delete(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/salesOrders/" + id, { headers })
  }

  add(newRec: salesOrder) {
    console.log(newRec)
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/salesOrders/", JSON.stringify(newRec), { headers })
  }

  update(rec: salesOrder) {
    var id = rec.INTERNAL_REFERENCE;

    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(rec)
    console.log(body)
    return this.http.put<salesOrderResp>(this.rootUrl + "/api/v1/salesOrders/" + id, body, { headers })
  }


  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<salesOrderResp>(url, { headers })
  }

}

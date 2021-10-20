import { Injectable } from '@angular/core';
import { Router, RouterLink, RoutesRecognized } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { LoginServiceService } from './services/loginService.service';
import { timer } from 'rxjs';
import { SalesOrdersService } from './services/salesOrders.service';
import { timeStamp } from 'console';
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { card } from './models/card';
import { unitSetsResp } from './models/responseModels/unitSetsResp';
import { unitSet } from './models/unitSet';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  public arpCodes: card[] = [];
  public itemCodes: card[] = [];
  public unitSets: unitSet[] = [];
  public paymentPlans: card[] = [];
  public routeSnapshot: string = "";
  private idleTimer: any;
  public reloadNeeded: boolean = false
  private sidenavToggle = new Subject<boolean>();
  constructor(
    private loginSvc: LoginServiceService,
    private toastr: ToastrService,
    private http: HttpClient,
    public router: Router) {
    this.sidenavToggle.next(false)
    //this.getCodes()
  }

  toggle(toggleTo: boolean) {
    this.sidenavToggle.next(toggleTo)
  }

  getToggleInfo() {
    return this.sidenavToggle.asObservable()
  }

  startTimer() {
    this.idleTimer = timer(0, 1000).subscribe(t => {
      if (t == 3000) {
        this.idleProcedure(t)
      }
    })
  }

  idleProcedure(curr: number) {
    this.toastr.warning('Uygulamadan Çıkış Yapılacak', 'Uzun Süre İşlem Yapılmadı', { positionClass: 'toast-top-center', timeOut: 5000, progressBar: true })
    timer(0, 1000).subscribe(t => {
      if (t == 5) {
        this.loginSvc.logout()
      }
    })
  }

  getCodes() {
    this.getItemCodes().subscribe(res => {
      this.itemCodes = res.items
      console.log(res.items)
    })
    this.getArpCodes().subscribe(res => {
      this.arpCodes = res.items
      console.log(res.items)
    })
    this.getPaymentPlans().subscribe(res => {
      this.paymentPlans = res.items
      console.log(res.items)
    })
  }


  getItemCodes() {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT LOGICALREF AS INTERNAL_REFERENCE, CODE, NAME AS DEFINITION_, UNITSETREF, SELLVAT AS VAT_RATE FROM LG_" + firmNr + "_ITEMS WHERE NOT CODE = 'ÿ' AND ACTIVE = 0 \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  getArpCodes() {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE,  DEFINITION_ FROM LG_" + firmNr + "_CLCARD WHERE NOT CODE = 'ÿ' \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  getPaymentPlans() {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE,  DEFINITION_ FROM LG_" + firmNr + "_PAYPLANS \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }


  getUnitSets() {
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<unitSetsResp>(this.rootUrl + "/api/v1/unitSets", { headers })
  }

  getSalePrices(itemCode: string, arpCode: string) {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let prefix = "LG_" + firmNr + "_"
    let queryString = "\" SELECT ITM . LOGICALREF AS STOKREF , ITM . CODE AS [STOK KODU] , PRC.CLIENTCODE AS CARI, ITM . SPECODE [ÖZEL KOD] , ITM . SPECODE2 [ÖZEL KOD2] , ITM . SPECODE3 [ÖZEL KOD3] , ITM . SPECODE4 [ÖZEL KOD4] , ITM . SPECODE5 [ÖZEL KOD5] , ITM . NAME AS [STOK ADI] , USL . CODE AS [BİRİM_KODU] , USL . NAME AS [BİRİM ADI], PRC.UNITCONVERT , UA . CONVFACT1 AS ÇEVRİM1 , UA . CONVFACT2 AS [ÇEVRİM 2] , UA . LINENR , ( CASE USL . MAINUNIT WHEN 1 THEN 'EVET' ELSE 'HAYIR' END ) AS [MAINUNIT] , UA . LOGICALREF AS [BİRİM REF] , PRC . PRICE , ( CASE PRC . CURRENCY WHEN 1 THEN 'USD' WHEN 20 THEN 'EURO' ELSE 'TL' END ), (( CONVERT ( DATETIME , PRC . BEGDATE ,102 ))) [Fiyat Başl.] ,(( CONVERT ( DATETIME , PRC . ENDDATE ,102 ))) [Fiyat Bitiş] , prc . LOGICALREF [FİYAT_REF] , UA . LOGICALREF [UAREF] , USL . LOGICALREF [USL REF] FROM LG_001_PRCLIST PRC LEFT OUTER JOIN LG_001_ITMUNITA AS UA INNER JOIN LG_001_UNITSETL AS USL INNER JOIN LG_001_UNITSETF AS USF ON USL . UNITSETREF = USF . LOGICALREF ON UA . UNITLINEREF = USL . LOGICALREF INNER JOIN LG_001_ITEMS AS ITM ON UA . ITEMREF = ITM . LOGICALREF AND USF . LOGICALREF = ITM . UNITSETREF ON PRC . UOMREF = USL . LOGICALREF AND PRC . CARDREF = ITM . LOGICALREF WHERE ( ITM . CARDTYPE IN (1 ,12 )) AND PRC . GRPCODE NOT IN ( 'PRM' ) AND PRC . PTYPE =2 AND PRC . ACTIVE =0 AND ITM.CODE = '" + itemCode + "' AND (PRC.BEGDATE <= CONVERT(dateTime, CAST(GETDATE() AS DATE), 101)) AND (PRC.ENDDATE >= CONVERT(dateTime, CAST(GETDATE() AS DATE), 101)) AND (PRC.CLIENTCODE = '' OR PRC.CLIENTCODE = '"+ arpCode +"')  ORDER BY CLIENTCODE DESC, PRC.LOGICALREF DESC  \""
    let auth = "Bearer " + localStorage.getItem('Token');
    console.log(queryString)
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }


}

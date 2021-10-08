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
    console.log(auth)
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE, NAME AS DEFINITION_, UNITSETREF, SELLVAT AS VAT_RATE FROM LG_" + firmNr + "_ITEMS WHERE NOT CODE = 'ÿ' AND ACTIVE = 0 \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  getArpCodes() {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let auth = "Bearer " + localStorage.getItem('Token');
    console.log(auth)
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE,  DEFINITION_ FROM LG_" + firmNr + "_CLCARD WHERE NOT CODE = 'ÿ' \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  getPaymentPlans() {
    let firmNr = "0".repeat(3 - localStorage.getItem('frmNr').length) + localStorage.getItem('frmNr')
    let periodNr = "0".repeat(2 - localStorage.getItem('perNr').length) + localStorage.getItem('perNr')
    let auth = "Bearer " + localStorage.getItem('Token');
    console.log(auth)
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE,  DEFINITION_ FROM LG_" + firmNr + "_PAYPLANS \""
    return this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }


  getUnitSets() {
    let auth = "Bearer " + localStorage.getItem('Token');
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<unitSetsResp>(this.rootUrl + "/api/v1/unitSets", { headers })
  }


}

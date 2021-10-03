import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenResp } from '../models/responseModels/tokenResp';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { authCode } from '../models/authCode';
import { authCodeResp } from '../models/responseModels/authCodesResp';
import { userResp } from '../models/responseModels/userResp';
import { menuAcces } from '../models/menuAccess';
import { menuAccessResp } from '../models/responseModels/menuAccessResp';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public userName: string = "";
  public userNr: number = 0;
  public frmNo: string = "";
  public perNo: string = "";
  public salesmanCode: string = "";
  public authCodes: authCode[] = [];
  public menuAccess: menuAcces[] = [];
  public loggedIn: boolean = false;
  private rootUrl = localStorage.getItem('rootUrl');
  private clientID = localStorage.getItem('ClientID');
  private clientSecret = localStorage.getItem('clientSecret');
  private idleTimer: number = 30


  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, private toastr: ToastrService) {
    this.idleTimer = 1
  }

  login(usr: string, pw: string, frmNo: string, perNo: string) {
    this.frmNo = frmNo;
    this.perNo = perNo;
    let reqString = btoa(this.clientID + ":" + this.clientSecret)
    let headers = new HttpHeaders().set('Authorization', 'Basic').set('Content-Type', 'application/json').set('Accept', 'application/json');
    const body: string = "grant_type=password&username=" + usr + "&firmno=" + frmNo + "&password=" + pw
    console.log(this.rootUrl)
    return this.http.post<tokenResp>(this.rootUrl + '/api/v1/token', body, { headers });

  }

  logout() {
    this.loggedIn = false
    this.dialog.closeAll()
    localStorage.removeItem('Token')
    this.router.navigate(['login'])
  }

  changeLoggedInState() {
    this.loggedIn = true
  }

  getUserNr(userName: string) {
    this.userName = userName
    let auth = "Bearer " + localStorage.getItem('Token')
    let headers = new HttpHeaders().set('Authorization', auth).set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this.http.get<userResp>(this.rootUrl + "/api/v1/queries?tsql=SELECT * FROM L_CAPIUSER WHERE NAME = '" + userName + "'", { headers })
  }

  getAuthCodes(uid: number) {
    let auth = "Bearer " + localStorage.getItem('Token')
    let headers = new HttpHeaders().set('Authorization', auth).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let queryString = "\"SELECT * FROM L_CAPIDRIGHT WHERE ID = '" + this.userNr + "'\""
    return this.http.post<authCodeResp>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  getMenuAccesses(){
    let auth = "Bearer " + localStorage.getItem('Token')
    let headers = new HttpHeaders().set('Authorization', auth).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let queryString = "\"SELECT * FROM MOB_MENU_ACCESS WHERE USERNR = '" + this.userNr + "'\""
    return this.http.post<menuAccessResp>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  afterLoginProcedure(username: string) {
    this.getUserNr(username).subscribe(res => {
      console.log(res)
      this.userNr = res.items[0].NR;
      this.getMenuAccesses().subscribe(res=>{
        this.menuAccess = res.items
        console.log(res.items)
      })
      this.getAuthCodes(this.userNr).subscribe(res => {
        this.authCodes = res.items;
        console.log(this.authCodes)
      })
      this.getSalesmanCode();
      console.log('nr: ' + this.userNr)
    })
  }

  getSalesmanCode(){
    let auth = "Bearer " + localStorage.getItem('Token')
    let tableName = "LG_SLSMAN"
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let queryString = "\" SELECT  CODE FROM " + tableName + " WHERE  USERID = '" + this.userNr + "'\""
    this.http.post<any>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers }).subscribe(res=>{
      this.salesmanCode = res.items[0].CODE
    })
  }

}

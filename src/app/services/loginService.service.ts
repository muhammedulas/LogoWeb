import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenResp } from '../models/tokenResp';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private rootUrl = localStorage.getItem('rootUrl');
  private clientID = localStorage.getItem('ClientID');
  private clientSecret = localStorage.getItem('clientSecret');
  private response: tokenResp = {
    "access_token": "",
    "token_type": "",
    "expires_in": 0,
    "refresh_token": "",
    "as:client_id": "",
    "userName": "",
    "firmNo": "",
    "sessionId": "",
    "dbName": "",
    "logoDB": "",
    "isLoginEx": "",
    "isLogoPlugin": "",
    "idmToken": "",
    ".issued": "",
    ".expires": ""
  }

  constructor(private http: HttpClient) { }

  login(usr: string, pw: string, frmNo: string, perNo: string) {
    let reqString = btoa(this.clientID + ":" + this.clientSecret)
    let headers = new HttpHeaders().set('Authorization', 'Basic').set('Content-Type', 'application/json').set('Accept', 'application/json');
    const body: string = "grant_type=password&username=" + usr + "&firmno=" + frmNo + "&password=" + pw
    return this.http.post<tokenResp>('http://localhost:33082/api/v1/token', body, { headers });
  }

}

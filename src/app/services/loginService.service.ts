import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenResp } from '../models/tokenResp';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public loggedIn: boolean = false;
  private rootUrl = localStorage.getItem('rootUrl');
  private clientID = localStorage.getItem('ClientID');
  private clientSecret = localStorage.getItem('clientSecret');

  constructor(private http: HttpClient) { }

  login(usr: string, pw: string, frmNo: string, perNo: string) {
    let reqString = btoa(this.clientID + ":" + this.clientSecret)
    let headers = new HttpHeaders().set('Authorization', 'Basic').set('Content-Type', 'application/json').set('Accept', 'application/json');
    const body: string = "grant_type=password&username=" + usr + "&firmno=" + frmNo + "&password=" + pw
    return this.http.post<tokenResp>('http://localhost:33082/api/v1/token', body, { headers });

  }

}

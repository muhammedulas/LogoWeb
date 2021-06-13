import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenResp } from '../models/responseModels/tokenResp';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public loggedIn: boolean = false;
  private rootUrl = localStorage.getItem('rootUrl');
  private clientID = localStorage.getItem('ClientID');
  private clientSecret = localStorage.getItem('clientSecret');
  private idleTimer: number = 30


  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, private toastr: ToastrService) {
    this.idleTimer = 1
  }

  login(usr: string, pw: string, frmNo: string, perNo: string) {
    let reqString = btoa(this.clientID + ":" + this.clientSecret)
    let headers = new HttpHeaders().set('Authorization', 'Basic').set('Content-Type', 'application/json').set('Accept', 'application/json');
    const body: string = "grant_type=password&username=" + usr + "&firmno=" + frmNo + "&password=" + pw
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
}

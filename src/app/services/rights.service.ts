import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rightsResp } from '../models/responseModels/rightsResp';
import { rights } from '../models/rights';
import { LoginServiceService } from './loginService.service';

@Injectable({
  providedIn: 'root'
})



export class RightsService {
  public rights: rights[] = [];
  private rootUrl = localStorage.getItem('rootUrl')

  constructor(private http: HttpClient, private login: LoginServiceService) { }

  getRights() {
    let auth = "Bearer " + localStorage.getItem('Token')
    let headers = new HttpHeaders().set('Authorization', auth).set('Content-Type', 'application/json').set('Accept', 'application/json');
    let queryString = "\"SELECT * FROM MOB_RIGHTS WHERE USERNR = '" + this.login.userNr + "'\""
    return this.http.post<rightsResp>(this.rootUrl + "/api/v1/queries/unsafe", queryString, { headers })
  }

  checkRight(rightCode: number) {
    function check(array: rights) {
      return array.RIGHTCODE == rightCode && array.ALLOWED == 1
    }
    let result = this.rights.filter(check)
    if (result.length > 0) return true
    else return true
  }


}

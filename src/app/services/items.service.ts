import { Injectable } from '@angular/core';
import { item } from '../models/itemModel';
import { itemResp } from '../models/itemResp';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient) { }
  private token = localStorage.getItem('Token')!

  getItems() {
    // let url :string = localStorage.getItem('rootUrl');
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<itemResp>("http://localhost:33082/api/v1/items", { headers })

  }

}

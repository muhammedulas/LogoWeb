import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { itemCharasteristics } from '../models/itemCharasteristics';
import { itemCharasteristicsResp } from '../models/responseModels/itemCharasteristicsResp';

@Injectable({
  providedIn: 'root'
})
export class ItemCharsService {

constructor(private http:HttpClient) { }
private token = localStorage.getItem('Token');
private rootUrl = localStorage.getItem('rootUrl');


getItemChars(lim:number,offset:number,q?:string){
  let auth = "Bearer " + this.token;
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
  if (q == undefined) {
    return this.http.get<itemCharasteristicsResp>(this.rootUrl + "/api/v1/itemCharacteristics?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
  }
  
  else return this.http.get<itemCharasteristicsResp>(this.rootUrl + "/api/v1/itemCharacteristics?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*')" + "&withCount=true", { headers }) 
}


getItemCharByID(id: number) {
  console.log(this.rootUrl + "api/v1/itemCharacteristics/" + id)
  let auth = "Bearer " + this.token;
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
  return this.http.get<itemCharasteristics>(this.rootUrl + "/api/v1/itemCharacteristics/" + id, {headers})
}

deleteItemChar(id: number) {
  let auth = "Bearer " + this.token;
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
  return this.http.delete(this.rootUrl + "/api/v1/itemCharacteristics/" + id, { headers })
}

addItemChar(us:itemCharasteristics){
  let auth = "Bearer " + this.token;
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
  return this.http.post(this.rootUrl + "/api/v1/itemCharacteristics/",JSON.stringify(us), { headers })
}

updateItemChar(itemChar: itemCharasteristics) {
  var id = itemChar.INTERNAL_REFERENCE;
  
  let auth = "Bearer " + this.token;
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
  let body = JSON.stringify(itemChar)
  console.log(body)
  return this.http.put<itemCharasteristicsResp>(this.rootUrl + "/api/v1/itemCharacteristics/" + id, body, { headers })
}


changePage(url: string) {
  let auth = "Bearer " + this.token
  let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
  return this.http.get<itemCharasteristicsResp>(url, { headers })
}

}

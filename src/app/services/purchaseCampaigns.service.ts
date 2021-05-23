import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { purchaseCampaigns } from '../models/purchaseCampaigns';
import { purchaseCampaignsResp } from '../models/responseModels/purchaseCampaignsResp';

@Injectable({
  providedIn: 'root'
})
export class PurchaseCampaignsService {

  constructor(private http:HttpClient) { }
  private token = localStorage.getItem('Token');
  private rootUrl = localStorage.getItem('rootUrl');
  
  
  getCampaigns(lim:number,offset:number,q?:string){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    if (q == undefined) {
      return this.http.get<purchaseCampaignsResp>(this.rootUrl + "/api/v1/purchaseCampaigns?offset=" + offset + "&limit=" + lim + "&withCount=true", { headers })
    }
    
    else return this.http.get<purchaseCampaignsResp>(this.rootUrl + "/api/v1/purchaseCampaigns?offset=" + offset + "&limit=" + lim + "&q=(CODE like '*" + q + "*' or NAME like '*" + q + "*' or BEG_DATE like '*" + q + "*' or END_DATE like '*" + q + "*' or CLIENT_CODE like '*" + q + "*')" + "&withCount=true", { headers }) 
  }
  
  
  getCampaignByID(id: number) {
    console.log(this.rootUrl + "api/v1/ARPs/" + id)
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.get<purchaseCampaigns>(this.rootUrl + "/api/v1/purchaseCampaigns/" + id, {headers})
  }
  
  deleteCampaign(id: number) {
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json')
    return this.http.delete(this.rootUrl + "/api/v1/purchaseCampaigns/" + id, { headers })
  }
  
  addCampaign(campaign:purchaseCampaigns){
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.post(this.rootUrl + "/api/v1/purchaseCampaigns/",JSON.stringify(campaign), { headers })
  }
  
  updateCampaign(campaign: purchaseCampaigns) {
    var id = campaign.INTERNAL_REFERENCE;
    
    let auth = "Bearer " + this.token;
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    let body = JSON.stringify(campaign)
    console.log(body)
    return this.http.put<purchaseCampaignsResp>(this.rootUrl + "/api/v1/purchaseCampaigns/" + id, body, { headers })
  }
  
  
  changePage(url: string) {
    let auth = "Bearer " + this.token
    let headers = new HttpHeaders().set('Authorization', auth).set('Accept', 'application/json').set('Content-Type', 'application/json')
    return this.http.get<purchaseCampaigns>(url, { headers })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createAuthorizationHeader } from './header';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  AuthURL='http://fleet.tn/ws_rimtrack_all/signin';
  PathsUrl='http://fleet.tn/ws_rimtrack_all/paths';
  DetailsURL='http://fleet.tn/ws_rimtrack_all/paths/details';
  intervale = {
    "startDate": 1555432294000,
    "endDate": 1555433683000
  }

     test:any;
  constructor(private http: HttpClient) { }

  login(username:string ,password:string){
    
    return this.http.post<any>(this.AuthURL,{username,password});
  }


  getPath(id:any,startDate:any,endDate:any){
    var intervale = {
      "startDate": startDate,
       "endDate": endDate
      }
    let headers = createAuthorizationHeader();
    
    return this.http.post<any>(this.PathsUrl+"/"+id, intervale, {headers : headers});
    
  }

  getDetails(id:any,startDate:any,endDate:any){
    var intervale = {
      "startDate": startDate,
      "endDate": endDate
    }
    let headers = createAuthorizationHeader();
    
    return this.http.post<any>(this.DetailsURL+"/"+id, intervale, {headers : headers});
  }
}

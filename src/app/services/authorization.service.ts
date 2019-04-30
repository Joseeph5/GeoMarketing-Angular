import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpResponse, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  AuthURL='http://fleet.tn/ws_rimtrack_all/signin';
  PathsUrl='http://fleet.tn/ws_rimtrack_all/paths/813785';
  constructor(private http: HttpClient) { }

  login(username:string ,password:string){
    
    return this.http.post<any>(this.AuthURL,{username,password});
  }


  getPaths(token:string){
    
    const headers = new HttpHeaders().set('Authorization','sssssss');

    return this.http.post<any>(this.PathsUrl,null,{headers});
  }
}

import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';

import { Group } from '../shared/Group'
import { Driver } from 'selenium-webdriver/chrome';
@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  PoiDataURL = 'http://127.0.0.1:8000/poi';
  GroupIdURL = 'http://127.0.0.1:8000/groupe';
  carIdURL = 'http://127.0.0.1:8000/vehicule/13';

  test='http://127.0.0.1:8000/device';

  UserURL:'http://fleet.tn/ws_rimtrack_all/signin';

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  httpOptions = {
   headers: new HttpHeaders({
    'Content-Type': 'application/json'
   })
  }  
  constructor(private http: HttpClient) { }

  getGroupId(): Observable<Group[]>{
    return this.http.get<Group[]>(this.GroupIdURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getcarsId(id:any): Observable<Group[]>{
    return this.http.get<Group[]>(this.GroupIdURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getDeviceId(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.test+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPoiData(){
    return this.http.get<any>(this.PoiDataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


}

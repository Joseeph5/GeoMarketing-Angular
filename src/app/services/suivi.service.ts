import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {
  
  DataURL="http://127.0.0.1:8000/calsuivi";
  ClientMissionURL="http://127.0.0.1:8000/clientmission";
  ClientVisiteURL="http://127.0.0.1:8000/clientvisite";

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


  getData(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.DataURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getClientMission(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.ClientMissionURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getClientVisite(id:any): Observable<any[]>{
    return this.http.get<any[]>(this.ClientVisiteURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}

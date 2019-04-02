import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../shared/User'
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiURL = 'http://127.0.0.1:8000/driver';
  apiUpdate='http://127.0.0.1:8000/updatedriver';
  
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

  constructor( private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  getData(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getDataById(id:any): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateMission(id:any, driver:User): Observable<User> {
    return this.http.put<User>(this.apiUpdate+'/'+id, JSON.stringify(driver), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }
}

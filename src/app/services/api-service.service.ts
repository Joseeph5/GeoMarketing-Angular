import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Driver } from '../shared/Driver'
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  DataURL = 'http://127.0.0.1:8000/driver';
  UpdateURL='http://127.0.0.1:8000/updatedriver';
  DeleteURL='http://127.0.0.1:8000/removedriver';
  AddDriverURL='http://127.0.0.1:8000/adddriver';
  
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
      'Accept': 'application/json'
    })
  }  
  getData(): Observable<Driver[]>{
    return this.http.get<Driver[]>(this.DataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getDataById(id:any): Observable<Driver[]>{
    return this.http.get<Driver[]>(this.DataURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  addDriver(driver:Driver): Observable<Driver> {
    let headers = new HttpHeaders ({"Content-Type" : "application/json"});
    return this.http.post<Driver>(this.AddDriverURL, driver)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }

  updateDriver(id:any, driver:Driver): Observable<Driver> {
    return this.http.put<Driver>(this.UpdateURL+'/'+id, driver)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }

  delete(id:any):Observable<Driver>{
    return this.http.delete<Driver>(this.DeleteURL+'/'+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}

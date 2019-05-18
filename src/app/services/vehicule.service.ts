import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  DataURL = 'http://127.0.0.1:8000/vehicule';
  UpdateURL='http://127.0.0.1:8000/';
  DeleteURL='http://127.0.0.1:8000/';
  PostURL='http://127.0.0.1:8000/addvehicule';

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
    'Accept': 'application/json'
  })
}  
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.DataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  updateVehicule(id:any, mission:any): Observable<any> {
    return this.http.put<any>(this.UpdateURL+'/'+id, JSON.stringify(mission))
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(this.DeleteURL+'/'+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  addVehicule(mission:any): Observable<any> {
    return this.http.post<any>(this.PostURL,mission)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }
}

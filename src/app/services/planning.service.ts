import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError ,Observable} from 'rxjs';
import { Planning } from '../shared/Planning'
@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  DataURL = 'http://127.0.0.1:8000/planificationpoi';
  DeleteURL='http://127.0.0.1:8000/removeplanning';
  AddURL='http://127.0.0.1:8000/addplanning';
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
  getData(): Observable<Planning[]>{
    return this.http.get<Planning[]>(this.DataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  delete(id:any):Observable<Planning>{
    return this.http.delete<Planning>(this.DeleteURL+'/'+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  addplanning(planning:Planning): Observable<Planning> {
    return this.http.post<Planning>(this.AddURL,planning)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }

  
}

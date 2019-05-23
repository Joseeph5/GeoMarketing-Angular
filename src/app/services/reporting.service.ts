import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Reporting} from '../shared/Reporting';

import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  DataURL="http://127.0.0.1:8000/rapport";
  AddURL="http://127.0.0.1:8000/addrapport";

  
  DeleteURL="";
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

getData(id:any): Observable<Reporting[]>{
  return this.http.get<Reporting[]>(this.DataURL+'/'+id).pipe(
    retry(1),
    catchError(this.handleError)
  );
}


addReporting(id:any,reporting:Reporting): Observable<Reporting> {
  return this.http.post<Reporting>(this.AddURL+"/"+id,reporting)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  
}

delete(id:any):Observable<Reporting>{
  return this.http.delete<Reporting>(this.DeleteURL+'/'+id,this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

}

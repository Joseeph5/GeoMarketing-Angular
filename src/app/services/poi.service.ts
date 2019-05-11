import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Poi } from '../shared/Poi';
@Injectable({
  providedIn: 'root'
})
export class PoiService {
  DataPoiUrl='http://127.0.0.1:8000/missiondriverpoi/14';
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
getData(): Observable<Poi[]>{
  return this.http.get<Poi[]>(this.DataPoiUrl).pipe(
    retry(1),
    catchError(this.handleError)
  );
}
}

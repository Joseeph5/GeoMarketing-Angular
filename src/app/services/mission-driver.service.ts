import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Mission } from '../shared/Mission'
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionDriverService {
  DataURL = 'http://127.0.0.1:8000/missiondriver';
  poiDataURL = 'http://127.0.0.1:8000/missiondriverpoi';
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

getData(id): Observable<Mission[]>{
  return this.http.get<Mission[]>(this.DataURL+"/"+id).pipe(
    retry(1),
    catchError(this.handleError)
  );
}
getPoiData(id): Observable<any[]>{
  return this.http.get<any[]>(this.poiDataURL+"/"+id).pipe(
    retry(1),
    catchError(this.handleError)
  );
}
}
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Mission } from '../shared/Mission'
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MissionServiceService {
  DataURL = 'http://127.0.0.1:8000/mission';
  UpdateURL='http://127.0.0.1:8000/updatemission';
  DeleteURL='http://127.0.0.1:8000/removemission';
  PostURL='http://127.0.0.1:8000/addmission';
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
  getData(): Observable<Mission[]>{
    return this.http.get<Mission[]>(this.DataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getDataById(id:any): Observable<Mission[]>{
    return this.http.get<Mission[]>(this.DataURL+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateMission(id:any, mission:Mission): Observable<Mission> {
    return this.http.put<Mission>(this.UpdateURL+'/'+id, JSON.stringify(mission))
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }

  delete(id:any):Observable<Mission>{
    return this.http.delete<Mission>(this.DeleteURL+'/'+id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  addMission(mission:Mission): Observable<Mission> {
    return this.http.post<Mission>(this.PostURL,mission)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }

  
}

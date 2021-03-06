import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  DataURL = 'http://127.0.0.1:8000/groupe';
  UpdateURL='http://192.168.1.107:8000/';
  DeleteURL='http://127.0.0.1:8000/removegroup';
  AddURL='http://127.0.0.1:8000/addgroupe';
  
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
  updateGroup(id:any, mission:any): Observable<any> {
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
  
  addGroup(nom:any): Observable<any> {
    return this.http.post<any>(this.AddURL,nom)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }
}

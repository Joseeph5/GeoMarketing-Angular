import { Injectable } from '@angular/core';
import { Observable ,throwError, BehaviorSubject} from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient ,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Driver } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Driver>;
  public currentUser: Observable<Driver>;

  
  AuthRL='http://fleet.tn/ws_rimtrack_all/signin';
  PathsURL='http://fleet.tn/ws_rimtrack_all/paths/813785';


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
    'Content-Type': 'application/json',
    'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWJpZCI6bnVsbCwic3ViIjoiZWNvdGkiLCJhdWRpZW5jZSI6IndlYiIsImNyZWF0ZWQiOjE1NTU5NjkxMjc5MDksImlzcm9vdCI6dHJ1ZSwiaWQiOjEyNDIsImV4cCI6MTU1NjU3MzkyN30.qsFr25nD36UVJEjStHB586d2XV8bJrrM0ICOhpbs-opzrPoNyc8R0gyDzQTivfNgxDls6_X7s5y0PaOT0NrTPw'
   })
  }  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Driver>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(username: string, password: string) {
    return this.http.post<any>(this.AuthRL, { username, password })
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  GetPaths(startDate: string, endDate: string) {
    
    
    return this.http.post<any>(this.PathsURL, { startDate, endDate },this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}

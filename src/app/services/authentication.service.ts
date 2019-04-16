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
}

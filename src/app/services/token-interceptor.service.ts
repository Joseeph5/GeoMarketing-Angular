import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
// import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  
  
  constructor(private injector: Injector){}

  
  
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer'+localStorage.getItem('Token'))
      }
    )
    return next.handle(tokenizedReq)
  }

  
}

import {Headers} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';



export function createAuthorizationHeader() : HttpHeaders {
    let headers = new HttpHeaders ({"Content-Type" : "application/json" , 'Authorization':localStorage.getItem('token')});
    
    return headers;
}
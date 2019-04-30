import {Headers} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

export function createAuthorizationHeader(headers: HttpHeaders) {
headers.append('Authorization',localStorage.getItem('token'));
}
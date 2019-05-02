import { Headers, ResponseContentType } from '@angular/http';
interface RequestOptionsArgs {
  url?: string;
  method?: string;
  search?: string;
  params?: string;
  headers?: Headers;
  body?: any;
  withCredentials?: boolean;
  responseType?: ResponseContentType;
}

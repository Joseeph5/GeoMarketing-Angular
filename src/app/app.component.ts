import { Component, HostListener, OnInit } from '@angular/core';

import { TokenInterceptorService } from './services/token-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(event) {
      
      if (window.pageYOffset > 193) {
        let element = document.getElementById('sidebar');
        element.classList.add('affix');
      }else {
        let element = document.getElementById('sidebar');
          element.classList.remove('affix'); 
       }
    }
  title = 'GeoMarketing';

  

  
  startDate: "2019-04-01T23:00:00.000Z";
  endDate: "2019-04-16T22:59:00.000Z";
  constructor(public inter:TokenInterceptorService) { }

  ngOnInit(){
    
     
    
     
  }

  

  
}

import { Component, HostListener, OnInit } from '@angular/core';

import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'GeoMarketing';


  

  
  startDate: "2019-04-01T23:00:00.000Z";
  endDate: "2019-04-16T22:59:00.000Z";

  constructor( public auth:AuthorizationService) { }

  username="ecoti";
  password="ecoti500p";


  ngOnInit(){
    this.auth.login(this.username,this.password).subscribe(data => {
      console.log('successsss',data.token);
      localStorage.setItem('token',data.token)
     });

  }

  

  
}

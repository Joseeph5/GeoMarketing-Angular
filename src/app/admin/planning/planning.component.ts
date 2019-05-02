import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PlanningComponent implements OnInit {
  
  constructor(public mapService:MapServiceService,public auth:AuthorizationService) {
    
   }

   username="ecoti";
   password="ecoti500p";

  startDate: "2019-04-01T23:00:00.000Z";
  endDate: "2019-04-16T22:59:00.000Z";
  Authorization:any;
  ngOnInit() {

  
    
  }

  AuthMethod(){
    this.auth.login(this.username, this.password).subscribe(data => {
      
      localStorage.setItem('token',data.token)
      this.Authorization = localStorage.getItem('token');
      console.log('get token',this.Authorization)
     });;
  }

  GetPaths(){
    this.auth.getPaths(this.Authorization).subscribe(data => {
      console.log('sassssssssssss')
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { PlanningService } from 'src/app/services/planning.service';
import { Planning } from 'src/app/shared/Planning';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PlanningComponent implements OnInit {
  arr :number[][]=new Array();
  cars:any;
  constructor(public mapService:MapServiceService,public auth:AuthorizationService,
    public router:Router,
    private planningservice:PlanningService) {
    
   }

   username="ecoti";
   password="ecoti500p";

  startDate: "2019-04-01T23:00:00.000Z";
  endDate: "2019-04-16T22:59:00.000Z";
  Authorization:any;
 
 row:string[]=['1','2'];
  rows:Planning[];
  displayedColumns: string[] = ['idplanification'];
  ngOnInit() {
    return this.planningservice.getData().subscribe(data => {
      this.rows=data
      console.log(this.rows)
     });
  }

  AuthMethod(){
    this.auth.login(this.username, this.password).subscribe(data => {
      
      localStorage.setItem('token',data.token)
      this.Authorization = localStorage.getItem('token');
      console.log('get token',this.Authorization)
     });;
  }

  GetPaths(){
   
    this.router.navigateByUrl("/missions");
    // this.auth.getPaths().subscribe(data => {
    //   this.cars= data.coordinates
      
    // for(var i=0;i<this.cars.length;i++) {
    //   this.arr.push([this.cars[i].lat,this.cars[i].lng ])
      
    // }
    // console.log(this.arr );
     
    
      
     
      
    // });
  }
  
}

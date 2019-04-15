import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { TrackingService } from 'src/app/services/tracking.service';
import { Group } from 'src/app/shared/Group';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Driver } from 'selenium-webdriver/chrome';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class TrackingComponent implements OnInit {
  selectedValue:number;
  selectedValue2:number;
  selectedValue3:number;

  groups:Group[];
  cars:Group[];
  drivers:Driver[];
  PoiData:Group[];
  
  constructor(public mapService:MapServiceService,public trackService:TrackingService) {
    console.log(this.selectedValue);
   }

  ngOnInit() {
    this.mapService.InitMap();
    
    this.trackService.getGroupId().subscribe(data => {
      this.groups=data
      console.log(this.groups)
     });


    

    
    
  }

  getCars(){
    console.log(this.selectedValue);
    this.trackService.getcarsId(this.selectedValue).subscribe(data => {
      this.cars=data
      console.log(this.cars)
     });;
  }

  getDrivers(){
    console.log(this.selectedValue2);

    this.trackService.getDriversId(this.selectedValue2).subscribe(data => {
      this.drivers=data
      console.log(this.drivers)
     });
  }

  test(){
    console.log(this.selectedValue3);
  }

  search(){
    this.trackService.getPoiData().subscribe(data => {
      this.PoiData=data
      this.PoiData.forEach(function (value) {
        console.log(value.name);
      });
     });
     
  }
}

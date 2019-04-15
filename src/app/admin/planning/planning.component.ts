import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PlanningComponent implements OnInit {
  
  constructor(public mapService:MapServiceService,private _formBuilder: FormBuilder) {
    
   }


  ngOnInit() {
    
  }
  
}

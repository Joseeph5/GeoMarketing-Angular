import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PlanningComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  constructor(public mapService:MapServiceService,private _formBuilder: FormBuilder) {
    
   }


  ngOnInit() {
    this.mapService.InitMap();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  
}

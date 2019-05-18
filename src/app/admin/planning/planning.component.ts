import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { PlanningService } from 'src/app/services/planning.service';
import { Planning } from 'src/app/shared/Planning';
import { MatDialog } from '@angular/material';
import { AddPlanningComponent } from '../add-planning/add-planning.component';

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
  username="ecoti";
  password="ecoti500p";

  startDate: "2019-04-01T23:00:00.000Z";
  endDate: "2019-04-16T22:59:00.000Z";
  Authorization:any;

 rows:Planning[];
 displayedColumns: string[] = ['idplanification'];
  constructor(public mapService:MapServiceService,public auth:AuthorizationService,
    public router:Router,public dialog: MatDialog,
    private planningservice:PlanningService) {
    
   }

  
  ngOnInit() {
    // return this.planningservice.getData().subscribe(data => {
    //   this.rows=data
    //   console.log(this.rows)
    //  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlanningComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }
  
}

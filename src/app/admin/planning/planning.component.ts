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
import { DialogService } from 'src/app/services/dialog.service';
import { ToastrService } from 'ngx-toastr';


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
 

  planningPoiList:any[] =new Array();
  test:any[] =new Array();
  row:string[]=['1','2'];
  rows:Planning[];
  editing = {};
  poiSelected:any;
  pois :any[]=new Array();
  displayedColumns: string[] = ['idplanification'];

  constructor(public router:Router,public dialog: MatDialog,
    private planningService:PlanningService,public dialogServer:DialogService,private toastr: ToastrService) {
    
   }

  ngOnInit() {
   this.getPoiMission();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlanningComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }
  

  getPoiMission(){
    return this.planningService.getData().subscribe(data => {
    this.rows=data
    for (var i=0; i<this.rows.length; i++) {
      
      this.planningPoiList.push([this.rows[i].poi]);
      
     }
    console.log("Listtttttttt",this.planningPoiList)
    });
  } 
  
  delete(id:any){
    this.dialogServer.openDialogConfirm('êtes-vous sûr de supprimer...')
    .afterClosed().subscribe(res =>{
      console.log("iddd",id)
      if(res){
        this.planningService.delete(id).subscribe(()=>{
          this.toastr.success('Supprimé avec succès');
        
          
        });
        
      }
    });
    
  }
  
}

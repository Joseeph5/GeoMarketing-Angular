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
import { FormControl} from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { TrackingService } from 'src/app/services/tracking.service';
import { Mission } from 'src/app/shared/Mission';
import { MissionServiceService } from 'src/app/services/mission-service.service';

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
 
  test2:any=[1,2,3];
  planningPoiList:any[] =new Array();
  test:any[] =new Array();
  row:string[]=['1','2'];
  rows:Planning[];
  editing = {};
  poiSelected:any;
  pois :any[]=new Array();
  toppings = new FormControl();
  driverSelected :string;
  carsSelected :string;

  poiList:any[] ;
  dirverList:any;
  carsList:any;
  mission= new Mission;
  constructor(public router:Router,public dialog: MatDialog,private apiService:ApiServiceService,
    public vehiculeService:VehiculeService,public missionservice:MissionServiceService
    ,public trackService:TrackingService,private planningService:PlanningService,
    public dialogServer:DialogService,private toastr: ToastrService) {
    
   }

  ngOnInit() {
   this.getPoiPlanning();
   this.getDrivers();
    this.getCars();
    this.getPoi();
  }
  getDrivers(){
    return this.apiService.getData().subscribe(data => {
      this.dirverList=data
      console.log('driiiiiiver',this.dirverList)
     
     });
  }
  getCars(){
    return this.vehiculeService.getData().subscribe(data => {
      this.carsList=data
       
     
     });
  }
  getPoi(){
    this.trackService.getPoiData().subscribe(data=>{
      this.poiList=data
      console.log('sssssssssss',this.poiList);
       
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlanningComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }
  addMission(){

    this.mission.pois=this.toppings.value;
      console.log('sssssssssss',this.mission);

    this.missionservice.addMission(this.mission).subscribe(()=>{
          console.log('succès',this.mission)
          this.toastr.success('Ajouter avec succès');
          });
         
       }

  getPoiPlanning(){
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

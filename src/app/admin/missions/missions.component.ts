import { Component, OnInit } from '@angular/core';

import { Mission } from 'src/app/shared/Mission';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFormComponent } from '../add-form/add-form.component';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/services/dialog.service';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { VehiculeService } from 'src/app/services/vehicule.service';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  
  editing = {}; 
  
  rows:Mission[];
  drivers:any;

  cars:any;
  carselected:any;
  selected="ssssssssss";
  constructor(private missionservice:MissionServiceService,public dialog: MatDialog,
    public dialogServer:DialogService,private apiService:ApiServiceService,public vehiculeService:VehiculeService,
   private toastr: ToastrService,public router: Router){
   
   
  } 

  ngOnInit(){
    this.getDrivers();
    this.getCars();
   return this.missionservice.getData().subscribe(data => {
     this.rows=data
     console.log(this.rows)
    });
    
  }

  getDrivers(){
    return this.apiService.getData().subscribe(data => {
      this.drivers=data
      console.log(this.drivers)
     });
  }

  

  getCars(){
    return this.vehiculeService.getData().subscribe(data => {
      this.cars=data
      console.log(this.cars)
     });
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
  
    console.log('UPDATED!', this.rows[rowIndex][cell]);

    console.log('id',this.rows[rowIndex].idmission);
    console.log('mission',this.rows[rowIndex]);

   this.missionservice.updateMission(this.rows[rowIndex].idmission,this.rows[rowIndex]).subscribe(()=>
   console.log('success'));;

    
  
  }
  delete(id:any){
    this.dialogServer.openDialogConfirm('êtes-vous sûr de supprimer...')
    .afterClosed().subscribe(res =>{
      console.log("iddd",id)
      if(res){
       // this.missionservice.delete(id).subscribe(()=>{
          this.toastr.success('Supprimé avec succès');
         
          
       // });
        
      }
    });
    
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }

  navigateToReportion(id:any){

    
    console.log(id);
    this.router.navigateByUrl('/reporting/'+id);
  }

  navigateToSuivi(id:any){
    this.router.navigateByUrl('/suivi/'+id);
  }
  
}

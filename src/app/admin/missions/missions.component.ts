import { Component, OnInit } from '@angular/core';

import { Mission } from 'src/app/shared/Mission';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddFormComponent } from '../add-form/add-form.component';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/services/dialog.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  
  editing = {};
  
  rows:Mission[];
  

  constructor(private missionservice:MissionServiceService,public dialog: MatDialog,
    public dialogServer:DialogService,
   private toastr: ToastrService,public router: Router){
   
   
  } 

  ngOnInit(){
   return this.missionservice.getData().subscribe(data => {
     this.rows=data
     console.log(this.rows)
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
      if(res){
        this.missionservice.delete(id).subscribe(()=>{
          this.toastr.success('Supprimé avec succès');
          this.router.navigateByUrl("/missions");
          
        });
        
      }
    });
    
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '1000px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }

  navigateToReportion(id:any){

    
    console.log(id);
    this.router.navigateByUrl('/reporting/'+id);
  }
  
}

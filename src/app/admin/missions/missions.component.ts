import { Component, OnInit } from '@angular/core';

import { Mission } from 'src/app/shared/Mission';
import { MissionServiceService } from 'src/app/services/mission-service.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  
  editing = {};
  
  rows:Mission[];
  

  constructor(private missionservice:MissionServiceService){
   
   
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
    //this.rows = [...this.rows];

    
    

   //this.user[rowIndex].att1 = this.rows[rowIndex][cell];
   console.log('UPDATED!', this.rows[rowIndex][cell]);

    
   console.log('id',this.rows[rowIndex].idmission);
   console.log('mission',this.rows[rowIndex]);

   this.missionservice.updateMission(this.rows[rowIndex].idmission,this.rows[rowIndex]).subscribe(()=>
   console.log('success'));;

    
  
  }
  delete(id:any){
    
    this.missionservice.delete(id).subscribe(()=>
      console.log('delete '+id));
  }

  
}

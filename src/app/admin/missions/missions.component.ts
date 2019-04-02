import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  
  editing = {};
  
  rows:User[];
  

  constructor(private apiService:ApiServiceService){
   
   
  }

  ngOnInit(){
   return this.apiService.getData().subscribe(data => {
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

    
   console.log('id',this.rows[rowIndex]);
   console.log('mission',this.rows[rowIndex]);

   this.apiService.updateMission(this.rows[rowIndex],this.rows[rowIndex]).subscribe(()=>
   console.log('success'));;

    
  
}

  
}

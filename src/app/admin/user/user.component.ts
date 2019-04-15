import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Driver } from 'src/app/shared/Driver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editing = {};
  
  row:any[]= [
    {driver_id : "add id", cin :'add cin', email : 'add email',first_name : 'add name', 
    last_name : "add last name ", telephone :' add telephone', blood_group : 'add blood'}
  
      ];
  rows:Driver[];
  
  
  constructor(private apiService:ApiServiceService){}

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

    
   console.log('id',this.rows[rowIndex].driver_id);
   console.log('driver',this.rows[rowIndex]); 

   this.apiService.updateMission(this.rows[rowIndex].driver_id,this.rows[rowIndex]).subscribe(()=>
   console.log('success'));;

  }
  

  delete(id:any){
    
    this.apiService.delete(id).subscribe(()=>
      console.log('delete '+id));
  }
}

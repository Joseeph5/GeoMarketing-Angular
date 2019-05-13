import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Mission } from 'src/app/shared/Mission';
import { FormControl} from '@angular/forms';
import { TrackingService } from 'src/app/services/tracking.service';

import { Group } from 'src/app/shared/Group';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  
  mission= new Mission;

  // date_deb:any;    
  // date_fin:any;                 
  // id_driver:number ;
  // id_vehicule:number;
  // titleAlert:string = 'This field is required';

  toppings = new FormControl();
  test:any;
  arr:any[] ;
  toppingList :number[]=new Array();

  constructor(private fb: FormBuilder,public missionservice:MissionServiceService,
    public trackService:TrackingService) {
    
  
  }

  

  ngOnInit() {
    this.trackService.getPoiData().subscribe(data=>{
      this.arr=data
      
      for(var i=0;i<this.arr.length;i++) {
        this.toppingList.push(this.arr[i].name)
        
      } 
    });
  }

  addMission(){
     // console.log('sssssssssss',this.toppings.value);

      this.missionservice.addMission(this.mission).subscribe(()=>
      console.log('sssssssssss',this.mission));

      
    }
}



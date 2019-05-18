import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Mission } from 'src/app/shared/Mission';
import { FormControl} from '@angular/forms';
import { TrackingService } from 'src/app/services/tracking.service';

import { Group } from 'src/app/shared/Group';
import { DialogService } from 'src/app/services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  
  mission= new Mission;

  toppings = new FormControl();
  driverSelected :string;
  carsSelected :string;
  test:any;
  arr:any[] ;
  dirverList:any;
  carsList:any;
  toppingPoi :number[]=new Array();
  toppingDrivers :string[]=new Array();
  toppingCars :String[]=new Array();

  constructor(private fb: FormBuilder,public missionservice:MissionServiceService,private toastr: ToastrService,
    public trackService:TrackingService,public dialogServer:DialogService,private apiService:ApiServiceService,
    public vehiculeService:VehiculeService) {
    
  
  }

  

  ngOnInit() {
    this.getDrivers();
    this.getCars();
    this.getPoi();
  }
  getDrivers(){
    return this.apiService.getData().subscribe(data => {
      this.dirverList=data
      for(var i=0;i<this.dirverList.length;i++) {
        this.toppingDrivers.push(this.dirverList[i].first_name+" "+this.dirverList[i].last_name)
        
      } 
     
     });
  }
  getCars(){
    return this.vehiculeService.getData().subscribe(data => {
      this.carsList=data
      for(var i=0;i<this.carsList.length;i++) {
        this.toppingCars.push(this.carsList[i].mark+" "+this.carsList[i].matricule)
        
      } 
     
     });
  }
  getPoi(){
    this.trackService.getPoiData().subscribe(data=>{
      this.arr=data
      
      for(var i=0;i<this.arr.length;i++) {
        this.toppingPoi.push(this.arr[i].name)
        
      } 
    });
  }

  addMission(){

    console.log('driiiiiiver',this.driverSelected)
    console.log('carrrrrrrrrrrrrrrs',this.carsSelected)
    console.log('poooooooi',this.toppings.value)
    //  this.mission.pois=this.toppings.value;

    //   this.missionservice.addMission(this.mission).subscribe(()=>{
    //       console.log('sssssssssss',this.mission)
    //       this.toastr.success('Ajouter avec succès');
    //       });
         
       }
}



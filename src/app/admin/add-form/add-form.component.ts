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
  poiList:any[] ;
  dirverList:any;
  carsList:any;
  


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

  addMission(){

    this.mission.pois=this.toppings.value;
      console.log('sssssssssss',this.mission);

    // this.missionservice.addMission(this.mission).subscribe(()=>{
    //       console.log('succès',this.mission)
    //       this.toastr.success('Ajouter avec succès');
    //       });
         
       }
}



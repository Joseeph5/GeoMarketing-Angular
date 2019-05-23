import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Driver } from 'src/app/shared/Driver';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Mission } from 'src/app/shared/Mission';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  drivers:any;
  missions:any;
  cars:any;
  constructor(private apiService:ApiServiceService,public vehiculeService:VehiculeService,private missionservice:MissionServiceService) { }

  ngOnInit() {
    this.getDrivers();
    this.getCars();
    this.getMissions();
  }

  getDrivers(){
    return this.apiService.getData().subscribe(data => {
      this.drivers=data.length
      console.log(this.drivers)
     });
  }

  

  getCars(){
    return this.vehiculeService.getData().subscribe(data => {
      this.cars=data.length
      console.log(this.cars)
     });
  }
  getMissions(){
    return this.missionservice.getData().subscribe(data => {
      this.missions=data.length
      console.log(this.missions)
     });
  }
}

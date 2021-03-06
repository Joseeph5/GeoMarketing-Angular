import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Driver } from 'src/app/shared/Driver';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Mission } from 'src/app/shared/Mission';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { GroupService } from 'src/app/services/group.service';
import { SuiviService } from 'src/app/services/suivi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  drivers:any;
  missions:any;
  missionsLength:any;
  cars:any;
  groups:any;
  selected:any;
  ClientMission:any;
  ClientVisite:any;
  constructor(private apiService:ApiServiceService,public vehiculeService:VehiculeService,
    private missionservice:MissionServiceService,public groupService:GroupService,public suiviService:SuiviService) { }

  ngOnInit() {
    this.getDrivers();
    this.getCars();
    this.getMissions();
    this.getGroups();
  }

  getStat(){
    console.log(this.selected);
    this.getClientMission();
    return this.suiviService.getClientVisite(this.selected).subscribe(data => {
      this.ClientVisite=data.length
      console.log(this.ClientVisite)
     });

     
  }
  getClientMission(){
    return this.suiviService.getClientMission(this.selected).subscribe(data => {
      this.ClientMission=data.length
      console.log(this.ClientMission)
     });
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
      this.missions=data
      this.missionsLength= data.length
      console.log(this.missions)
     });
  }

  getGroups(){
    return this.groupService.getData().subscribe(data => {
      this.groups=data.length
      console.log(this.groups)
     });
  }
}

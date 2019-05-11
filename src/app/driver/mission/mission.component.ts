import { Component, OnInit } from '@angular/core';
import { MissionDriverService } from 'src/app/services/mission-driver.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Mission } from 'src/app/shared/Mission';

import { MapServiceService } from 'src/app/services/map-service.service';
import '../../../../node_modules/leaflet-play/dist/LeafletPlayback.js'
import { ActivatedRoute } from '@angular/router';

import { ReportingFormComponent } from '../add-form/add-form.component';
import { PoiService } from 'src/app/services/poi.service';

export interface Mission {
  idmission: number,
  idvehicule: number;
  datedeb: number;
  datefin: number;
  mark: any;
  matricule: any;
}
export interface Poi {
  idpoi: number;
  adress: any;
  adresse: any;
}
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {


   
  rows:Mission[];
  poi:any;
  driverId:any;
  
  constructor(private missionservice: MissionDriverService, public dialog: MatDialog, public poiservice: PoiService,
   public route:ActivatedRoute,public mapService:MapServiceService) {
    
  }
 
  displayedColumns: string[] = ['idmission', 'idvehicule', 'datedeb', 'datefin', 'mark', 'matricule'];

  
  displayedColumn: string[] = ['idpoi', 'adress', 'adresse'];


  ngOnInit() {


   
    

    this.getMissionData();
    this.getPoiMission();
    this.mapInit();
  }

  getMissionData(){
    this.route.params.subscribe(params => {
      this.driverId=params['id']
      this.missionservice.getData(this.driverId).subscribe(data=>{
        this.rows=data
      })
    });
   
  }

  mapInit(){
    this.mapService.InitMap(this.driverId);
    
  }

  getPoiMission(){
    return this.missionservice.getPoiData(this.driverId).subscribe(data => {
      this.poi=data
      console.log("ssssssssssssss",this.poi)
    });
  } 

    
  
  openDialog(name:string): void {
    const dialogRef = this.dialog.open(ReportingFormComponent, {
      width: '1000px',
      data: {name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  

}

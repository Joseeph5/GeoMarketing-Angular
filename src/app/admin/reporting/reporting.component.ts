import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/services/reporting.service';
import { ActivatedRoute } from '@angular/router';
import { MissionDriverService } from 'src/app/services/mission-driver.service';




@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})

export class ReportingComponent implements OnInit {
  missionId:any;
  pois:any;
  rows:any;
  test:any=[1,2,3];
  displayedColumns: string[] = ['idrapport' , 'facing' ];

  constructor(public reportingservice:ReportingService,public route:ActivatedRoute,
    private missionservice: MissionDriverService) { }
  
  ngOnInit() {

    this.getReportingData();
    this.getPoiMission();
  }

  getReportingData(){
    this.route.params.subscribe(params => {
      this.missionId=params['id']
      this.reportingservice.getData(this.missionId).subscribe(data=>{
        this.rows=data
        console.log('sssssssss',this.rows)
      })
    });
   
  }

  getPoiMission(){
    return this.missionservice.getPoiData(this.missionId).subscribe(data => {
    this.pois=data
    console.log("ssssssssssssss",this.pois)
  });
} 

}

import { Component, OnInit } from '@angular/core';
import { MapServiceService } from 'src/app/services/map-service.service';
import { STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { TrackingService } from 'src/app/services/tracking.service';
import { Group } from 'src/app/shared/Group';
import { Driver } from 'selenium-webdriver/chrome';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { timestamp } from 'rxjs/operators';
//import '../../../../node_modules/leaflet-play/dist/LeafletPlayback.js'
declare let L;
@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class TrackingComponent implements OnInit {
  selectedValue:number;
  selectedValue2:number;
  selectedValue3:number;
  

  groups:Group[];
  cars:Group[];
  device:any;
  PoiData:Group[];
  arr :any[][]=new Array();
  arr2:any[]=new Array();
  trames :any[]=new Array();
  paths:any;
  path:any;
  startDate:any;
  endDate:any;
  beginPathTime:any;
  endPathTime:any;

  constructor(public mapService:MapServiceService,public trackService:TrackingService,
    public auth:AuthorizationService) {
    console.log(this.selectedValue);
   }

  ngOnInit() {
    
    this.mapService.InitMap();
    this.getGroup();
    
  }

  getGroup(){
    this.trackService.getGroupId().subscribe(data => {
      this.groups=data
      console.log(this.groups)
     });
  }

  getCars(){
    console.log(this.selectedValue);
    this.trackService.getcarsId(this.selectedValue).subscribe(data => {
      this.cars=data
      console.log(this.cars)
     });;
  }

  getDeviceId(){
    console.log(this.selectedValue2);

    this.trackService.getDeviceId(this.selectedValue2).subscribe(data => {
      this.device=data[0].id_device
      console.log(this.device)
     });
  }

  drawPath(){
    
    var index = this.trames.indexOf(this.selectedValue3);
    this.auth.getDetails(this.device, this.paths[index].beginPathTime,this.paths[index].endPathTime).subscribe(data => {
      
      this.path= data.coordinates
      for (var i=0; i<this.path.length; i++) {
        this.arr.push([this.path[i].lat,this.path[i].lng]);
        this.arr2.push([this.path[i].date]);
       }
       this.mapService.DrawPath(this.arr,this.arr2,this.path[0].lat,this.path[0].lng);
       console.log('draaaaaaaaaaaaaaaaaaaaw',this.path)
      });
    
       
  }

  getPaths(){
    this.auth.getPath(this.device,this.startDate,this.endDate).subscribe(data => {
      this.paths=data
      for (var i=0; i<this.paths.length; i++) {
        this.trames.push(this.paths[i].nextStopDuration);
        
       }
       console.log("starr",this.startDate,this.endDate)
       console.log("traaaaaaaams",this.paths)
    });
  }
  
 getStopDuration(){
  console.log("dateeeeeee",this.selectedValue3)
 }
}

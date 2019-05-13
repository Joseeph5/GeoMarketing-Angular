import { Injectable } from '@angular/core';
import { TrackingService } from './tracking.service';
import { Group } from '../shared/Group';
import { MissionDriverService } from './mission-driver.service';
import { AuthorizationService } from './authorization.service';
import { ThrowStmt } from '@angular/compiler';
declare let L;

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  PoiData:Group[];
  arr :any[][]=new Array();
  arr2:any[]=new Array();
  cars:any;
  constructor(public trackService:TrackingService,private missionservice:MissionDriverService,
    public auth:AuthorizationService) { }
  
  InitMap(id) {
    const map = L.map('map').setView([36.723, 10.747], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    this.missionservice.getPoiData(id).subscribe(data => {
      this.PoiData=data
      console.log('zzzzzzzzzzz',this.PoiData)

      this.PoiData.forEach(function (value) {

        var marker = L.marker([value.latitude, value.longitude]).addTo(map);
        marker.bindPopup(value.name.bold()+"</br>"+value.address);
        
        });
     });

    

    

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
  }

  mapInit(){
    
    const map = L.map('map').setView([36.723, 10.747], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    this.auth.getPaths().subscribe(data => {
      this.cars= data.coordinates
      
    for(var i=0;i<8;i++) {
      this.arr.push([this.cars[i].lat,this.cars[i].lng ])
      this.arr2.push([this.cars[i].date])
    }
    console.log('ssssss',this.arr );
    console.log('aaaaaa',this.arr2 );
  });
    var demoTracks={
      "type": "Feature",
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [
          [ 36.83442166666667, 10.230651666666667 ]
​​
,[ 36.83438666666667, 10.230561666666667 ]
​​
,[ 36.83432833333333, 10.23039 ]
​​
, [ 36.834320000000005, 10.230353333333333 ]
​​
, [ 36.834291666666665, 10.230286666666666 ]
​​
,[ 36.83430333333333, 10.230258333333333 ]
​​
, [ 36.83433333333333, 10.230179999999999 ]
​​
, [ 36.835118333333334, 10.229841666666665 ]
        ]
      },
      "properties": {
        "path_options" : { "color" : "red" },
        "time": [1369786338000,
          1369786340000,
          1369786342000,
          1369786343000,
          1369786345000,
          1369786346000,
          1369786348000,
    1369786349000
          
        
          
        ]
      }
    }
   
    // Playback options
    var playbackOptions = {
      playControl: true, 
      dateControl: true,
      sliderControl: true
         
    };
      
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions); 
    
  }
  
}

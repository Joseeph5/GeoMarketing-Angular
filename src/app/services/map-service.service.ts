import { Injectable } from '@angular/core';
import { TrackingService } from './tracking.service';
import { Group } from '../shared/Group';
import { MissionDriverService } from './mission-driver.service';
import { AuthorizationService } from './authorization.service';
declare let L;
import '../../../node_modules/leaflet-play/dist/LeafletPlayback.js'
@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
// Playback options
 playbackOptions = {
  playControl: true,
  dateControl: true,
  sliderControl: true     
};

  PoiData:Group[];
  arr :any[][]=new Array();
  arr2:any[]=new Array();
  path:any;
  map : any;
  constructor(public trackService:TrackingService,private missionservice:MissionDriverService,
    public auth:AuthorizationService) { }

    InitMap(){
    
      this.map= L.map('map').setView([36.723, 10.747], 10);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      var popup = L.popup();

       function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(this.map);
    }

    this.map.on('click', onMapClick);
    }


    DrawPath(path:any[][],time:any[],lat:any,lng:any){

      var polylineOptions = {
        color: 'blue',
        weight: 5,
        opacity: 0.9
      };
     
      var line = L.polyline(path,polylineOptions).addTo(this.map);
      var greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
        
      });

     
    // var marker = L.marker([lat, lng],{icon: greenIcon}).addTo(this.map);

    //   var demoTracks={
    //     "type": "Feature",
    //     "geometry": {
    //       "type": "MultiPoint",
    //       "coordinates": path
    //     },
    //     "properties": {
    //       "time": time
    //     }
    //   }
    
    // // Initialize playback
    // var playback = new L.Playback(this.map, demoTracks, null, this.playbackOptions);

        
    }
    
    search(arr,arr2){
      console.log('ssssss',arr );
      console.log('aaaaaa',arr2);
      var demoTracks={
      "type": "Feature",
      "geometry": {
        "type": "MultiPoint",
        "coordinates": arr
      },
      "properties": {
        "time": arr2
      }
    }
  // Playback options
  var playbackOptions = {
    playControl: true,
    dateControl: true,
    sliderControl: true     
  };
  // Initialize playback
  var playback = new L.Playback(this.map, demoTracks, null, playbackOptions);
     
  }





    driverMap(id:any) {
   
    
     this.missionservice.getPoiData(id).subscribe(data => {
      this.PoiData=data
      
      console.log('sssssss',this.PoiData)
      this.PoiData.forEach(function (value) {

        var marker = L.marker([value.latitude, value.longitude]).addTo(this.map);
        marker.bindPopup(value.address.bold()+"</br>"+value.address);
        
        });

        
     });

    

    

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(this.map);
    }

    this.map.on('click', onMapClick);
  }

 
  
}

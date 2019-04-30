import { Injectable } from '@angular/core';
import { TrackingService } from './tracking.service';
import { Group } from '../shared/Group';
declare let L;

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  PoiData:Group[];

  constructor(public trackService:TrackingService) { }
  
  InitMap() {
    const map = L.map('map').setView([36.723, 10.747], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var demoTracks={
      "type": "Feature",
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [[
          -123.77252789,
          44.37857221
        ],
        [
          -123.77317087,
          44.37864694
        ],
        [
          -123.77383407,
          44.37875853
        ],
        [
          -123.7744676,
          44.37886305
        ]
]
      },
      "properties": {
        "time": [1369786338000,
          1369786340000,
          1369786342000,
          1369786344000
        
          
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

    this.trackService.getPoiData().subscribe(data => {
      this.PoiData=data
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


  
}

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

    this.trackService.getPoiData().subscribe(data => {
      this.PoiData=data
      this.PoiData.forEach(function (value) {
        var marker = L.marker([value.latitude, value.longitude]).addTo(map);
        marker.bindPopup(value.name.bold()+"</br>"+value.address);
      });
     });
    const map = L.map('map').setView([36.723, 10.747], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

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

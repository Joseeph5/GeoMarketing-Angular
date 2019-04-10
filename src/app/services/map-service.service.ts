import { Injectable } from '@angular/core';
declare let L;

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor() { }

  InitMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
}

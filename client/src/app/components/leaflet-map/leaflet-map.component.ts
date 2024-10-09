// leaflet-map.component.ts

import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  @Input() coordenadas: number[] = [0, 0]; // Coordenadas por defecto

  map: L.Map | undefined;

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    const latLng: L.LatLngExpression = [this.coordenadas[0], this.coordenadas[1]];
    this.map = L.map('leaflet-map').setView(latLng, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker(latLng).addTo(this.map);
  }
}

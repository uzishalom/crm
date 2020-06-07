import { Component, Input, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface GeocodeResult {
  status?: string;
  results: Array<{
    formatted_address: string;
    geometry: { location: { lat: number; lng: number } };
  }>;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewChecked {
  @Input('address') requestedAddress: string = '';
  lat: number = 0;
  lng: number = 0;
  zoom: number = 15;
  addressToShow: string = '';
  mapLoaded = false;

  constructor(private http: HttpClient) {}

  ngAfterViewChecked(): void {
    if (!this.mapLoaded) {
      this.showMap();
    }
  }

  showMap() {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.requestedAddress}&key=${environment.googleMapsApiKey}`;

    this.http
      .get<GeocodeResult>(url)
      .toPromise()
      .then((data) => {
        this.addressToShow = data.results[0].formatted_address;
        this.lat = data.results[0].geometry.location.lat;
        this.lng = data.results[0].geometry.location.lng;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.mapLoaded = true;
      });
  }
}

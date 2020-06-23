import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnDestroy {

  currLatitude: number;
  currLongitude: number;
  weather: Weather;
  weatherSubscription: Subscription;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.currLatitude = position.coords.latitude;
        this.currLongitude = position.coords.longitude;
        this.weatherSubscription = this.weatherService.getWeatherByCoords(this.currLatitude, this.currLongitude).subscribe(data => {
          this.weather = data;
        });
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }

}

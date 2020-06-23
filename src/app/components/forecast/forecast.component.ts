import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Forecast } from 'src/app/models/forecast';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  @Input() lat: number;
  @Input() lon: number;

  forecast: Forecast;
  dates: Array<Date> = [];

  forecastSubscription: Subscription;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.forecastSubscription = this.weatherService.getForecastByCoords(this.lat, this.lon).subscribe(data => {
      this.forecast = data;
    })
    
    const date = new Date();

    for(let i=0; i<8; i++){
      this.dates.push(new Date(date.getTime() + (i * 24 * 60 * 60 * 1000)));
    }

  }

  ngOnDestroy() {
    this.forecastSubscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  key: string = environment.apiKey;

  constructor(private http:HttpClient) { }

  getWeatherByCity(city: string):Observable<Weather> {
    return this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${this.key}&units=metric`)
  }

  getWeatherByCoords(lat: number, lon: number) {
    return this.http.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`)
  }

  getWeatherIcon(icon: string) {
    return this.http.get<Weather>(`http://openweathermap.org/img/wn/${icon}`)
  }

}
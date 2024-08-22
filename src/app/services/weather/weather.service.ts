import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = "2758ea4628f21df46333c07f984c56a3";
  // Yeah I know this key should not be here, but for now it is okay.

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  }
}

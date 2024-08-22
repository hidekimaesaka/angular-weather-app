import { Component, OnInit } from "@angular/core";
import { WeatherData } from "src/app/models/interfaces/WeatherData";
import { WeatherService } from "src/app/services/weather/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  initialCityName: string = "São Paulo";
  weatherData!: WeatherData;

  ngOnInit(): void {
    this.getWeather(this.initialCityName);
  }

  getWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

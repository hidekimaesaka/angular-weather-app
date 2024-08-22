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
  rain: boolean = false;

  ngOnInit(): void {
    this.getWeather(this.initialCityName);
  }

  getWeather(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        response.rain? this.rain = true: this.rain = false;
        console.log(this.rain);
        response && (this.weatherData = response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    this.getWeather(this.initialCityName);
    this.initialCityName = "";
  }

}

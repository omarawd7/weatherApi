import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './Services/weather.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private weatherService: WeatherService) {

    }

    cityName: string = 'Cairo';
    weatherobj?: WeatherData;

    ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
        next: (response) => {
        this.weatherobj = response;
        console.log(response);
        }
    });
    }
}

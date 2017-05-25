import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather:any;
  loc: string = 'Brighton'

  constructor(weatherService:WeatherService){
    weatherService.weather.subscribe((data) => this.weather = data);
    weatherService.search(this.loc);
  }
  title = 'app works!';
}

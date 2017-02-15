import {Component} from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
    selector: 'weather',
    template: `
      <pre>{{weather | json}}</pre>
    `
})
export class WeatherComponent {
  weather: any;
  constructor(public weatherService: WeatherService) {
    this.weatherService.get('london')
      .subscribe(data => {
        this.weather = data;
      });


  }
}

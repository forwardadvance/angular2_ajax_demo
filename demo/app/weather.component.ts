import {Component} from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
    selector: 'weather',
    template: `
      <input (input)="handleInput($event)" />{{loc}}
      <button (click)="handleSearch()">Go</button>
      <pre>{{weather | json}}</pre>
    `
})
export class WeatherComponent {
  weather: any;
  loc: string;

  constructor(public weatherService: WeatherService) {}

  handleInput(evt:any) {
    this.loc = evt.target.value;
  }

  handleSearch() {
    this.weatherService.get(this.loc)
      // .map((data) => data.weather[0].description)
      .subscribe(data => {
        this.weather = data;
      });
  }
}

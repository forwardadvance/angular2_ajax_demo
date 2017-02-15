import {Component} from '@angular/core';
import {WeatherComponent} from './weather.component';

@Component({
    selector: 'app',
    template: `
      <h1>Today's Weather</h1>
      <weather></weather>
    `
})
export class AppComponent {
  constructor() {
  }
}

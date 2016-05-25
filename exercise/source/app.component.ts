import {Component} from '@angular/core';
import {JSONP_PROVIDERS, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app',
  template: `
    <h1>AJAX App</h1>
    <div>{{weather}}</div>
  `,
  providers: [JSONP_PROVIDERS]
})
export class AppComponent {
  weather:any
  jsonp
  constructor(jsonp: Jsonp) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    var vm = this
    this.weather = 123
    this.jsonp = jsonp

  }
  getWeather() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    var vm = this
    this.jsonp.request(url)
      .map(res => res.json())
      .subscribe((weather) => {
        this.weather = weather;
        vm.weather = weather;
      })
  }
  ngOnInit() {
    this.getWeather()
  }
}

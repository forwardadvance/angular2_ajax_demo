import {Component} from '@angular/core';
import {JSONP_PROVIDERS, Jsonp} from '@angular/http';

@Component({
  selector: 'app',
  template: `
    <h1>Angular App</h1>
    {{weather}}
  `,
  providers: [JSONP_PROVIDERS]
})
export class AppComponent {
  weather:any
  constructor(jsonp: Jsonp) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3&callback=JSONP_CALLBACK"
    var vm = this
    jsonp.get(url)
      .subscribe((res) => {
        console.log(res);
        vm.weather = res.json();
      })
  }
}

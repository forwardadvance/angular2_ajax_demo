import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class WeatherService {
  constructor(public jsonp: Jsonp) {}

  get(location:string) {
    var url = [
      "http://api.openweathermap.org/data/2.5/weather?q=",
      location,
      "&APPID=57d36da6b8187a992393dc6a0f4c96c3",
      "&callback=JSONP_CALLBACK"].join('')

    return this.jsonp.get(url)
      .map((res) => res.json())

  }
}

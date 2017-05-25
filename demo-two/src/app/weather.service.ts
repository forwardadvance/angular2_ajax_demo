import { Injectable, EventEmitter } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  weather:EventEmitter<any> = new EventEmitter()

  constructor(public jsonp: Jsonp) {
    
   }
   search(loc:string) {
     var url = [
      "http://api.openweathermap.org/data/2.5/weather?q=",
      loc,
      "&APPID=57d36da6b8187a992393dc6a0f4c96c3",
      "&callback=JSONP_CALLBACK"].join('')

     let req = this.jsonp.get(url)
       .map((res) => res.json())
       .catch(this.handleError)

     req.subscribe((weather) => this.weather.emit(weather))
   }

   handleError() {
     console.log('error');

    return Observable.throw('error getting feed');
   }

}


// http://api.openweathermap.org/data/2.5/weather?q=london&APPID=57d36da6b8187a992393dc6a0f4c96c3

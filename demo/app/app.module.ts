import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule ],
  declarations: [ AppComponent, WeatherComponent ],
  bootstrap: [ AppComponent ],
  providers: [ WeatherService ]
})
export class AppModule { }

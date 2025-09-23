import { Component, signal } from '@angular/core';
import { Weatherdata } from './weatherdata/weatherdata';  
import { YesterdayWeather } from './yesterday-weather/yesterday-weather';
@Component({
  selector: 'app-root',
  imports: [Weatherdata,YesterdayWeather],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('Assignment2');
  protected readonly  myName = ('Shiva');
}

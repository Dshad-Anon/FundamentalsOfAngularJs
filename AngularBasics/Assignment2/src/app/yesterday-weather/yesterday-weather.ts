import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yesterday-weather',
  imports: [],
  templateUrl: './yesterday-weather.html',
  styleUrl: './yesterday-weather.css'
})
export class YesterdayWeather {
  @Input() data: string = ''; 
}

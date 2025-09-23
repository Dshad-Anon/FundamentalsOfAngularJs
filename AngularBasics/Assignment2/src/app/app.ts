import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weatherdata } from './weatherdata/weatherdata';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Weatherdata],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('Assignment2');
  protected readonly  myName = ('Shiva');
}

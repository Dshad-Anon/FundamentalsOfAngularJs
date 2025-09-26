import { Component, signal } from '@angular/core';
import { CountryList } from './country-list/country-list';

@Component({
  selector: 'app-root',
  imports: [CountryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment4');
}

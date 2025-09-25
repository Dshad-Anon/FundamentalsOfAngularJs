import { Component, signal } from '@angular/core';
import { RandomNumber } from './random-number/random-number';

@Component({
  selector: 'app-root',
  imports: [RandomNumber],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment1');
}

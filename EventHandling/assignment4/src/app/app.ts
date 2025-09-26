import { Component, signal } from '@angular/core';
import { Pipes } from './pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [Pipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment4');
}

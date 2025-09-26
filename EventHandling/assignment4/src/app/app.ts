import { Component, signal } from '@angular/core';
import { Pipes } from './pipes/pipes';
import { JsonPipe } from './json-pipe/json-pipe';

@Component({
  selector: 'app-root',
  imports: [Pipes,JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment4');
}

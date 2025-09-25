import { Component, signal } from '@angular/core';
import { Databinding } from './databinding/databinding';
@Component({
  selector: 'app-root',
  imports: [Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment7');
}

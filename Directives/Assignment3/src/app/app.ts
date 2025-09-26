import { Component, signal } from '@angular/core';
import { ImageToggle } from './image-toggle/image-toggle';

@Component({
  selector: 'app-root',
  imports: [ImageToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment3');
}

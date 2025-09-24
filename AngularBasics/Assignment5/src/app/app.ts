import { Component, signal } from '@angular/core';
import { ColorButton } from './color-button/color-button';


@Component({
  selector: 'app-root',
  imports: [ColorButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment5');
}

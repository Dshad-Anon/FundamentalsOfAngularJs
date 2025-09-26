import { Component, signal } from '@angular/core';
import { TextColor } from './text-color';
@Component({
  selector: 'app-root',
  imports: [TextColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Text Color Angular App';
}

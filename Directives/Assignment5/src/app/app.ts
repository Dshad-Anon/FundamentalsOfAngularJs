import { Component, signal } from '@angular/core';
import { SwitchView } from './switch-view/switch-view';

@Component({
  selector: 'app-root',
  imports: [SwitchView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment5');
}

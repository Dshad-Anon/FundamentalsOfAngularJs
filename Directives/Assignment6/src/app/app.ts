import { Component } from '@angular/core';
import { ChangeBgDirective } from './change-bg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ChangeBgDirective,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}

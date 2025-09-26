import { Component, signal } from '@angular/core';
import { Pipes } from './pipes/pipes';
import { JsonPipe } from './json-pipe/json-pipe';
import { FormsModule } from '@angular/forms';
import { StringTransformPipe } from './string-transform-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Pipes,JsonPipe,FormsModule,StringTransformPipe,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userInput: string = '';
  submittedValue: string = '';

  onSubmit() {
    this.submittedValue = this.userInput;
  }
}

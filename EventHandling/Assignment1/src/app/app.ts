import { Component, signal } from '@angular/core';
import { RandomNumber } from './random-number/random-number';
import { DivideResult } from './divide-result/divide-result';

@Component({
  selector: 'app-root',
  imports: [RandomNumber,DivideResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  finalResult: number = 0;
  handleResultGenerated(result :number){
    this.finalResult = result;
  }
}

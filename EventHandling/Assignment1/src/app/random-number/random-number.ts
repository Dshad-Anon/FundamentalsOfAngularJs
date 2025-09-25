import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-number',
  imports: [CommonModule],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css'
})
export class RandomNumber {
  randomNumber  = 0;
  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random()*100)+1;
  }
}

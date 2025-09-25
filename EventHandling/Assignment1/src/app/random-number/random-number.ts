import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-random-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css'
})
export class RandomNumber {
  result = 0;
  randomNumber = 0;
  inputNumber = 0;
  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random()*100)+ 1;
    this.result = this.randomNumber + this.inputNumber;
  }
}

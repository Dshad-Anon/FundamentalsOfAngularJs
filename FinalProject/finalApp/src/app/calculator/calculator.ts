import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  // Method for addition
  add() {
    this.result = this.num1 + this.num2;
  }

  // Method for subtraction
  subtract() {
    this.result = this.num1 - this.num2;
  }

  // Method for multiplication
  multiply() {
    this.result = this.num1 * this.num2;
  }

  // Method for division
  divide() {
    if (this.num2 !== 0) {
      this.result = this.num1 / this.num2;
    } else {
      alert("Cannot divide by zero!");
    }
  }
}

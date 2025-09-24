import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-color-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-button.html',
  styleUrl: './color-button.css'
})
export class ColorButton {
  isButtonOn = false;
  buttonMessage= '';

  onButtonClick(){
    this.isButtonOn = !this.isButtonOn;
    // this.buttonMessage = this.isButtonOn ? `BUTTON ON: ${this.isButtonOn}` : `BUTTON ON: ${this.isButtonOn}`;
  }

  get buttonColor(){
    return this.isButtonOn ? 'red': 'green';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.html',
  styleUrl: './color-button.css'
})
export class ColorButton {
  isButtonOn = false;
  buttonMessage= '';

  onButtonClick(){
    this.isButtonOn = !this.isButtonOn;
    this.buttonMessage = this.isButtonOn ? `BUTTON ON: ${this.isButtonOn}` : `BUTTON ON: ${this.isButtonOn}`;
  }

  get buttonColor(){
    return this.isButtonOn ? 'red': 'green';
  }
}

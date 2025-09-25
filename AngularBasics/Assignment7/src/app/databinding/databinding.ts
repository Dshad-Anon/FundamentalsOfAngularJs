import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  isButtonOn = false;
  inputText = '';

  onButtonClick(){
    this.isButtonOn = !this.isButtonOn;
  }

  get buttonColor(){
    return this.isButtonOn ? 'red': 'green';
  }

}

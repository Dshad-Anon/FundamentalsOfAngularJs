import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
   imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.css'
})
export class TextEditor {
  text: string = '';

  convertToUpper() {
    this.text = this.text.toUpperCase();
  }

  convertToLower() {
    this.text = this.text.toLowerCase();
  }

  clearText() {
    this.text = '';
  }
}

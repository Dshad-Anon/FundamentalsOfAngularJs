import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-toggle',
  templateUrl: './image-toggle.html',
  styleUrl: './image-toggle.css',
  standalone: true,
  imports: [CommonModule]
})
export class ImageToggle {
  showImage: boolean = false;

  toggleImage() {
    this.showImage = !this.showImage;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule,CommonModule,RouterOutlet,RouterModule],
  standalone: true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}

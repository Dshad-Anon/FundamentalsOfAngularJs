import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  today: Date = new Date();
  amount:number = 5365.78;
  percentVal: number = 0.111;
}

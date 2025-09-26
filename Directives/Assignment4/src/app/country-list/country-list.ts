import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  imports: [CommonModule],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-view',
  imports: [CommonModule],
  templateUrl: './switch-view.html',
  styleUrl: './switch-view.css'
})
export class SwitchView {
  selectedView: string = "default";
}

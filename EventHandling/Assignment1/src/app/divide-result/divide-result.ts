import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-divide-result',
  imports: [CommonModule, FormsModule],
  templateUrl: './divide-result.html',
  styleUrl: './divide-result.css'
})
export class DivideResult {
  @Input() baseResult:number = 0;
  divisor: number = 2;
  divisionResult: number = 0;

  onDivide(){
    if(this.baseResult !== 0 && this.baseResult !==null ){
      this.divisionResult = this.baseResult / this.divisor;
    }
  }
}

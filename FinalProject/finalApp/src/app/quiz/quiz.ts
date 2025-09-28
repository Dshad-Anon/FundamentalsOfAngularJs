import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Q {
  q: string;
  choices: string[];
  answer: number;
}
@Component({
  selector: 'app-quiz',
  imports: [CommonModule,FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
  questions: Q[] = [
{ q: 'Which directive is commonly used to handle form submissions? ', choices: ['ngSubmit','ngModel','ngFor','ngIf'], answer: 0 },
{ q: 'Which operator gives remainder in JS?', choices: ['%','/','*','^'], answer: 0 },
{ q: 'Event binding allows you to synchronize data between the component class and the view?', choices: ['True','False'], answer: 1 }
];


answers: (number | null)[] = [null, null, null];
submitted = false;
score = 0;
wrongIds: number[] = [];


select(i: number, j: number) { this.answers[i] = j; }


submit() {
this.submitted = true;
this.score = 0;
this.wrongIds = [];
 for (let i = 0; i < this.questions.length; i++) {
      if (this.answers[i] === this.questions[i].answer) {
        this.score++;
      } else {
        this.wrongIds.push(i);
      }
    }
  }

  reset() {
    this.answers = [null, null, null];
    this.submitted = false;
    this.score = 0;
    this.wrongIds = [];
  }
}


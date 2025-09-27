import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'calculator', component: Calculator },
  { path: 'text-editor', component: TextEditor },

];

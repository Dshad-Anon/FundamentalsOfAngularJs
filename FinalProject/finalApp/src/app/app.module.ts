import { Routes } from "@angular/router";
import { HomePage } from "./home-page/home-page";
import { TextEditor } from "./text-editor/text-editor";
import { Calculator } from "./calculator/calculator";


export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'calculator', component: Calculator },
  { path: 'text-editor', component: TextEditor },

];


export class AppModule { }



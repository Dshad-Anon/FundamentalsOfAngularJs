import { Routes } from "@angular/router";
import { Aboutme } from "../aboutme/aboutme";
import { Skills } from "../skills/skills";
import { Experience } from "./experience";
import { Home } from "../home/home";

export const routes: Routes = [
    {path: '',component: Home},
    { path: 'about', component: Aboutme },
    { path: 'skills', component: Skills },
    { path: 'experiences', component: Experience }
];
export class AppRoutingModule { }
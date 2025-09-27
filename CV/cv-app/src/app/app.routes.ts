import { Routes } from '@angular/router';
import { Skills } from './skills/skills';
import { Aboutme } from './aboutme/aboutme';
import { Experience } from './experience/experience';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '',component: Home},
    { path: 'about', component: Aboutme },
    { path: 'skills', component: Skills },
    { path: 'experiences', component: Experience }
];

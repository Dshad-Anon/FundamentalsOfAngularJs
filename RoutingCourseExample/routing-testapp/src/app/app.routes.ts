import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Weather } from './weather/weather';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: '', component: Home, pathMatch: 'full'},
    {path: 'weather', component: Weather},
    {path: 'contact', component: Contact}
];

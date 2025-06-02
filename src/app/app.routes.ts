import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitationsComponent } from './habitations/habitations.component';
import { GaragesComponent } from './garages/garages.component';
import { EntrepotsComponent } from './entrepots/entrepots.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'habitations', component: HabitationsComponent},
    { path: 'garages', component: GaragesComponent},
    { path: 'entrepots', component: EntrepotsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
  
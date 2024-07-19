import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentsComponent } from './pages/new-moments/new-moments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'compartilhar-moments', component: NewMomentsComponent }
];

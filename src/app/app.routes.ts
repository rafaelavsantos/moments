import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewMomentsComponent } from './pages/new-moments/new-moments.component';
import { MomentComponent } from './pages/moment/moment.component';
import { EditMomentComponent } from './pages/edit-moment/edit-moment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'compartilhar-moments', component: NewMomentsComponent },
  { path: 'moments/edit/:id', component: EditMomentComponent },
  { path: 'moments/:id', component: MomentComponent }
];

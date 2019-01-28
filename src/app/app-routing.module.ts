import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComparatorComponent } from './components/comparator/comparator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'compare', component: ComparatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

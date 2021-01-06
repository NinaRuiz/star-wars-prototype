import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StarshipListPageComponent} from './pages/starship-list-page/starship-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }

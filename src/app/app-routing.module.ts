import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ToolbarLayoutComponent} from './layouts/toolbar-layout/toolbar-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: []
  },
  // @todo add auth guard
  {
    path: 'toolbar-layout',
    component: ToolbarLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

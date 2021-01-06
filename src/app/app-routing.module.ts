import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ToolbarLayoutComponent} from './layouts/toolbar-layout/toolbar-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  // @todo add auth guard
  {
    path: 'toolbar-layout',
    component: ToolbarLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./starship/starship.module').then(m => m.StarshipModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

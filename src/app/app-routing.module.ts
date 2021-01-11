import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ToolbarLayoutComponent} from './layouts/toolbar-layout/toolbar-layout.component';
import {AuthGuardService} from './services/auth-guard.service';
import {TestPageComponent} from './components/test-page/test-page.component';

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

  {
    path: '',
    component: ToolbarLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'starship',
        loadChildren: () => import('./starship/starship.module').then(m => m.StarshipModule)
      },
      {
        path: 'test-page',
        component: TestPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

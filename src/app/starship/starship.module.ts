import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipListPageComponent } from './pages/starship-list-page/starship-list-page.component';
import { StarshipListUtilComponent } from './utils/starship-list-util/starship-list-util.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBar} from '@angular/material/snack-bar';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [StarshipListPageComponent, StarshipListUtilComponent],
  imports: [
    CommonModule,
    StarshipRoutingModule,
    MatCardModule,
    MatGridListModule,
    OverlayModule,
    MatProgressBarModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    MatSnackBar
  ]
})
export class StarshipModule { }

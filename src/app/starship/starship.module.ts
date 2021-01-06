import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipListPageComponent } from './pages/starship-list-page/starship-list-page.component';
import { StarshipListUtilComponent } from './utils/starship-list-util/starship-list-util.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [StarshipListPageComponent, StarshipListUtilComponent],
  imports: [
    CommonModule,
    StarshipRoutingModule,
    MatCardModule
  ]
})
export class StarshipModule { }

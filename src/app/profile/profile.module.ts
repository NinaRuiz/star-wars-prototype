import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginUtilComponent } from './utils/login-util/login-util.component';
import { RegisterUtilComponent } from './utils/register-util/register-util.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, LoginUtilComponent, RegisterUtilComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProfileModule { }

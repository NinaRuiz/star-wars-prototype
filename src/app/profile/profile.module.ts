import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginUtilComponent } from './utils/login-util/login-util.component';
import { RegisterUtilComponent } from './utils/register-util/register-util.component';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, LoginUtilComponent, RegisterUtilComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

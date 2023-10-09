import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { PrincipalSignupComponent } from './principal-signup/principal-signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalHomeComponent,
    PrincipalLoginComponent,
    PrincipalSignupComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }

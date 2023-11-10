import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { LivepageComponent } from './livepage/livepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsmoduleformatComponent } from './formsmoduleformat/formsmoduleformat.component';
import { Livepage2Component } from './livepage2/livepage2.component';



@NgModule({
  declarations: [
    LoginComponent,
    LivepageComponent,
    FormsmoduleformatComponent,
    Livepage2Component,
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }

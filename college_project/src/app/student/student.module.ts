import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FormsModule } from '@angular/forms';



 
@NgModule({
  declarations: [
    StudentloginComponent,
   
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
   
   
  ]
})
export class StudentModule { }

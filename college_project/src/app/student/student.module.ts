import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FormsModule } from '@angular/forms';
import { StudentsuccessComponent } from './studentsuccess/studentsuccess.component';



 
@NgModule({
  declarations: [
    StudentloginComponent,
    StudentsuccessComponent,
   
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
   
   
  ]
})
export class StudentModule { }

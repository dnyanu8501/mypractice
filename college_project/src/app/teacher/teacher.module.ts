import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CharOnlyDirective } from './char-only.directive';
import { StringOnlyDirective } from './costum/string-only.directive';


@NgModule({
  declarations: [
    TeacherHomeComponent,
    ParentComponent,
    ChildComponent,
    CharOnlyDirective,
    StringOnlyDirective
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TeacherModule { }

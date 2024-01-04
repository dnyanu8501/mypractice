import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:TeacherHomeComponent},
  {path:'parent',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

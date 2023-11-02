import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';
import { StudentsuccessComponent } from './studentsuccess/studentsuccess.component';

const routes: Routes = [
  {path:'studentlogin', component:StudentloginComponent},
  {path:'signuppage', component:SignupstudentComponent},
  {path:'studentsuccess', component:StudentsuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

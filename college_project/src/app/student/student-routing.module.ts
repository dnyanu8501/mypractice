import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';

const routes: Routes = [
  {path:'studentlogin', component:StudentloginComponent},
  {path:'signuppage', component:SignupstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

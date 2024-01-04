import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchtableComponent } from './searchtable/searchtable.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"landing",component:LandingComponent},
  {path:"searchtbl", component:SearchtableComponent},

  {path:"principalmod",loadChildren:()=> import("./principal/principal.module").then(m =>m.PrincipalModule)},
  {path:"studentmodule",loadChildren:() => import("./student/student.module").then(m=>m.StudentModule) },
  {path:'teacher',loadChildren:()=>import('./teacher/teacher.module').then(mod=>mod.TeacherModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

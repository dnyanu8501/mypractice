import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { PrincipalSignupComponent } from './principal-signup/principal-signup.component';

const routes: Routes = [
  {path:'principalhome',component:PrincipalHomeComponent},
  {path:'signupc',component:PrincipalSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

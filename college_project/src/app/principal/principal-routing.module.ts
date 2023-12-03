import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalSignupComponent } from './principal-signup/principal-signup.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';


const routes: Routes = [
 
  {path:'Signuppage',component:PrincipalSignupComponent},
  {path:'login',component:PrincipalLoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }

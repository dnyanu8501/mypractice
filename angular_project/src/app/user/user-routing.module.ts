import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LivepageComponent } from './livepage/livepage.component';
import { FormsmoduleformatComponent } from './formsmoduleformat/formsmoduleformat.component';
import { Livepage2Component } from './livepage2/livepage2.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"livepage" , component:LivepageComponent},
  { path:"formmodformat" ,component:FormsmoduleformatComponent },
  { path:"livepage2" ,component:Livepage2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

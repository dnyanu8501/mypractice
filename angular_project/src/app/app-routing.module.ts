import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [ 
  {path:"",component:LandingComponent}, 
  {path: "home", component: HomeComponent},
  {path:"product",component:ProductComponent},
  {path:'back',component:LandingComponent},
  { path:"parentcom" , component:ParentComponent},
  


  {path:'user/login', loadChildren:() =>import('./user/user.module').then(mod=>mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { LandinScreenComponent } from './landin-screen/landin-screen.component';

const routes: Routes = [
 {path:"",component:LandinScreenComponent},
  {path:"user", loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

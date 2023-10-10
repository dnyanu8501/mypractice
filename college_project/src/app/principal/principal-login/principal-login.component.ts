import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent {

  constructor (private router:Router){}

  signup(){
    this.router.navigateByUrl('principalmod/Signuppage')
  }
  back(){
    this.router.navigateByUrl('landing')
  }
}

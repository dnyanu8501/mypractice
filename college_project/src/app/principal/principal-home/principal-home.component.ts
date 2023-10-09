import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.scss']
})
export class PrincipalHomeComponent {

  constructor (private router:Router){}

  signup(){
    this.router.navigateByUrl("principalmod/signupc");
  }
}

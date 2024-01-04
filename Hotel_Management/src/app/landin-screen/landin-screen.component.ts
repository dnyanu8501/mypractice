import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landin-screen',
  templateUrl: './landin-screen.component.html',
  styleUrls: ['./landin-screen.component.scss']
})
export class LandinScreenComponent {
 constructor(private router:Router){}

 user(){
  this.router.navigateByUrl("user")
 }

}

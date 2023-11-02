import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  pname:any;

  constructor(private router : Router ,private dataService : DataService){}


  home(){
    this.router.navigateByUrl('home');
 }
 product(){
  this.dataService.productName=this.pname;
  this.router.navigateByUrl("product");
 }
 userModule(){
  this.router.navigateByUrl("user/login")
 }

}

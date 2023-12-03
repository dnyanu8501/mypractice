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
 parentcomponent(){
  this.router.navigateByUrl("parentcom");
 }
 searchtable(){
  this.router.navigateByUrl("searchtbl");
 }

 ngOnChanges(){
  console.log("calling  ngonchanges ");
  
 }
 ngOnInit(){
  console.log("calling  ngoninit ");
  
 }
 ngDoCheck(){
  console.log("calling  ngDoChecked ");
  
 }
 ngAfterContentInit(){
  console.log("calling ngAfterContentInit" );
  
 }
 ngAfterContentChecked(){
  console.log("calling ngAfterContentChecked" );
   
 }
 ngAfterViewInit(){
  console.log("calling ngAfterViewInit" );
 }
 ngAfterViewChecked(){
  console.log("calling ngAfterViewChecked" );

 }
 ngOnDestroy(){
  console.log("calling ngOnDestroy" );
 }

 

}

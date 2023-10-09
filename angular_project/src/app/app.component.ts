import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_project';
  fun1=true;
  fun2=false;
  studentname:any='ram';
  no1?:any;
  no2?:any;
  reult?:any;
  male1="Male";
  female1="Female"
  gender12?:any;


  demo(data1: any){
    console.log(data1.target.value);
    
  }

  addition(num:any){
    this.reult=this.no1+this.no2;
  }

  gen(data:any){
    this.gender12=data.target.value;
  }

  constructor(private router : Router){

  }
  

}



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/landing/services/data.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent {
  
  constructor(private router: Router, private dataService:DataService){}
  showform=false;
  newpass:any;
  conpass:any;
  signuppage=false;

  matcherr= !true;

  submit(form: any) {
    console.log(form);
    this.dataService.username1=form.userName;
    if(form){
      this.router.navigateByUrl('studentmodule/studentsuccess');
    }

  }
  forgotpage(){
    this.showform =!this.showform;
  }

  forsubmit(data:any){
    console.log(data);
   
    
  }
  newinputfield(newpassword:any,conpass:any){
     
    if(newpassword==conpass){
      this.matcherr=false;
    }else{
      this.matcherr=true;
    }

  }

  signup(data:any){
    console.log(data);
    
  }
  // newsignuppage(){
  //   this.router.navigateByUrl('studentmodule/signuppage')
  // }
  newsignuppage(){
    this.signuppage=!this.signuppage;
    this.showform =false;
  }
  forgpage(){
   
  }
  
 


}

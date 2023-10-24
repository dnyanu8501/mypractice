import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.component.html',
  styleUrls: ['./principal-login.component.scss']
})
export class PrincipalLoginComponent {

  loginFormControl!:FormGroup;
  showpass=false;

  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(){
    
    
    this.formdata()
  }
 formdata(){
  this.loginFormControl=this.fb.group({
    userName:['',[Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9_]*')]],
    password:['',this.passfunction]

  })


 }

 passfunction(data : any){
   let inputdata=data.value?.toLowerCase().split(' ');
   let alldata=inputdata.includes('password');
   return alldata ? {'rightword':true}: null;

 }
 pass(){
  this.showpass=!this.showpass;
 }

 login(){
  console.log('data',this.loginFormControl.value);
  this.loginFormControl.reset();
  
 }
  signup(){
    this.router.navigateByUrl('principalmod/Signuppage')
  }
  back(){
    var v= confirm("Are You sure?");  
    if(v==true){  
    
      this.router.navigateByUrl('landing')
    }  
    else{  
    // alert("cancel");  
   
    }  
   
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-signup',
  templateUrl: './principal-signup.component.html',
  styleUrls: ['./principal-signup.component.scss']
})
export class PrincipalSignupComponent {

  // signupFormGroup!:FormGroup;
  signControlForm!:FormGroup;
  genderselector:boolean=false;
  pass=false;
 
  constructor(private fb:FormBuilder,private router:Router){}
  ngOnInit(){
    this.formdata();

    
  }


  formdata(){
    this.signControlForm=this.fb.group({
      fname:['',[Validators.maxLength(15) ,Validators.pattern('[a-zA-Z ]*')]],
      
      username: ['',[this.whitespacefun,Validators.maxLength(15)]],
      password:['',[Validators.maxLength(15)]],
      email:['',[Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      cnumber:['',[Validators.pattern('[0-9]*')]],
      gender:[],
      
      

    })
  }
  // formdetails(){
  //     this.signupFormGroup=this.fb.group({
  //       username:['Dnyanu',[Validators.maxLength(10)]],
  //       emailid:['',[Validators.minLength(4)]]
  //     })
  // }
  whitespacefun(customval :any){
    console.log('whitespaces');
    
    let customwhite=customval.value?customval.value?.trim().length==0:null;
    return customwhite ? {'whiteSpace': true}:null;
  }

  submit(){
    let genvalue=this.signControlForm.value.gender;
    if(genvalue){
    console.log('data',this.signControlForm.value);
    this.signControlForm.reset();
    
    }
    else{
      this.genderselector=true;
      return;
    }
  } 
  genselect(){
    this.genderselector=false;
  }

  back(){
    this.router.navigateByUrl("principalmod/login");
  }
  hidepass(){
    this.pass=!this.pass;
  }

}

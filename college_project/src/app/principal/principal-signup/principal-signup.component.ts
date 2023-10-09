import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal-signup',
  templateUrl: './principal-signup.component.html',
  styleUrls: ['./principal-signup.component.scss']
})
export class PrincipalSignupComponent {

  signupFormGroup!:FormGroup;
 
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.formdetails();

    
  }
  formdetails(){
      this.signupFormGroup=this.fb.group({
        username:['Dnyanu',[Validators.maxLength(10)]],
        emailid:['',[Validators.minLength(4)]]
      })
  }
  submit(){
    console.log('data',this.signupFormGroup.value);
    
  }

}

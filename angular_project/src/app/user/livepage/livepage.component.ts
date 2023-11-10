import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogindatashreService } from 'src/app/services/logindatashre.service';

@Component({
  selector: 'app-livepage',
  templateUrl: './livepage.component.html',
  styleUrls: ['./livepage.component.scss']
})
export class LivepageComponent {

  loginform!:FormGroup;
  userName:any;

 constructor(private fb:FormBuilder,private logindatashreService :LogindatashreService,private router:Router){} 
 ngOnInit(){
 
  
    this.alldata()
   
 }
 alldata(){
  this.loginform = this.fb.group({
    userName:[],
    password:[]
  })


 }
 livepage2(){
  this.logindatashreService.usersname=this.userName;
  this.router.navigateByUrl('user/login/livepage2');
}

  submitdata(){
   console.log(this.loginform.value);
   
  }
}

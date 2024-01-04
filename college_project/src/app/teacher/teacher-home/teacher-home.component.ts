import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent {
  practiceForm!:FormGroup

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.practiceForm=this.fb.group({
      name:['',[Validators.required]],
      address:[]

    })
  }
  submitData(){
    console.log(this.practiceForm.value);
    
  }
  login(data:any){
    console.log(data);
    
  }
}

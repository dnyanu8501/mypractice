import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-studentsuccess',
  templateUrl: './studentsuccess.component.html',
  styleUrls: ['./studentsuccess.component.scss']
})
export class StudentsuccessComponent {
  usersName:any;
  stdName:any;
  cityName:any;
  arr:any[]=[];
  constructor(private dataService:DataService ){}
  ngOnInit(){
    
    this.usersName=this.dataService.username1
  }
  addcity(){
    this.arr.push(this.cityName);
  console.log(this.arr)
  this.cityName=""
  }

}

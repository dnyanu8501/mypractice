import { Component } from '@angular/core';
import { DataService } from 'src/app/landing/services/data.service';

@Component({
  selector: 'app-studentsuccess',
  templateUrl: './studentsuccess.component.html',
  styleUrls: ['./studentsuccess.component.scss']
})
export class StudentsuccessComponent {
  usersName:any;
  constructor(private dataService:DataService ){}
  ngOnInit(){
    
    this.usersName=this.dataService.username1
  }

}

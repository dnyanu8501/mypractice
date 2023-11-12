import { Component } from '@angular/core';
import { LogindatashreService } from '../services/logindatashre.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  cityName:any;
  studentName1:any;
  employeeName1:any;
  
  constructor(private logindatashreService:LogindatashreService){}
  ngOnInit(){
    this.logindatashreService.empName.subscribe( data =>{
      this.employeeName1=data;
    });
  }
  
  passData(data:any){
    this.studentName1=data;
  }

 
 
}

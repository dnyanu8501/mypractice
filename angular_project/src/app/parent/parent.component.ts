import { Component, ViewChild } from '@angular/core';
import { LogindatashreService } from '../services/logindatashre.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  cityName:any;
  studentName1:any;
  employeeName1:any;
  carsName:any;
  @ViewChild(ChildComponent) childRef!:ChildComponent;
  
  constructor(private logindatashreService:LogindatashreService){}
  ngOnInit(){
    this.logindatashreService.empName.subscribe( data =>{
      this.employeeName1=data;
    });
  }
  
  passData(data:any){
    this.studentName1=data;
  }
  carFun(){
    this.childRef.cars1=this.carsName;

  }

 
 
}

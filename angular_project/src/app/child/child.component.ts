import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogindatashreService } from '../services/logindatashre.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 @Input() city:any;
 @Output() studentEvent = new EventEmitter<any>();
 emp:any;
 stdName:any;
constructor(private logindatashreService:LogindatashreService){}

 submit(){
  this.studentEvent.emit(this.stdName);
 }
 setData(){
this.logindatashreService.empName.next(this.emp);
 }
}

import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { LogindatashreService } from '../services/logindatashre.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 @Input() city:any;
 @Output() studentEvent = new EventEmitter<any>();
 @ViewChild('para') eleRef!:ElementRef;
 emp:any;
 stdName:any;
 cars1:any;
constructor(private logindatashreService:LogindatashreService){}

 submit(){
  this.studentEvent.emit(this.stdName);
 }
 setData(){
this.logindatashreService.empName.next(this.emp);
 }

ngAfterViewInit(){
  this.eleRef.nativeElement.innerHTML="gavade"
}

}

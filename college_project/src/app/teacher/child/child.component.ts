import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DataService } from '../parent/Service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],

})
export class ChildComponent {
 @Input() userName:any
 password:any
 @Output() passwordevent:any=new EventEmitter<any>()
 view:any
 city:any
 catDetails:any
constructor(private dataService:DataService){}
 ngOnChanges(){
this.dataService.city.subscribe(res=>{
  this.city=res
})
 }
 submit(){
  this.passwordevent.emit(this.password)
 }
}

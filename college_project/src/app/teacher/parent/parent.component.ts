import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],

})
export class ParentComponent {

 name:any
 password:any
 view:any
 city:any
 catName:any
 @ViewChild(ChildComponent) childRef!:ChildComponent

constructor(private dataService:DataService){}
 data(data:any){
 this.password=data
 }
 viewCopmo(){
  this.childRef.view=this.view
 }
 carDetails(){
 this.dataService.city.next(this.city)
 }
 catNameData(){
   this.childRef.catDetails=this.catName
 }
}

import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent {
   arr=[1];
   count=1
   
 constructor(private elementRef:ElementRef){}
  addCircle(){
  this.count++
   let Length=this.arr.length
  this.arr.push(1)
}
color(){
  this.elementRef.nativeElement.color="green"
 console.log(this.count);
}
}


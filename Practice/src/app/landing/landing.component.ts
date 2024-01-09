import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent {
   arr=[1];
   count=1

  addCircle(){
  this.count++
   let Length=this.arr.length
  this.arr.push(1)
}
color(){
 console.log(this.count);

}
}


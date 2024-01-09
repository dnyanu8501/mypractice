import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
  
})
export class LandingComponent {
  circles: { id: number, isSelected: boolean, backgroundColor: string }[] = [];
  nextCircleId = 1;
  selectedCircle?: { id: number, isSelected: boolean, backgroundColor: string } ;
 count=0;
 constructor(private elementRef:ElementRef){}
  toggleSelectCircle(circle: { id: number, isSelected: boolean, backgroundColor: string }) {
    console.log(circle);
    console.log(this.selectedCircle);
    
     if (circle === this.selectedCircle) {
       circle.isSelected = !circle.isSelected;
       circle.backgroundColor == 'grey'? circle.backgroundColor ='green' :circle.backgroundColor ='grey'
     } else {
       if(this.selectedCircle) {
         this.selectedCircle.isSelected = false;
         this.selectedCircle.backgroundColor = 'grey'
       }
       circle.isSelected = true;
       circle.backgroundColor = 'green'
       this.selectedCircle = circle;
     }
   }
   addCircle() {
     const newCircle = {
       id: this.nextCircleId,
       isSelected: false,
       
       backgroundColor:'grey'
     };
     this.count++
     this.circles.push(newCircle);
     this.nextCircleId++;
   }
}


import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStringOnly]'
})
export class StringOnlyDirective {

  constructor(private elementRef:ElementRef){}
 
 @HostListener('input',['$event'])
 onStringChange() {
  let value=this.elementRef.nativeElement.value
  this.elementRef.nativeElement.value=value.replace(/[^0-9]/g,'')
  
 }
}

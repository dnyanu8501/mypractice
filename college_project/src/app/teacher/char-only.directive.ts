import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('input',['$event'])
OnInputChanges(event:any){
  console.log("CALL");
  let value= this.elementRef.nativeElement.value
  this.elementRef.nativeElement.value=value.replace(/[^a-zA-Z]*/g,'')
  
}
}

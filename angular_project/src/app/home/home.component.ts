import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  count=0;
  constructor(private router :Router){}

  back(){
   
    // alert("Hello Alert Box");  
    // confirm("confirm box")
    var v= confirm("Are u sure?");  
    if(v==true){  
    
    this.router.navigateByUrl('back') 
    }  
    else{  
    alert("cancel");  
   
    }  
  }

counter(data:any){
  
data=="plus"?this.count++:this.count--;
}


}

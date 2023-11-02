import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
seeSname:boolean=false;
carsname:boolean=false;
color:any;
prdName:any;
arr:any;
listcityName :any[]=[];

cars=['audi','hector','mahindra','tata','swift']

constructor(private router:Router, private dataService : DataService){}

ngOnInit(){
  this.prdName=this.dataService.productName;
}
back(){
  this.router.navigateByUrl('back');
}

toShowName(){
  this.seeSname=!this.seeSname;

}
toshowcars(){
  this.carsname=!this.carsname;
}
cityList(){
  
  console.log(this.arr);
 
  
   this.listcityName.push(this.arr);
  // console.log(this.listcityName)
  this.arr=""
}

}

import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

name:any;
pass:any;
address:any;
userAddress:any

constructor (private dataService:DataService ){}
ngOnInIt(){
 
}
passData(data:any){
  this.pass=data
}

addresUser(data:any){
  this.address=data
}
userAddressClick(){
  this.dataService.userAddress.next(this.userAddress);
}

}

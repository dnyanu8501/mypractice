import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() userName:any;
  @Output()  passEvent=new EventEmitter <any>();
  @Output() passValue=new EventEmitter <any>();
  address:any;
  password:any;
  userAddress:any
constructor(private dataService:DataService){}

  ngOnChanges(){
  this.dataService.userAddress.subscribe( res=>{
    this.userAddress=res
   })
  }
  submitData(){
    this.passEvent.emit(this.password);
    this.passValue.emit(this.address);

  }
}

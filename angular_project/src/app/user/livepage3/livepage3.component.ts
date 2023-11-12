import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-livepage3',
  templateUrl: './livepage3.component.html',
  styleUrls: ['./livepage3.component.scss']
})
export class Livepage3Component {
 @Input() parentusername:any;
 pass:any;
 cityName:any;
 @Output() passEvent = new EventEmitter<any>();
 
constructor(private dataService:DataService){}

ngOnInit(){
  this.dataService.city.subscribe(data=>{
this.cityName=data;
  });
}

 submit(){
  this.passEvent.emit(this.pass);
 }
}

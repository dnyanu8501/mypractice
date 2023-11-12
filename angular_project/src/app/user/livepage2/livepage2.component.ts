import { Component } from '@angular/core';
import { LogindatashreService } from 'src/app/services/logindatashre.service';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-livepage2',
  templateUrl: './livepage2.component.html',
  styleUrls: ['./livepage2.component.scss']
})
export class Livepage2Component {
  user:any;
  username:any;
  datafromchild:any;
  citynameis:any;

 constructor(private logindatashreService: LogindatashreService ,private dataService:DataService){}
 ngOnInit(){
  this.user=this.logindatashreService.usersname;
 }

 passDATA(data:any){
  this.datafromchild=data;
 }

 setdata(){
  this.dataService.city.next(this.citynameis);
 }

}

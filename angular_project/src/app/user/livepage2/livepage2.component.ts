import { Component } from '@angular/core';
import { LogindatashreService } from 'src/app/services/logindatashre.service';

@Component({
  selector: 'app-livepage2',
  templateUrl: './livepage2.component.html',
  styleUrls: ['./livepage2.component.scss']
})
export class Livepage2Component {
  user:any;
 constructor(private logindatashreService: LogindatashreService){}
 ngOnInit(){
  this.user=this.logindatashreService.usersname;
 }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindatashreService {
 usersname:any;
 empName = new Subject<any>();
  constructor() { }
  
}

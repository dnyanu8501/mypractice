import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productName:any;
  city =new Subject <any>();
  constructor() { }

}

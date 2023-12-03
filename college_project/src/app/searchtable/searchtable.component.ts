import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchtable',
  templateUrl: './searchtable.component.html',
  styleUrls: ['./searchtable.component.scss']
})
export class SearchtableComponent {

searchedValue:any;

 headings=['name','age','city']
  student=[
    {name:'ram', age:20,city:'pune'},
    {name:'sham' ,age:23 , city:'mumbai'},
    {name:'babu' ,age:28 , city:'thane'},
    {name:'viswa' ,age:21 , city:'kolhapur'},
    {name:'chinta' ,age:23 , city:'mumbai'}
  ]

 

}

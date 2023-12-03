import { Component } from '@angular/core';

@Component({
  selector: 'app-searchtbl',
  templateUrl: './searchtbl.component.html',
  styleUrls: ['./searchtbl.component.scss']
})
export class SearchtblComponent {
  searchValue:any;
 
  tableheading=['Name', "City","contact"]
  tabledata=[
    {name:"pavan",city:"pune",contact:27761},
    {name:"ram",city:"thane",contact:27361},
    {name:"sham",city:"goa",contact:277631},
    {name:"visha",city:"pune",contact:273761},
    {name:"chinta",city:"satara",contact:227761},
    {name:"pradya",city:"pune",contact:2772261},
    {name:"babu",city:"mumbai",contact:272234761},
    {name:"dnyanu",city:"kolkatta",contact:27761}
  ]

}

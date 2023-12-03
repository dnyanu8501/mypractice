import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchdata: any): any {
    if(!searchdata){
      return data;
    }
let original=searchdata.toLowerCase();
 return data.filter ((item:any )=>{
  return JSON.stringify(item).toLowerCase().includes(original);
 })

  }

}

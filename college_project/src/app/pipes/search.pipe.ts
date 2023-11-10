import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchdata: any): any {
    console.log('data' ,data);
    console.log("searchdata",searchdata);
    
    
    return data;
  }

}

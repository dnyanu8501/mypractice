import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchval: any): any {
   

   if(!searchval){
    return data;
   }
   let searchValue=searchval.toLowerCase();
    return data.filter( (item:any) =>{
      return JSON.stringify(item).toLowerCase().includes(searchval);
    })
   
  
   
    
    
    
  }

}

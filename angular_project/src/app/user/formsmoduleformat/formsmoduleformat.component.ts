import { Component } from '@angular/core';

@Component({
  selector: 'app-formsmoduleformat',
  templateUrl: './formsmoduleformat.component.html',
  styleUrls: ['./formsmoduleformat.component.scss']
})
export class FormsmoduleformatComponent {

  submit(data: any){
    console.log(data);
    
  }

}

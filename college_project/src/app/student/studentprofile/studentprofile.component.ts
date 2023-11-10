import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss']
})
export class StudentprofileComponent {
 
  @Input() studentName:any;
  @Input() City:any;
  @Input() arr1:any



}
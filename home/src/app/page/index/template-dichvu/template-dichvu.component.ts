import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-template-dichvu',
  templateUrl: './template-dichvu.component.html',
  styleUrls: ['./template-dichvu.component.scss']
})
export class TemplateDichvuComponent {

@Input() data : any

}

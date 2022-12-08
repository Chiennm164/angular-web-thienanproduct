import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sp-bottom',
  templateUrl: './template-sp-bottom.component.html',
  styleUrls: ['./template-sp-bottom.component.scss']
})
export class TemplateSpBottomComponent implements OnInit {

@Input() outstanding :any
@Input() data :any
@Input() icon :any

ngOnInit(){


}

}

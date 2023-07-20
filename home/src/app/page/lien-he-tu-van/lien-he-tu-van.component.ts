import { Component } from '@angular/core';

@Component({
  selector: 'app-lien-he-tu-van',
  templateUrl: './lien-he-tu-van.component.html',
  styleUrls: ['./lien-he-tu-van.component.scss'],
})
export class LienHeTuVanComponent {
  arrDV: any = [];
  arrSP: any = [];
  breadcrumb : any = [
    { link: '#a', text: 'Liên hệ tư vấn' },
  ];
}

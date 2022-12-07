import { Component } from '@angular/core';

@Component({
  selector: 'app-dich-vu',
  templateUrl: './dich-vu.component.html',
  styleUrls: ['./dich-vu.component.scss'],
})
export class DichVuComponent {
  link = [{ link: '#a', text: 'Dịch vụ' }];
  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sx-to-chuc-su-kien',
  templateUrl: './sx-to-chuc-su-kien.component.html',
  styleUrls: ['./sx-to-chuc-su-kien.component.scss'],
})
export class SxToChucSuKienComponent {
  breadcrumb: any;

  ngOnInit(): void {
    this.breadcrumb = [
      { link: '#a', text: 'Sản phẩm' },
      { link: '#b', text: 'Tổ chức sự kiện' },
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sx-phim-quang-cao',
  templateUrl: './sx-phim-quang-cao.component.html',
  styleUrls: ['./sx-phim-quang-cao.component.scss'],
})
export class SxPhimQuangCaoComponent {
  breadcrumb: any;

  ngOnInit(): void {
    this.breadcrumb = [
      { link: '#a', text: 'Sản phẩm' },
      { link: '#b', text: 'TVC - PHIM QUẢNG CÁO' },
    ];
  }
}

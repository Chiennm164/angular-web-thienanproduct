import { Component } from '@angular/core';

@Component({
  selector: 'app-sx-phim-sitcom',
  templateUrl: './sx-phim-sitcom.component.html',
  styleUrls: ['./sx-phim-sitcom.component.scss'],
})
export class SxPhimSitcomComponent {
  breadcrumb: any;

  ngOnInit(): void {
    this.breadcrumb = [
      { link: '#a', text: 'Sản phẩm' },
      { link: '#b', text: 'PHIM SITCOM – HÀI TẾT' },
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-sx-phim-tai-lieu-truyen-hinh',
  templateUrl: './sx-phim-tai-lieu-truyen-hinh.component.html',
  styleUrls: ['./sx-phim-tai-lieu-truyen-hinh.component.scss'],
})
export class SxPhimTaiLieuTruyenHinhComponent {
  breadcrumb: any;

  ngOnInit(): void {
    this.breadcrumb = [
      { link: '#a', text: 'Sản phẩm' },
      { link: '#b', text: 'Phim tài liệu truyền hình' },
    ];
  }
}

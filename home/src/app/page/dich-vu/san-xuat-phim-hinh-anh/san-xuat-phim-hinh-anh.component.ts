import { Component } from '@angular/core';

@Component({
  selector: 'app-san-xuat-phim-hinh-anh',
  templateUrl: './san-xuat-phim-hinh-anh.component.html',
  styleUrls: ['./san-xuat-phim-hinh-anh.component.scss'],
})
export class SanXuatPhimHinhAnhComponent {
  link = [
    { link: '#a', text: 'Dịch vụ' },
    { link: '#b', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

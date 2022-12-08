import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-layout',
  templateUrl: './banner-layout.component.html',
  styleUrls: ['./banner-layout.component.scss'],
})
export class BannerLayoutComponent {
  @Input() list: any;

  // this.list = {
  //   title: 'Dịch vụ sản xuất TVC quảng cáo',
  //   desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
  //   background:
  //     'https://vietstarmax.vn/images/2020/07/10/banner-phim-tvc3.webp',
  //   colorTextWhite: false,
  // };

  ngOnInit(): void {
    // console.log(this.list);
  }
}

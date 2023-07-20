import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-danh-sach-dich-vu',
  templateUrl: './danh-sach-dich-vu.component.html',
  styleUrls: ['./danh-sach-dich-vu.component.scss'],
})
export class DanhSachDichVuComponent {
  isShown: boolean = true;
  dataListDichVu = [
    {
      src: 'https://vietstarmax.vn/wp-content/uploads/2022/06/dich-vu-san-xuat-phim-tvc-quang-cao.webp',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'PHIM QUẢNG CÁO TVC',
    },
    {
      src: 'https://vietstarmax.vn//wp-content/uploads/2022/06/dich-vu-san-xuat-phim-viral.webp',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Doanh nghiệp',
    },
    {
      src: 'https://vietstarmax.vn//wp-content/uploads/2022/06/dich-vu-san-xuat-phim-doanh-nghiep.webp',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Tài Liệu Truyền Hình',
    },
    {
      src: 'https://vietstarmax.vn//wp-content/uploads/2022/06/dich-vu-truyen-thong-tong-the.webp',
      text1: 'DỊCH VỤ SẢN XUẤT ',
      text2: 'Phim Sitcom',
    },
    {
      src: 'https://vietstarmax.vn//wp-content/uploads/2022/06/dich-vu-marketing-online.webp',
      text1: 'DỊCH VỤ SẢN XUẤT ',
      text2: 'Phim Hài Tết',
    },
    {
      src: 'https://vietstarmax.vn//wp-content/uploads/2022/06/dich-vu-khac.webp',
      text1: 'DỊCH VỤ SẢN XUẤT ',
      text2: 'Phim Viral',
    },
  ];
}

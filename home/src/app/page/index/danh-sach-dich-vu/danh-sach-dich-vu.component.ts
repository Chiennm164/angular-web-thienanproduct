import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-danh-sach-dich-vu',
  templateUrl: './danh-sach-dich-vu.component.html',
  styleUrls: ['./danh-sach-dich-vu.component.scss']
})
export class DanhSachDichVuComponent {


  isShown: boolean = true
  dataListDichVu = [
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-tvc-quang-cao.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'PHIM QUẢNG CÁO TVC',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-viral.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Viral video',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-doanh-nghiep.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Doanh nghiệp',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-truyen-thong-tong-the.png',
      text1: 'DỊCH VỤ ',
      text2: 'Truyền thông tổng thể',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-marketing-online.png',
      text1: 'DỊCH VỤ ',
      text2: 'Marketing Online',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-khac.png ',
      text1: 'Dịch vụ khác',
      text2: '',
    },
  ];
}

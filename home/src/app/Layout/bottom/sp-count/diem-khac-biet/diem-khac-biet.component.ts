import { Component } from '@angular/core';

@Component({
  selector: 'app-diem-khac-biet',
  templateUrl: './diem-khac-biet.component.html',
  styleUrls: ['./diem-khac-biet.component.scss'],
})
export class DiemKhacBietComponent {
  data: any = [
    {
      img: 'https://vietstarmax.vn/images/0new/1000kh.png',
      num: '1000',
      text: ['Khách hàng', 'đã và đang hợp tác'],
    },
    {
      img: 'https://vietstarmax.vn/images/0new/12namkn.png',

      num: '12',
      text: ['Năm kinh nghiệm', 'truyền thông quảng cáo'],
    },
    {
      img: 'https://vietstarmax.vn/images/0new/300cdtt.png ',
      num: '300',
      text: ['Chiến dịch', 'truyền thông'],
    },
    {
      img: 'https://vietstarmax.vn/images/0new/giai-thuong.png',
      num: '2016',
      text: ['Giải thưởng TVC Golden Bell', 'quả chuông vàng'],
    },
  ];
}

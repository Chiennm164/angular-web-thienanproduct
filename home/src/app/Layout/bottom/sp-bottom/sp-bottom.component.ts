import { Component } from '@angular/core';

@Component({
  selector: 'app-sp-bottom',
  templateUrl: './sp-bottom.component.html',
  styleUrls: ['./sp-bottom.component.scss'],
})
export class SpBottomComponent {
  listColum1: any = [
    {
      name: 'VĂN PHÒNG HÀ NỘI',
      value: [
        'Địa chỉ: Số 8, Láng Hạ, Thành Công, Ba Đình, Hà Nội.',
        'Email: info@thienanproduction.vn',
        'Fax: 0943268999',
        'Hotline: 0943268999',
      ],
    },
  ];
  listColum2: any = [
    {
      name: 'DỊCH VỤ ',
      value: [
        'Sản xuất Phim Quảng Cáo',
        'Sản xuất Phim Doanh Nghiệp',
        'Sản xuất Phim Tài Liệu Truyền Hình',
        'Sản xuất Phim Sitcom',
        'Sản xuất Hài Tết',
        'Sản xuất phim Viral',
        'Tổ Chức Sự Kiện',
        'Cho thuê trường quay',
      ],
    },
  ];
  listColum3: any = [
    {
      name: 'SẢN PHẨM',
      value: [
        'Sản xuất Phim Quảng Cáo',
        'Sản xuất Phim Doanh Nghiệp',
        'Sản xuất Phim Tài Liệu Truyền Hình',
        'Sản xuất Phim Sitcom',
        'Sản xuất Hài Tết',
      ],
    },
  ];
  listColum4: any = [
    {
      name: ' FOLLOW US',
      value: [
        {
          icon: 'https://vietstarmax.vn/wp-content/uploads/2022/11/fb.webp',
          value2: 'FANPAGE THIÊN AN',
        },
        {
          icon: 'https://vietstarmax.vn/wp-content/uploads/2022/11/youtube.webp',
          value2: 'THIÊN AN CHANEL',
        },
        {
          icon: 'https://vietstarmax.vn/wp-content/uploads/2022/11/youtube.webp',
          value2: 'THIÊN AN TV',
        },
      ],
    },
  ];
}

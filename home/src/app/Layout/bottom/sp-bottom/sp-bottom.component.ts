import { Component } from '@angular/core';

@Component({
  selector: 'app-sp-bottom',
  templateUrl: './sp-bottom.component.html',
  styleUrls: ['./sp-bottom.component.scss'],
})
export class SpBottomComponent {
  listColum1: any = [
    {
      name: 'Văn Phòng Hà Nội',
      value: [
        'Tầng 5 Tòa nhà 25T1, Hoàng Đạo Thúy, Cầu Giấy, Hà Nội',
        'info@vietstarmax.vn',
        '024.3555.3296 Fax : 024.3555.3296',
        'Hotline: 0982 840 840',
      ],
    },
    {
      name: 'VĂN PHÒNG HCM',
      value: [
        ' Lầu 12A04 - Tháp A - Toà nhà Centana Thủ Thiêm, 36 Mai Chí Thọ, quận 2, TP HCM',
        ' hcm@vietstarmax.vn',
        ' 028.6293.9653 Fax : 028.6293.9653',
        ' Hotline: 096 280 4086',
      ],
    },
  ];
  listColum2: any = [
    {
      name: 'DỊCH VỤ SẢN XUẤT PHIM',
      value: [
        'Sản xuất TVC quảng cáo',
        'Sản xuất Viral Video',
        'Sản xuất phim doanh nghiệp',
        'Sản xuất TVC 3D quảng cáo',
        'Thu âm quảng cáo - Voice Radio',
        'Chụp ảnh quảng cáo',
      ],
    },
    {
      name: 'DỊCH VỤ TRUYỀN THÔNG',
      value: [
        'Dịch vụ truyền thông tổng thể',
        'Dịch vụ marketing Online',
        'Dịch vụ booking quảng cáo',
        'Quảng cáo truyền hình',
        'Quảng cáo Radio',
      ],
    },
  ];
  listColum3: any = [
    {
      name: 'VĂN HOÁ VIETSTARMAX ',
      value: [
        'Về Vietstarmax',
        'Đội ngũ nhân sự',
        'Bản tin nội bộ',
        'Cơ hội việc làm',
        'Khách hàng - Đối tác',
      ],
    },
    {
      name: '12 LÝ DO CHỌN VSM',
      value: [
        '        12 Lý do chọn VSM',
        'Quy trình thực hiện',
        'Câu hỏi thường gặp',
        'Ý kiến khách hàng',
        'Sản phẩm nổi bật',
      ],
    },
  ];
  listColum4: any = [
    {
      name: ' FOLLOW US',
      value: [
        {
          icon: 'https://vietstarmax.vn/images/0new/fb.png',
          value2: 'FANPAGE VIETSTARMAX',
        },
        {
          icon: 'https://vietstarmax.vn/images/0new/youtube.png',
          value2: 'VIETSTARMAX CHANEL',
        },
        {
          icon: 'https://vietstarmax.vn/images/0new/youtube.png',
          value2: 'MUỐI TV',
        },
      ],
    },
    {
      name: 'ĐIỀU KHOẢN',
      value: [
        {
          icon: '',
          value2: 'Chính sách bảo mật thông tin',
        }
        ]
    },
  ];
}

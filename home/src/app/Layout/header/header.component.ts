import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showInputSearch: boolean = false;

  listMenu: any = [
    {
      name: 'DỊCH VỤ',
      valueLv1: [
        {
          name: 'SẢN XUẤT PHIM - HÌNH ẢNH',
          valueLv2: [
            'SẢN XUẤT TVC QUẢNG CÁO',
            'SẢN XUẤT PHIM VIRAL VIDEO',
            'SẢN XUẤT PHIM DOANH NGHIỆP',
            'SẢN XUẤT PHIM QUẢNG CÁO 3D ANIMATION',
            'PHIM DỰ ÁN BẤT ĐỘNG SẢN',
            'CHỤP ẢNH QUẢNG CÁO',
            'THIẾT KẾ QUẢNG CÁO 2D',
            'THU ÂM QUẢNG CÁO - RADIO VOICE',
            'SẢN XUẤT CHƯƠNG TRÌNH TRUYỀN HÌNH',
          ],
        },
        {
          name: ' BOOKING QUẢNG CÁO',
          valueLv2: [
            'DỊCH VỤ TRUYỀN THÔNG TỔNG THỂ',
            'BOOKING QUẢNG CÁO MEDIA',
            'BOOKING QUẢNG CÁO TRUYỀN HÌNH',
            'BOOKING NGƯỜI NỔI TIẾNG KOL',
            'BOOKING QUẢNG CÁO PHÁT THANH - VOICE RADIO',
            'BOOKING QUẢNG CÁO THANG MÁY',
            'BOOKING QUẢNG CÁO XE BUÝT',
            'BOOKING QUẢNG CÁO OOH - QUẢNG CÁO NGOÀI TRỜI',
            'DỊCH VỤ TỔ CHỨC SỰ KIỆN',
          ],
        },
        {
          name: 'TRUYỀN THÔNG ONLINE ',
          valueLv2: [
            'DỊCH VỤ MARKETING ONLINE',
            'THIẾT KẾ WEBSITE',
            'QUẢNG CÁO GOOGLE ADS',
            'QUẢNG CÁO BÀI PR',
            'QUẢNG CÁO BANNER TRÊN BÁO',
            'QUẢN TRỊ FANPAGE FACEBOOK',
            'QUẢNG CÁO FACEBOOK',
            'QUẢNG CÁO ZALO',
            'QUẢNG CÁO YOUTUBE',
            'QUẢNG CÁO TIKTOK',
            'SEEDING, CHATBOT, TOOL',
          ],
        },
      ],
    },
    {
      name: 'Sản Phẩm ',
      valueLv1: [
        {
          name: 'SẢN PHẨM PHIM QUẢNG CÁO',
          valueLv2: [],
        },
        {
          name: 'SẢN PHẨM PHIM VIRAL',
          valueLv2: [],
        },
        {
          name: 'SẢN PHẨM PHIM DOANH NGHIỆP',
          valueLv2: [],
        },
        {
          name: 'SẢN PHẨM PHIM 3D',
          valueLv2: [],
        },
        {
          name: 'SẢN PHẨM ẢNH QUẢNG CÁO',
          valueLv2: [],
        },
        {
          name: 'CHIẾN DỊCH TRUYỀN THÔNG',
          valueLv2: [],
        },
        {
          name: 'CHƯƠNG TRÌNH TRUYỀN HÌNH',
          valueLv2: [],
        },
        {
          name: 'VOICE RADIO',
          valueLv2: [],
        },
        {
          name: 'HẬU TRƯỜNG',
          valueLv2: ['HẬU TRƯỜNG TVC', 'HẬU TRƯỜNG PHIM DOANH NGHIỆP'],
        },
      ],
    },
    {
      name: 'Báo giá',
      valueLv1: [
        {
          name: 'BÁO GIÁ PHIM DOANH NGHIỆP',
          valueLv2: [],
        },
        {
          name: 'BÁO GIÁ PHIM TVC',
          valueLv2: [],
        },
        {
          name: 'BÁO GIÁ VIRAL VIDEO',
          valueLv2: [],
        },
        {
          name: 'BÁO GIÁ PHIM QUẢNG CÁO 3D ANIMATION',
          valueLv2: [],
        },
      ],
    },
    {
      name: 'về Vietstarmax',
      valueLv1: [
        {
          name: 'GIỚI THIỆU',
          valueLv2: [],
        },
        {
          name: '12 LÝ DO CHỌN VSM',
          valueLv2: [],
        },
        {
          name: 'TUYỂN DỤNG',
          valueLv2: [],
        },
        {
          name: 'BẢN TIN VSM',
          valueLv2: ['BẢN TIN VSM', 'HỎI ĐÁP VỀ VSM', 'SINH NHẬT THÀNH VIÊN'],
        },
        {
          name: 'ĐỘI NGŨ NHÂN SỰ',
          valueLv2: [],
        },
        {
          name: 'VIDEO NỘI BỘ',
          valueLv2: [],
        },
        {
          name: 'HỒ SƠ NĂNG LỰC',
          valueLv2: [],
        },
        {
          name: 'KHÁCH HÀNG - ĐỐI TÁC',
          valueLv2: [],
        },
      ],
    },
    {
      name: 'Blog',
      valueLv1: [
        {
          name: 'LÀM PHIM',
          valueLv2: [
            'PHIM QUẢNG CÁO TVC',
            'PHIM VIRAL VIDEO',
            'MV QUẢNG CÁO',
            'PHIM DOANH NGHIỆP',
          ],
        },
        {
          name: 'TRUYỀN THÔNG',
          valueLv2: [
            'THU ÂM QUẢNG CÁO',
            'CHỤP ẢNH QUẢNG CÁO',
            'TỔ CHỨC SỰ KIỆN',
            'BOOKING KOL',
          ],
        },
        {
          name: 'QUẢNG CÁO',
          valueLv2: [
            'QUẢNG CÁO TRUYỀN HÌNH',
            'QUẢNG CÁO RADIO',
            'QUẢNG CÁO THANG MÁY',
            'QUẢNG CÁO XE BUÝT TAXI',
            'QUẢNG CÁO BẢNG BIỂN',
          ],
        },
        {
          name: 'DIGITAL MARKETINGv',
          valueLv2: [],
        },
        {
          name: 'VĂN HOÁ DOANH NGHIỆP',
          valueLv2: [
            'TRUYỀN THÔNG NỘI BỘ',
            'THƯƠNG HIỆU TUYỂN DỤNG',
            'VĂN HÓA - GIẢI TRÍ',
          ],
        },
        {
          name: 'CỘNG ĐỒNG',
          valueLv2: [
            'BRAND THƯƠNG HIỆU',
            'CHIẾN LƯỢC THƯƠNG HIỆU',
            'SÁNG TẠO',
            'THỊ TRƯỜNG',
            'CHIẾN DỊCH THÀNH CÔNG',
          ],
        },
        {
          name: 'BẢN TIN DỊCH VỤ',
          valueLv2: [],
        },
      ],
    },
    {
      name: 'Liên hệ tư vấn',
      valueLv1: [

      ],
    },
  ];

  ngOnInit(): void {}

  showInput() {
    this.showInputSearch = !this.showInputSearch;
  }
}

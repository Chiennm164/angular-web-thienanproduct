import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showInputSearch: boolean = false;

  checkBtnMenu: boolean = false;

  listMenu: any = [
    {
      name: 'DỊCH VỤ',
      valueLv1: [
        {
          name: 'SẢN XUẤT PHIM - HÌNH ẢNH',
          valueLv2: [
            { path: '', value: 'SẢN XUẤT TVC QUẢNG CÁO' },
            { path: '', value: 'SẢN XUẤT PHIM VIRAL VIDEO' },
            { path: '', value: 'SẢN XUẤT PHIM DOANH NGHIỆP' },
            { path: '', value: 'SẢN XUẤT PHIM QUẢNG CÁO 3D ANIMATION' },
            { path: '', value: 'PHIM DỰ ÁN BẤT ĐỘNG SẢN' },
            { path: '', value: 'CHỤP ẢNH QUẢNG CÁO' },
            { path: '', value: 'THIẾT KẾ QUẢNG CÁO 2D' },
            { path: '', value: 'THU ÂM QUẢNG CÁO - RADIO VOICE' },
            { path: '', value: 'SẢN XUẤT CHƯƠNG TRÌNH TRUYỀN HÌNH' },
          ],
          path: '',
        },
        {
          name: ' BOOKING QUẢNG CÁO',
          valueLv2: [
            { path: '', value: 'DỊCH VỤ TRUYỀN THÔNG TỔNG THỂ' },
            { path: '', value: 'BOOKING QUẢNG CÁO MEDIA' },
            { path: '', value: 'BOOKING QUẢNG CÁO TRUYỀN HÌNH' },
            { path: '', value: 'BOOKING NGƯỜI NỔI TIẾNG KOL' },
            { path: '', value: 'BOOKING QUẢNG CÁO PHÁT THANH - VOICE RADIO' },
            { path: '', value: 'BOOKING QUẢNG CÁO THANG MÁY' },
            { path: '', value: 'BOOKING QUẢNG CÁO XE BUÝT' },
            { path: '', value: 'BOOKING QUẢNG CÁO OOH - QUẢNG CÁO NGOÀI TRỜI' },
            { path: '', value: 'DỊCH VỤ TỔ CHỨC SỰ KIỆN' },
          ],
          path: '',
        },
        {
          name: 'TRUYỀN THÔNG ONLINE ',
          valueLv2: [
            { path: ' ', value: 'DỊCH VỤ MARKETING ONLINE' },
            { path: ' ', value: 'THIẾT KẾ WEBSITE' },
            { path: ' ', value: 'QUẢNG CÁO GOOGLE ADS' },
            { path: ' ', value: 'QUẢNG CÁO BÀI PR' },
            { path: ' ', value: 'QUẢNG CÁO BANNER TRÊN BÁO' },
            { path: ' ', value: 'QUẢN TRỊ FANPAGE FACEBOOK' },
            { path: ' ', value: 'QUẢNG CÁO FACEBOOK' },
            { path: ' ', value: 'QUẢNG CÁO ZALO' },
            { path: ' ', value: 'QUẢNG CÁO YOUTUBE' },
            { path: ' ', value: 'QUẢNG CÁO TIKTOK' },
            { path: ' ', value: 'SEEDING, CHATBOT, TOOL' },
          ],
          path: '',
        },
      ],
      path: '',
    },
    {
      name: 'Sản Phẩm ',
      valueLv1: [
        {
          name: 'SẢN PHẨM PHIM QUẢNG CÁO',
          valueLv2: [],
          path: '',
        },
        {
          name: 'SẢN PHẨM PHIM VIRAL',
          valueLv2: [],
          path: '',
        },
        {
          name: 'SẢN PHẨM PHIM DOANH NGHIỆP',
          valueLv2: [],
          path: '',
        },
        {
          name: 'SẢN PHẨM PHIM 3D',
          valueLv2: [],
          path: '',
        },
        {
          name: 'SẢN PHẨM ẢNH QUẢNG CÁO',
          valueLv2: [],
          path: '',
        },
        {
          name: 'CHIẾN DỊCH TRUYỀN THÔNG',
          valueLv2: [],
          path: '',
        },
        {
          name: 'CHƯƠNG TRÌNH TRUYỀN HÌNH',
          valueLv2: [],
          path: '',
        },
        {
          name: 'VOICE RADIO',
          valueLv2: [],
          path: '',
        },
        {
          name: 'HẬU TRƯỜNG',
          valueLv2: [
            { path: '', value: 'HẬU TRƯỜNG TVC' },
            { path: '', value: 'HẬU TRƯỜNG PHIM DOANH NGHIỆP' },
          ],
          path: '',
        },
      ],
      path: '/sanpham',
    },
    {
      name: 'Báo giá',
      valueLv1: [
        {
          name: 'BÁO GIÁ PHIM DOANH NGHIỆP',
          valueLv2: [],
          path: '',
        },
        {
          name: 'BÁO GIÁ PHIM TVC',
          valueLv2: [],
          path: '',
        },
        {
          name: 'BÁO GIÁ VIRAL VIDEO',
          valueLv2: [],
          path: '',
        },
        {
          name: 'BÁO GIÁ PHIM QUẢNG CÁO 3D ANIMATION',
          valueLv2: [],
          path: '',
        },
      ],
      path: '',
    },
    {
      name: 'về Vietstarmax',
      valueLv1: [
        {
          name: 'GIỚI THIỆU',
          valueLv2: [],
          path: '',
        },
        {
          name: '12 LÝ DO CHỌN VSM',
          valueLv2: [],
          path: '',
        },
        {
          name: 'TUYỂN DỤNG',
          valueLv2: [],
          path: '',
        },
        {
          name: 'BẢN TIN VSM',
          valueLv2: [
            { path: '', value: 'BẢN TIN VSM' },
            { path: '', value: 'HỎI ĐÁP VỀ VSM' },
            { path: '', value: 'SINH NHẬT THÀNH VIÊN' },
          ],
          path: '',
        },
        {
          name: 'ĐỘI NGŨ NHÂN SỰ',
          valueLv2: [],
          path: '',
        },
        {
          name: 'VIDEO NỘI BỘ',
          valueLv2: [],
          path: '',
        },
        {
          name: 'HỒ SƠ NĂNG LỰC',
          valueLv2: [],
          path: '',
        },
        {
          name: 'KHÁCH HÀNG - ĐỐI TÁC',
          valueLv2: [],
          path: '',
        },
      ],
      path: '',
    },
    {
      name: 'Blog',
      valueLv1: [
        {
          name: 'LÀM PHIM',
          valueLv2: [
            { path: ' ', value: 'PHIM QUẢNG CÁO TVC' },
            { path: ' ', value: 'PHIM VIRAL VIDEO' },
            { path: ' ', value: 'MV QUẢNG CÁO' },
            { path: ' ', value: 'PHIM DOANH NGHIỆP' },
          ],
          path: '',
        },
        {
          name: 'TRUYỀN THÔNG',
          valueLv2: [
            { path: '', value: 'THU ÂM QUẢNG CÁO' },
            { path: '', value: 'CHỤP ẢNH QUẢNG CÁO' },
            { path: '', value: 'TỔ CHỨC SỰ KIỆN' },
            { path: '', value: 'BOOKING KOL' },
          ],
          path: '',
        },
        {
          name: 'QUẢNG CÁO',
          valueLv2: [
            { path: ' ', value: 'QUẢNG CÁO TRUYỀN HÌNH' },
            { path: ' ', value: 'QUẢNG CÁO RADIO' },
            { path: ' ', value: 'QUẢNG CÁO THANG MÁY' },
            { path: ' ', value: 'QUẢNG CÁO XE BUÝT TAXI' },
            { path: ' ', value: 'QUẢNG CÁO BẢNG BIỂN' },
          ],
          path: '',
        },
        {
          name: 'DIGITAL MARKETINGv',
          valueLv2: [],
          path: '',
        },
        {
          name: 'VĂN HOÁ DOANH NGHIỆP',
          valueLv2: [
            { path: ' ', value: 'TRUYỀN THÔNG NỘI BỘ' },
            { path: ' ', value: 'THƯƠNG HIỆU TUYỂN DỤNG' },
            { path: ' ', value: 'VĂN HÓA - GIẢI TRÍ' },
          ],
          path: '',
        },
        {
          name: 'CỘNG ĐỒNG',
          valueLv2: [
            { path: '', value: 'BRAND THƯƠNG HIỆU' },
            { path: '', value: 'CHIẾN LƯỢC THƯƠNG HIỆU' },
            { path: '', value: 'SÁNG TẠO' },
            { path: '', value: 'THỊ TRƯỜNG' },
            { path: '', value: 'CHIẾN DỊCH THÀNH CÔNG' },
          ],
          path: '',
        },
        {
          name: 'BẢN TIN DỊCH VỤ',
          valueLv2: [],
          path: '',
        },
      ],
      path: '',
    },
    {
      name: 'Liên hệ tư vấn',
      valueLv1: [],
      path: '',
    },
  ];

  ngOnInit(): void {}

  showInput() {
    this.showInputSearch = !this.showInputSearch;
  }
  showMenu(){
    this.checkBtnMenu = !this.checkBtnMenu
  }
  menuLv1(data : any){
    console.log(data);

  }
}

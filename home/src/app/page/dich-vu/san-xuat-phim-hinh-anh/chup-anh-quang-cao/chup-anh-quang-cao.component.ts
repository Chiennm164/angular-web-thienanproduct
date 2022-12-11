import { Component } from '@angular/core';

@Component({
  selector: 'app-chup-anh-quang-cao',
  templateUrl: './chup-anh-quang-cao.component.html',
  styleUrls: ['./chup-anh-quang-cao.component.scss'],
})
export class ChupAnhQuangCaoComponent {
  banner: any;
  gioiThieu: any;
  navigation: any;
  khachHangNoiVeChungToi: any;
  sanPhamThucHien: any;

  dichVu: any;

  ngOnInit(): void {
    this.banner = {
      title: 'Dịch vụ chụp ảnh quảng cáo',
      desc: 'Vietstarmax với hơn 12 năm hoạt động trong lĩnh vực quảng cáo và truyền thông chính là sự lựa chọn uy tín và đáng tin cậy cho các doanh nghiệp',
      background:
        'https://vietstarmax.vn/images/2020/06/19/banner-chup-anh-quang-cao.jpg',
      colorTextWhite: true,
    };

    this.navigation = [
      { text: 'Giới thiệu và lợi ích', url: '#' },
      { text: 'Tại sao chọn vsm', url: '#' },
      { text: 'Quy trình sản xuất', url: '#' },
      { text: 'Cam kết dịch vụ', url: '#' },
    ];

    this.gioiThieu = {
      header: {
        iconUrl:
          'https://vietstarmax.vn/images/2020/06/20/chup-anh-quang-cao.png',
        title: 'Giới thiệu và lợi ích của Chụp ảnh quảng cáo',
        desc: [
          'Chụp ảnh quảng cáo là hình thức song song trong mỗi dự án làm phim quảng cáo hay phim phóng sự. Ngoài ra chụp ảnh quảng cáo còn xuất phát từ nhu cầu cần thiết về chất lượng hình ảnh và thiết kế của doanh nghiệp. Đối với mỗi nhu cầu khác nhau, chụp ảnh quảng cáo được cung cấp cho khách hàng cũng khác nhau, hãy tìm hiểu chi tiết về dịch vụ này cùng Vietstarmax ngay bên dưới đây.',
        ],
      },
      content: {
        urlContent:
          'https://vietstarmax.vn/images/2020/07/01/chup-anh-quang-cao2.jpg',
        title: 'Chụp ảnh quảng cáo và các hình thức',
        desc: [
          {
            title: '',
            desc: 'Sự phát triển của Internet kéo theo sự phát triển của các ngành hàng hóa dịch vụ tăng trưởng mạnh mẽ. Khách hàng mua bán và tìm hiểu thông tin trên các mạng xã hội, công cụ tìm kiếm về cả sản phẩm lẫn doanh nghiệp ngày một nhiều và là hình thức phổ biến. Chính vì đó mà thúc đẩy nhiều doanh nghiệp cần tạo độ tin tưởng với khách hàng, đối tác không chỉ bằng các nội dung bài viết thông thường mà còn cả về hình ảnh và video',
          },
          {
            title: '',
            desc: 'Để có thể gây dựng sự tin tưởng lâu dài, việc tạo ra bộ hình ảnh về doanh nghiệp, về sản phẩm là yếu tố tất yếu. Đồng thời nó được phát triển thành dịch vụ chụp ảnh quảng cáo mà các agency cung cấp cho doanh nghiệp có nhu cầu.',
          },
        ],
      },
    };

    this.dichVu = {
      title: 'Quy trình chụp ảnh quảng cáo chuyên nghiệp tại Vietstarmax',
      content: {
        desc: [
          'Tìm hiểu nhu cầu của khách hàng và tư vấn dịch vụ chụp ảnh quảng cáo phù hợp theo yêu cầu, ngân sách của doanh nghiệp',
          'Sáng tạo ý tưởng và lên concept chụp ảnh quảng cáo.',
          'Giai đoạn thực hiện chụp ảnh',
          'Hoàn thiện và bàn giao sản phẩm',
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/06/11/san-xuat-tvc-bg.jpg',
      },
    };

    this.sanPhamThucHien = [];

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Chụp ảnh quảng cáo' },
    ];
  }
}

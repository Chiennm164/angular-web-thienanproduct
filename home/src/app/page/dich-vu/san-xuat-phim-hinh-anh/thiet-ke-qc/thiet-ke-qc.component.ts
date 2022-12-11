import { Component } from '@angular/core';

@Component({
  selector: 'app-thiet-ke-qc',
  templateUrl: './thiet-ke-qc.component.html',
  styleUrls: ['./thiet-ke-qc.component.scss'],
})
export class ThietKeQcComponent {
  banner: any;
  navigation: any;
  gioiThieu: any;
  loiIch: any;

  taiSao: any;
  khachHangNoiVeChungToi: any;

  list: any;

  ngOnInit(): void {
    this.banner = {
      title: 'Dịch vụ thiết kế quảng cáo 2D - 3D',
      desc: 'Vietstarmax với hơn 12 năm hoạt động trong lĩnh vực quảng cáo và truyền thông chính là sự lựa chọn uy tín và đáng tin cậy cho các doanh nghiệp',
      background: 'https://vietstarmax.vn/images/2020/06/20/banner-tk-2d3d.jpg',
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
          'https://vietstarmax.vn/images/2020/06/20/thiet-ke-2d-quang-cao.png',
        title: 'Dịch vụ thiết kế quảng cáo 2D',
        desc: [
          'Bạn muốn tìm dịch vụ thiết kế quảng cáo 2D chuyên nghiệp với mức chi phí hợp lí? Bạn muốn một dịch vụ hiệu quả và tin cậy? Với đội ngũ chuyên nghiệp và thấu hiểu được khách hàng, Vietstarmax cung cấp dịch vụ thiết kế quảng cáo 2D với những mẫu thiết kế ấn tượng và độc đáo',
        ],
      },
      content: {
        title: 'Thiết kế quảng cáo 2D là gì?',
        urlContent:
          'https://vietstarmax.vn/images/bai-dich-vu/thiet-ke-2d/tk2d.jpg',
        desc: [
          {
            title: '',
            desc: 'Thiết kế quảng cáo 2D là các hình ảnh được thiết kế 2 chiều được sử dụng trong các bản vẽ thiết kế cơ khí, kiến trúc, game, banner, pano, standee,.... sử dụng trong in ấn bao bì, nhãn mác thương hiệu sản phẩm. Cuộc sống xung quanh chúng ta luôn có rất nhiều các hình ảnh 2D được thiết kế tỉ mỉ, và với quảng cáo thì chúng càng quan trọng.',
          },
          {
            title: '',
            desc: 'Các hình ảnh được thiết kế quảng cáo 2D có tác động trực tiếp tới hành vi và sức mua của khách hàng nếu chúng có đủ sức hấp dẫn. Chính vì đó mà mỗi doanh nghiệp luôn sử dụng các dịch vụ thiết kế quảng cáo 2D trên biển hiệu, bảng biển, pano, và có cả làm phim quảng cáo 2D.',
          },
        ],
      },
    };

    this.loiIch = {
      title: 'Lợi ích của dịch vụ thiết kế quảng cáo 2D',
      content: {
        desc: [
          {
            title: '',
            desc: 'Hình ảnh được thiết kế chuyên nghiệp mang theo câu chuyện cốt yếu của nhãn hàng, thương hiệu, truyền tải đúng thông điệp',
          },
          {
            title: '',
            desc: 'Dịch vụ thiết kế quảng cáo 2D giúp các thiết kế được đồng nhất và tăng khả năng nhận diện thương hiệu.',
          },
          {
            title: '',
            desc: 'Các thiết kế bắt mắt, ấn tượng ghi điểm với khách hàng và là một phần kích thích sự tiêu dùng sử dụng sản phẩm từ đó giúp tăng doanh thu cho doanh nghiệp.',
          },
          {
            title: '',
            desc: 'Với các thiết kế 2D làm phim quảng cáo, video sẽ tăng độ tin tưởng với khách hàng và thể hiện sự chuyên nghiệp, có đầu tư vào hình ảnh.',
          },
          {
            title: '',
            desc: 'Tăng hiệu quả bán hàng, chống lại các bên đối thủ sử dụng lại hình ảnh sản phẩm của doanh nghiệp.',
          },
          {
            title: '',
            desc: 'Giúp tăng cường độ tương tác với khách hàng.',
          },
        ],
        urlImg:
          'https://vietstarmax.vn/images/bai-dich-vu/thiet-ke-2d/tk2d2.jpg',
      },
    };

    this.taiSao = {
      header: {
        title: 'Tại sao nên chọn dịch vụ thiết kế quảng cáo 2D tại Vietstarmax',
        desc: '',
      },
      content: {
        left: [
          {
            title:
              'Với đội ngũ nhân viên thiết kế chuyên nghiệp, nắm bắt được nhu cầu của khách hàng, Vietstarmax luôn hoàn thành công việc hiệu quả và trả file thiết kế quảng cáo 2D đẹp, ấn tượng và độc đáo.',
            desc: [],
          },
          {
            title:
              'Khách hàng luôn được hỗ trợ tư vấn chi tiết các loại hình dịch vụ phù hợp nhất trong kế hoạch quảng cáo.',
            desc: [],
          },
          {
            title:
              'Doanh nghiệp nhận được các file thiết kế quảng cáo đúng như mong muốn với chất lượng hình ảnh cao, phù hợp với yêu cầu.',
            desc: [],
          },
        ],
        right: [
          {
            title:
              'Xây dựng kế hoạch và thực hiện kế hoạch nghiêm túc, nhanh chóng, tiết kiệm thời gian và chi phí cho khách hàng sử dụng dịch vụ',
            desc: [],
          },
          {
            title:
              'Tôn trọng deadline, giao sản phẩm đúng hẹn, đúng mô tả, nâng cấp chất lượng dịch vụ qua mỗi lần hợp tác',
            desc: [],
          },
          {
            title:
              'VIETSTARMAX không chỉ cung cấp dịch thiết kế quảng cáo 2D mà còn cung cấp nhiều hình thức quảng cáo khác như sản xuất tvc quảng cáo, làm phim doanh nghiệp, làm phim quảng cáo 3D, chụp ảnh quảng cáo,.... đáp ứng các nhu cầu khác nhau của doanh nghiệp.',
            desc: [],
          },
        ],
      },
      lienhe: [
        {
          text: 'ĐỂ NHẬN TƯ VẤN CHI TIẾT XIN VUI LÒNG LIÊN HỆ HOTLINE',
          textLink: 'HÀ NỘI: 0982.840.840 - ĐT: 024.3555.3296',
          phone: '0982840840',
        },
        {
          text: '',
          textLink: 'HOTLINE HCM: 0962804086 - ĐT: 028.6293.9653',
          phone: '0962804086',
        },
      ],
      luuY: null,
    };

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Thiết kế quảng cáo 2D' },
    ];

    this.list = [];
  }
}

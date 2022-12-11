import { Component } from '@angular/core';

@Component({
  selector: 'app-thu-am-qc',
  templateUrl: './thu-am-qc.component.html',
  styleUrls: ['./thu-am-qc.component.scss'],
})
export class ThuAmQcComponent {
  textbtn: any = 'Hotline thu âm 0988 343 943';
  banner: any;
  gioiThieu: any;

  dichVu: any;

  navigation: any;

  khachHangNoiVeChungToi: any;

  ngOnInit(): void {
    this.banner = {
      title: 'Dịch vụ thu âm quảng cáo - Radio voice',
      desc: 'Vietstarmax với hơn 12 năm hoạt động trong lĩnh vực quảng cáo và truyền thông chính là sự lựa chọn uy tín và đáng tin cậy cho các doanh nghiệp',
      background:
        'https://vietstarmax.vn/images/2020/06/20/banner-qc-radio.jpg',
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
          'https://vietstarmax.vn/images/2020/06/20/thu-am-qoang-cao.png',
        title: 'Giới thiệu và lợi ích của Thu âm quảng cáo',
        desc: [
          'Dịch vụ Thu âm quảng cáo hàng đầu do VietstarMax cung cấp nhằm đáp ứng nhu cầu tiếp thị sản phẩm và quảng bá doanh nghiệp theo lối truyền thống. Dịch vụ thu âm quảng cáo do chúng tôi cung cấp được đầu tư kỹ càng về công nghệ máy móc và nhân sự chuyên nghiệp, đảm bảo cho ra đời những sản phẩm quảng cáo bằng giọng nói có tính truyền tải cao nhất.',
          'Quảng cáo tiếp thị khuyến mại hiện đang là chìa khoá đem lại doanh thu lớn cho mỗi doanh nghiệp. Thực tế cho thấy hiệu quả quảng cáo đem lại từ quảng cáo khuyến mại là rất lớn và rất nhiều chủ doanh nghiệp đã không ngần ngại bỏ ra một số tiền lớn để đầu tư cho quảng cáo để giúp thương hiệu và sản phẩm của mình được nhiều khách hàng biết tới chỉ trong thời gian ngắn nhất.',
          'Chính vì lý do đó mà chúng tôi đem lại cho Quý doanh nghiệp những dịch vụ và hình thức quảng cáo hiệu quả nhất mà tiết kiệm được nhiều thời gian và chi phí nhất.',
        ],
      },
      content: {
        urlContent:
          'https://vietstarmax.vn/images/dich-vu-thu-am-quang-cao-vietstarmax.jpg',
        desc: [
          {
            title:
              'Một trong những hình thức Quảng cáo khuyến mại chi phí thấp nhất mà hiệu quả và sức lan toả của nó cũng rất rộng lớn, đó chính là QUẢNG CÁO BẰNG GIỌNG NÓI (VOICE)',
            desc: 'Không gì có thể dễ nghe và dễ truyền tải thông điệp nội dung đến khách hàng hơn là giọng nói đúng cảm xúc và ngữ điệu.',
          },
          {
            title: '',
            desc: 'Quý Công ty có thể sử dụng những File thu âm quảng cáo của chúng tôi để quảng bá công ty mình qua nhiều kênh như: Mạng xã hội như Youtube , Facebook, Website của công ty, Up trên các trang báo điện tử khác hay đơn giản chỉ cần bạn bật File âm thanh của chúng tôi lên trong không gian trưng bày sản phẩm của Công ty bạn để những người khách thăm quan cửa hàng và Showroom có thể nghe thấy rồi biết đến được nhiều thông tin hay và hữu ích về công ty bạn, và cập nhật được những thông tin khuyến mại ưu đãi hấp dẫn của công ty bạn vừa đưa ra.',
          },
        ],
      },
    };

    this.dichVu = {
      title: 'Dịch vụ làm phim viral video bao gồm',
      content: {
        desc: [
          'Tư vấn kịch bản đúng insight của khách hàng',
          'Quay tiền kỳ phim quảng cáo tại bối cảnh',
          'Dựng hậu kỳ phim quảng cáo tại Vietstarmax',
          'Lồng tiếng, âm thanh, kỹ xảo, 2D, 3D',
          'Final phim hoàn thiện',
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/06/11/san-xuat-tvc-bg.jpg',
      },
    };

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Thu âm quảng cáo - Radio voice' },
    ];
  }
}

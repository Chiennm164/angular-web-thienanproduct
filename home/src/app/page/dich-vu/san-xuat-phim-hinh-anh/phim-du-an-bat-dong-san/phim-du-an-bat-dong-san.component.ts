import { Component } from '@angular/core';

@Component({
  selector: 'app-phim-du-an-bat-dong-san',
  templateUrl: './phim-du-an-bat-dong-san.component.html',
  styleUrls: ['./phim-du-an-bat-dong-san.component.scss'],
})
export class PhimDuAnBatDongSanComponent {
  banner: any;
  gioiThieu: any;
  navigation: any;
  khachHangNoiVeChungToi: any;
  taiSao: any;

  loiIchDV: any;

  ngOnInit(): void {
    this.banner = {
      title: 'Dịch vụ sản xuất Phim dự án 3D Bất động sản',
      desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
      background:
        'https://vietstarmax.vn/images/2020/07/01/banner-phim-bds3.jpg',
      colorTextWhite: false,
    };

    this.navigation = [
      { text: 'Giới thiệu và lợi ích', url: '#' },
      { text: 'Tại sao chọn vsm', url: '#' },
      { text: 'Quy trình sản xuất', url: '#' },
      { text: 'Cam kết dịch vụ', url: '#' },
    ];

    this.gioiThieu = {
      header: {
        iconUrl: 'https://vietstarmax.vn/images/2020/06/15/viral-video-ico.png',
        title: 'Giới thiệu và lợi ích của phim 3D bất động sản',
        desc: [
          'Phim 3D bất động sản ngày càng quan trọng trong một chiến lược truyền thông; bởi sự bùng nổ mạnh mẽ của công nghệ đồ họa và đòi hỏi của thị trường.',
        ],
      },
      content: {
        urlContent:
          'https://vietstarmax.vn/images/2020/07/01/bds-gioi-thieu4.jpg',
        title: 'Tìm hiểu về phim 3D bất động sản?',
        desc: [
          {
            title: '',
            desc: 'Phim 3D bất động sản hay còn gọi là diễn họa kiến trúc được thể hiện một cách đa dạng và phong phú qua các loại hình ảnh như',
            list: [
              'Phối cảnh tổng quan toàn dự án',
              'Cận cảnh các khu vực cần giới thiệu',
              'Ngoại thất của mỗi công trình như sơn, cây, hồ nước',
              'Chi tiết nội thất từng căn hộ, như giường, tủ, bàn ghế',
            ],
          },
          {
            title: '',
            desc: 'Làm phim 3D dự án bất động sản là quá trình phối cảnh có sự kết hợp giữa nghệ thuật và công nghệ để truyền đạt đầy đủ những ý tưởng của các nhà thiết kế cũng như chủ đầu tư. Từ đó, hình thành cơ sở để nhà thiết kế và chủ đầu tư dễ dàng hình dung, trao đổi quan điểm thỏa thuận và nghiên cứu phương án tối ưu nhất. Dựa vào những hình ảnh 3D đó, nhà đầu tư và cả kiến trúc sư thiết kế có thể: Cùng thảo luận; đưa ra ý tưởng; thay đổi thiết kế từ nội quan đến tổng quan. Từ đó sẽ cung cấp ra thị trường một sản phẩm ấn tượng độc đáo và sáng tạo đúng mong muốn của chủ đầu tư.',
          },
          {
            title: '',
            desc: 'Phim 3D bất động sản được được sử dụng ở đâu?',
            list: [
              'Các hồ sơ đấu thầu cho dự án mới',
              'Tài liệu marketing truyền thông bán hàng',
              'Giải pháp truyền thông đa kênh nhất',
              'Cung cấp cho người mua nhà hiểu được quy mô của dự án',
            ],
          },
        ],
      },
    };

    this.loiIchDV = {
      left: {
        title: 'Lợi ích khi làm phim 3D bất động sản',
        urlImg: 'https://vietstarmax.vn/images/2020/07/01/bds-gioi-thieu.jpg',
        content: [
          {
            title: 'Đối với chủ đầu tư và nhà phát triển dự án',
            desc: [
              'Giúp cho nhà đầu tư nhìn nhận một cách trực quan, thực tế nhất mà nhà thiết kế không cần mất thời gian mô tả, giải thích.',
              'Linh hoạt, tăng hiệu quả tiếp thị và sự tin tưởng từ khách hàng.',
              'Tiết kiệm thời gian và tiền bạc khi đầu tư vào các giải pháp tiếp thị truyền thống',
              'Thể hiện sự chuyên nghiệp của dự án, không chỉ còn là việc chụp hình dự án bất động sản như cách thức cũ mà đã tiên tiến hơn.',
              'Theo kịp xu hướng tiếp thị chung của ngành quảng cáo bất động sản.',
            ],
          },
          {
            title: 'ĐỐI VỚI KHÁCH HÀNG',
            desc: [
              'Mang đến trải nghiệm trực quan cho khách hàng về dự án ngay cả trước khi hoàn thành.',
              'Để khách hàng cảm thấy hứng thú với dự án và căn hộ mà mình chọn lựa',
              'Giúp khách hàng dễ dàng hơn trong việc lựa chọn phương án đầu tư hợp lý.',
            ],
          },
        ],
      },
      right: {
        title: 'Dịch vụ làm phim 3D bất động sản',
        urlImg: 'https://vietstarmax.vn/images/2020/06/11/san-xuat-tvc-bg.jpg',
        content: [
          'Tư vấn kịch bản đúng insight của khách hàng',
          'Lên kịch bản và phân cảnh chi tiết cho Phim dự án bất động sản',
          'Vẽ Storyboard cho phân cảnh',
          'Vẽ Model nhân vật, tạo xương cốt, lên phối cảnh dự án',
          'Dựng hậu kỳ, VFX, animation tại Vietstarmax',
          'Lồng tiếng, âm thanh, kỹ xảo, 2D, 3D',
          'Final Phim Phim dự án bất động sản hoàn thiện',
        ],
      },
    };

    this.taiSao = {
      header: null,
      content: {
        left: null,
        right: null,
      },
      lienhe: null,
      luuY: {
        title: 'Các lưu ý khi chọn đối tác làm Phim dự án 3D Bất động sản',
        desc: [
          'Chọn đơn vị có nhiều năm kinh nghiệm và có nhiều phim quảng cáo 3D dự án chất lượng cao',
          'Phải thẩm định năng lực trực tiếp tại văn phòng đối tác xem có quy mô lớn mạnh không',
          'Không nên chọn cá nhân hoặc báo giá làm phim quảng cáo 3D dự án quá rẻ sẽ ảnh hưởng chất lượng',
        ],
      },
    };

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Phim dự án Bất động sản' },
    ];
  }
}

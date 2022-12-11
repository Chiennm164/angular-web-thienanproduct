import { Component } from '@angular/core';

@Component({
  selector: 'app-san-xuat-phim-qc-animation',
  templateUrl: './san-xuat-phim-qc-animation.component.html',
  styleUrls: ['./san-xuat-phim-qc-animation.component.scss'],
})
export class SanXuatPhimQcAnimationComponent {
  banner: any;
  gioiThieu: any;
  loiIch: any;
  dichVu: any;
  taiSao: any;
  navigation: any;

  khachHangNoiVeChungToi: any;

  sanPhamThucHien: any;

  ngOnInit(): void {
    this.banner = {
      title: 'Dịch vụ sản xuất Phim 3D',
      desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
      background: 'https://vietstarmax.vn/images/2020/06/15/banner-phim3d.jpg',
      colorTextWhite: false,
    };

    this.navigation = [
      { text: 'Giới thiệu và lợi ích', url: '#' },
      { text: 'Tại sao chọn vsm', url: '#' },
      { text: 'Quy trình sản xuất', url: '#' },
      { text: 'Cam kết dịch vụ', url: '#' },
      { text: 'STORYBOARD', url: '#' },
    ];

    this.gioiThieu = {
      content: {
        urlContent:
          'https://vietstarmax.vn/images/2020/06/15/3d-gioi-thieu.jpg',
        desc: [
          {
            title: '',
            desc: 'Phim quảng cáo 3D animation là hình thức phim quảng cáo sử dụng kỹ xảo đồ hoạ 2D hoặc 3D để tạo câu chuyện cho kịch bản, đặc biệt với những phim quảng cáo không thể quay để khán giả hình dung ra nội dung thì hình thức 3D là hình thức trực quan và sinh động nhất.',
          },
          {
            title: '',
            desc: 'Phim quảng cáo 3D có thể là các nhân vật hoạt hình, có thể là các sản phẩm đồ vật như tranh, bát đũa, hoa quả, ti vi tủ lạnh được nhân cách hoá, cũng có thể là rau củ quả xanh mướt mà chỉ có trong câu chuyện cổ tích huyền thoại mới mô tả được, hoặc đặc biệt là các con động vật như gấu, chó, chim cánh cụt, khỉ, trâu, rồng. Khi đó TVC quảng cáo 3D được coi là lựa chọn số 1 dành cho các nhà quảng cáo',
          },
        ],
      },
    };

    this.loiIch = {
      title: 'Lợi ích khi làm phim quảng cáo 3D animation',
      content: {
        desc: [
          {
            title: '',
            desc: 'Thông qua TVC quảng cáo 3D khách hàng sẽ hình dung rõ nội dung mà nhãn hàng muốn truyền tải',
          },
          {
            title: '',
            desc: 'Các sản phẩm qua bàn tay hoạ sĩ 3D sẽ trở lên sống động nhân cách hoá như con người',
          },
          {
            title: '',
            desc: 'Nhãn hàng có thể thoả sức sáng tạo bất tận với kỹ xảo 3D tuyệt định của công nghệ',
          },
          {
            title: '',
            desc: 'Phim quảng cáo sẽ nổi bật và vô cùng đặc biệt so với hàng ngàn TVC quảng cáo khác trên thị trường',
          },
          {
            title: '',
            desc: 'Độ ghi nhớ và lan toả của những TVC quảng cáo 3D mạnh mẽ hơn và lan truyền với tốc độ rất lớn',
          },
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/07/01/3d-loiich.jpg',
      },
    };

    this.dichVu = {
      title: 'Dịch vụ làm phim quảng cáo 3D animation bao gồm',
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

    this.taiSao = {
      header: null,
      content: {
        left: null,
        right: null,
      },
      lienhe: null,
      luuY: {
        title: 'Các lưu ý khi chọn đối tác làm phim quảng cáo 3D animation',
        desc: [
          'Chọn đơn vị có nhiều năm kinh nghiệm và có nhiều phim quảng cáo 3D animation chất lượng cao',
          'Phải thẩm định năng lực trực tiếp tại văn phòng đối tác xem có quy mô lớn mạnh không',
          'Không nên chọn cá nhân hoặc báo giá làm phim quảng cáo 3D animation quá rẻ sẽ ảnh hưởng chất lượng',
        ],
      },
    };

    this.sanPhamThucHien = [
      {
        id: 1,
        text: '',
        active: true,
        list: [
          {
            urlImg:
              'https://vietstarmax.vn/images/THUMB/tvc-3D-biofil-kiddy-3D-animation.jpg',
            text: 'TVC 3D Biofil Kiddy | 3D Animation | Phim quảng cáo',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/lam-phim-quang-cao-3d.png',
            text: 'TVC 3D Sơn Xpaint | Phim quảng cáo TVC',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/phim-quang-cao-bia-dai-viet.webp',
            text: 'TVC Bia Đại Việt 2017 | Phim quảng cáo TVC',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/phim-quang-cao-bia-ha-noi-he-2018.png',
            text: 'TVC Bia Hà Nội khuyến mãi hè 2018 | Phim quảng cáo TVC',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/0new/thumbnails/phim-quang-cao-binh-nuoc-nong-feroli.webp',
            text: 'TVC Bình nước nóng FERROLI | Phim quảng cáo TVC',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/0new/thumbnails/bio-acimin.webp',
            text: 'TVC Bio Acimin 2019 | Phim quảng cáo',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/phim-quang-cao-3d-son-behr-dong-a.png',
            text: 'TVC Sơn BEHR | Phim quảng cáo TVC',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/0new/thumbnails/phim-quang-cao-3d-thiet-bi-bep-ferroli.webp',
            text: 'TVC Thiết bị bếp Ferroli | Phim quảng cáo TVC',
            link: '',
          },
        ],
      },
    ];

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Sản xuất phim quảng cáo 3D animation' },
    ];
  }
}

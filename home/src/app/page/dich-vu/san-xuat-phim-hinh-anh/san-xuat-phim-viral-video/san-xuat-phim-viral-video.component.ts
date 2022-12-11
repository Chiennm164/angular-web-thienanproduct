import { Component } from '@angular/core';

@Component({
  selector: 'app-san-xuat-phim-viral-video',
  templateUrl: './san-xuat-phim-viral-video.component.html',
  styleUrls: ['./san-xuat-phim-viral-video.component.scss'],
})
export class SanXuatPhimViralVideoComponent {
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
      title: 'Dịch vụ sản xuất Phim viral video',
      desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
      background:
        'https://vietstarmax.vn/images/2020/06/15/banner-viralvideo.jpg',
      colorTextWhite: false,
    };

    this.navigation = [
      { text: 'Giới thiệu và lợi ích', url: '#' },
      { text: 'Tại sao chọn vsm', url: '#' },
      { text: 'Quy trình sản xuất', url: '#' },
      { text: 'Cam kết dịch vụ', url: '#' },
      { text: 'Hậu trường', url: '#' },
    ];

    this.gioiThieu = {
      header: {
        iconUrl: 'https://vietstarmax.vn/images/2020/06/15/viral-video-ico.png',
        title: 'Giới thiệu và lợi ích của viral video',
        desc: [
          'Dịch vụ làm phim viral video chuyên nghiệp hiện đang được rất nhiều doanh nghiệp quan tâm với mong muốn tạo ra được một cú hit cho việc đẩy nhanh việc quảng bá hình ảnh, nhãn hiệu của sản phẩm thương mại tới một số lượng lớn người tiêu dùng tiềm năng. Một đoạn phim viral video sáng tạo đi kèm với một kế hoạch truyền thông được tính toán kỹ lưỡng sẽ giúp doanh nghiệp có được đột phá trong doanh thu bán hàng và marketing hình ảnh.',
        ],
      },
      content: {
        urlContent: 'https://vietstarmax.vn/images/2020/06/30/viral-gt.jpg',
        desc: [
          {
            title: '',
            desc: 'Trong kỷ nguyên của social media và giao tiếp qua Internet, ngày càng nhiều người sử dụng các trang mạng xã hội như Facebook, Twitter, Youtube,… Chỉ với một cú click đơn giản, một bài post có thể được chia sẻ tới hàng chục ngàn người trong vòng vài tiếng, thậm chí, vài phút.',
          },
          {
            title: '',
            desc: 'Hiện nay, video trở thành một công cụ hữu hiệu để “viral” nội dung, bởi nó thu hút một lượng cực lớn người xem. Không giống như các bài viết, video không cần người xem phải tốn thời gian để đọc, hiểu mà nó hấp dẫn ngay từ phần nghe- nhìn, thu hút nhanh chóng mọi đối tượng bất kể tuổi tác, địa vị.',
          },
          {
            title: '',
            desc: 'Một video được coi là viral khi nó đạt số lượng view, lượng like, share cao hơn 5- 10 lần so với mức thông thường (trong cùng khoảng thời gian).',
          },
        ],
      },
    };

    this.loiIch = {
      title: 'Lợi ích khi làm phim viral video',
      content: {
        desc: [
          {
            title: 'VIRAL VIDEO CÓ SỨC MẠNH LAN TỎA THEO CẤP SỐ NHÂN',
            desc: 'Khi nội dung của viral video chạm đúng cảm xúc người xem nó sẽ mang đến hiệu ứng lan truyền vô cùng lớn. Những Video Viral thường được xây dựng lồng ghép với hình ảnh thương hiệu. Khi Viral nhận được sự đồng cảm từ người xem sẽ làm gia tăng cảm tình với thương hiệu.',
          },
          {
            title: 'GIÁ TRỊ THƯƠNG HIỆU ĐƯỢC KHẲNG ĐỊNH',
            desc: 'Thông qua Viral Video, giá trị thương hiệu được thể hiện một cách chân thực, rõ ràng nhất. Nhờ vậy, hiệu quả định vị thương hiệu tốt hơn.',
          },
          {
            title: 'VIRAL VIDEO GIÚP GIA TĂNG MỨC ĐỘ NHẬN BIẾT THƯƠNG HIỆU',
            desc: 'Với mỗi viral video chất lượng, đạt được cảm xúc sẽ là đòn bẩy để hình ảnh thương hiệu ghi sâu vào tâm trí người xem.',
          },
          {
            title: 'VIRAL VIDEO TIẾT KIỆM CHI PHÍ',
            desc: 'Đây là hình thức truyền thông tiết kiệm chi phí mà hiệu quả mang lại không hề nhỏ.',
          },
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/06/30/viral-loiich.jpg',
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

    this.taiSao = {
      header: {
        title: 'Tại sao nên lựa chọn VietstarMAX làm đối tác sản xuất TVC',
        desc: 'Thị trường phim quảng cáo hiện nay có không ít công ty làm TVC quảng cáo. Song để tìm được một công ty sản xuất phim quảng cáo chuyên nghiệp, nhiều năm kinh nghiệm làm phim quảng cáo trên truyền hình như Vietstarmax là rất khó.',
      },
      content: {
        left: [
          {
            title:
              'Vietstarmax là đơn vị DUY NHẤT tại miền Bắc có đủ khả năng xây dựng chiến dịch tổng thể phim quảng cáo TVC, bao gồm:',
            desc: [
              'Lên định hướng sáng tạo kịch bản truyền thông qua TVC, sáng tạo slogan cho TVC, sáng tạo thông điệp truyền thông cho TVC',
              'Sản xuất tiền kỳ cùng với Đạo diễn trong nước và quốc tế chuyên nghiệp bài bản.',
              'Hoàn thiện hậu kỳ với tiêu chuẩn chất lượng của một Production House quốc tế, trang bị đầy đủ thiết bị hiện đại nhất.',
              'Lên kế hoạch truyền thông cho TVC trên các kênh truyền hình cả nước bằng phương pháp chỉ số Rating. Cam kết KPI tương tự như trên các kênh Online.',
            ],
          },
          {
            title: 'Trang thiết bị sản xuất hiện đại bậc nhất',
            desc: [
              'Hệ thống trang thiết bị tiền kỳ chất lượng 6K, 4K, full HD tiêu chuẩn quốc tế',
              'Hệ thống phòng dựng Hậu kỳ chuyện nghiệp Tại Công ty theo tiêu chuẩn hiện đại quốc tế: Máy Tính Server dựng phim chuyên dụng, Bàn dựng chỉnh màu Davince mới nhất, phòng thu âm, loa kiểm âm, Bàn Maccom',
              'Hệ thống server lưu trữ dữ liệu lên đến hơn 100.000 GB, đảm bảo lưu trữ dữ liệu của khách hàng trên 10 năm kể từ ngày hoàn thiện phim, nếu khách hàng mất phim gốc vẫn có cơ hội để tìm lại bản gốc sau 10 năm thất lạc phim.',
            ],
          },
        ],
        right: [
          {
            title: 'Nhân sự chuyên nghiệp',
            desc: [
              'Đội ngũ sáng tạo copywiter, account, tổ chức sản xuất đầy kinh nghiệm tư vấn tận tình.',
              'Làm với nhiều Đạo diễn, DOP, quay phim trong nước và nước ngoài nổi tiếng đến từ Mỹ, Thái Lan và Singapore',
              'Hợp tác với các đối tác làm hậu kỳ chuyên nghiệp tại Thái Lan và Singapore như: Digipost của Sing, Kantana của Thái, …',
            ],
          },
          {
            title: 'Kinh nghiệm 10 năm trong ngành',
            desc: [
              'Là đơn vị có 10 năm kinh nghiệm trong việc sản xuất phim quảng cáo TVC',
              'Đã từng làm cho hơn 200 nhãn hàng trong nước và quốc tế.',
            ],
          },
          {
            title: 'Đạt được nhiều giải thưởng danh giá',
            desc: [
              'Giải thưởng TVC Golden Bell (Quả chuông vàng) năm 2016 với sản phẩm “Bia Hà Nội xanh”.',
              'Top 10 ý tưởng quảng cáo sáng tạo Golden Bell',
            ],
          },
          {
            title: 'Tư vấn truyền thông TVC quảng cáo',
            desc: [
              'Tư vấn và thực hiện lập kế hoạch phát sóng trên các kênh truyền hình VTV, HTV, Vĩnh long và các kênh truyền hình uy tín',
              'Tư vấn và thực thi chiến lược phát hành TVC trên nền tảng online như: Youtube, facebook và trên nhiều nền tảng online khác',
            ],
          },
        ],
      },
      lienhe: [
        {
          text: 'Hãy xem ngay và luôn các sản phẩm của chúng tôi đã đặt hàng cho dự án mới của các bạn.',
          textLink: '',
          phone: '',
        },
        {
          text: '',
          textLink:
            'HÃY LIÊN HỆ NGAY TỚI VIETSTARMAX THEO HOTLINE: 0982 840 840 ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP!',
          phone: ' 0982840840',
        },
      ],
      luuY: {
        title: 'Các lưu ý khi chọn đối tác làm phim Viral video',
        desc: [
          'Chọn đơn vị có nhiều năm kinh nghiệm và có nhiều viral video chất lượng cao',
          'Phải thẩm định năng lực trực tiếp tại văn phòng đối tác xem có quy mô lớn mạnh không',
          'Không nên chọn cá nhân hoặc báo giá làm phim quảng cáo quá rẻ sẽ ảnh hưởng chất lượng',
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
            urlImg: 'https://vietstarmax.vn/images/phim-viral-bao-ngoc.jpg',
            text: 'Bánh Bảo Ngọc | Viral Về Nhà Đi Bố Mẹ',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/viral-video/VR_Bibabibo_bach_tuyet/bibabibo_bach_tuyet_phie_luu_ki.jpg',
            text: 'Bibabibo | Viral Bạch Tuyết Phiêu Lưu Ký | Parody Anh Thanh Niên',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/viral-ferroli-song-gio-do-duy-nam/Phim-ngan-song-gio-gia-dinh-do-du-nam-phim-viral-video.jpg',
            text: 'Bình Nước Nóng Ferroli | Viral Sóng Gió Gia Đình',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/tue-linh.jpg',
            text: 'Dược Phẩm Tuệ Linh |Viral Ước mơ bị đánh cắp',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/nagakawa-anh-thumb.jpg',
            text: 'Điều Hòa Nagakawa | Viral Video Định Mệnh Mùa Hè',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/viral-video/MV-buoc-SH-tien-linh/mv-buoc.webp',
            text: 'Điều Hòa Sunhouse | MV Bước Tiến Linh',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/viral-video/VIRAL-KARO-SOI-GA/viral-banh-karo-min.webp',
            text: 'Karo Sợi Gà Richy - Viral Nhật Kí Cách Ly',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/video-viral-shb.jpg',
            text: 'Ngân Hàng SHB | Quang Hải',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/nhung-manh-doi-song-song.jpg',
            text: 'Sunhouse Group | Viral Video Tết này đừng về nhà ăn tết ',
            link: '',
          },
        ],
      },
    ];

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Sản xuất phim viral video' },
    ];
  }
}

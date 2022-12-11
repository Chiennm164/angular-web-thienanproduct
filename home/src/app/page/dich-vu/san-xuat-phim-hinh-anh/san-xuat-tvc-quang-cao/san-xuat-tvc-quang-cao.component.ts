import { Component } from '@angular/core';

@Component({
  selector: 'app-san-xuat-tvc-quang-cao',
  templateUrl: './san-xuat-tvc-quang-cao.component.html',
  styleUrls: ['./san-xuat-tvc-quang-cao.component.scss'],
})
export class SanXuatTvcQuangCaoComponent {
  list: any = [
    {
      id: 1,
      text: 'TVC quảng cáo cao cấp',
      active: true,
      list: [
        {
          urlImg: 'https://vietstarmax.vn/images/TVC-JT-Express.png',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC - Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/VietstarMAX-TVC-MUTLICH-Thuong-hieu-nha-bep.png',
          text: 'VietstarMAX | TVC QUẢNG CÁO - MÜTLICH - THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/TVC_Majestic.jpg',
          text: 'VietstarMAX | TVC Tết 2022 | Bánh quy Majestic - Richy',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/Magicore.jpg',
          text: 'VietstarMAX | TVC MAGICORE - Sức bật của quảng cáo Việt',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/TVC_VMIC.jpg',
          text: 'VietstarMAX | Phim TVC VMIC - Tổng công ty Hàng Hải Việt Nam',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/X_s_Bnh_Phc.jpg',
          text: 'TVC Quảng cáo - Xổ số Bình Phước | VietstarMAX',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/MIKA.png',
          text: 'TVC Quảng cáo - Công ty chuyên sản xuất và kinh doanh Vật liệu xây dựngMIKADO ',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/Beauty_Sm.png',
          text: 'TVC thực phẩm bảo vệ sức khỏe Power Sâm và Beauty Sâm | Phim quảng cáo',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/Estinfo_-_VietstarMAX.png',
          text: 'TVC - Thực phẩm bảo vệ sức khỏe ESTINFOR - Vân Hugo',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/tvc-quang-cao-smoovy.webp',
          text: 'TVC Smovy | Phim quảng cáo TVC',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/TVC-quang-cao/tvc-kim-dom-khang/kim-dom-khang.jpg',
          text: 'TVC Kim Đởm Khang | Phim quảng cáo TVC',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/TVC-quang-cao/Ferroli-Prado-binh-nuoc-nong/TVC-quang-cao-binh-nuoc-nong-ferroli-nam-2020.jpg',
          text: 'TVC Bình nước nóng Ferroli Prado | Phim quảng cáo TVC',
          link: '',
        },
      ],
    },
    {
      id: 2,
      text: 'TVC quảng cáo tiêu chuẩn',
      active: false,
      list: [
        {
          urlImg: 'https://vietstarmax.vn/images/Beauty_Sm.png',
          text: 'TVC thực phẩm bảo vệ sức khỏe Power Sâm và Beauty Sâm | Phim quảng cáo',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/Estinfo_-_VietstarMAX.png',
          text: 'TVC - Thực phẩm bảo vệ sức khỏe ESTINFOR - Vân Hugo',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/tvc-quang-cao-smoovy.webp',
          text: 'TVC Smovy | Phim quảng cáo TVC',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/TVC-quang-cao/tvc-kim-dom-khang/kim-dom-khang.jpg',
          text: 'TVC Kim Đởm Khang | Phim quảng cáo TVC',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/TVC-quang-cao/Ferroli-Prado-binh-nuoc-nong/TVC-quang-cao-binh-nuoc-nong-ferroli-nam-2020.jpg',
          text: 'TVC Bình nước nóng Ferroli Prado | Phim quảng cáo TVC',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/TVC-JT-Express.png',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC - Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/images/VietstarMAX-TVC-MUTLICH-Thuong-hieu-nha-bep.png',
          text: 'VietstarMAX | TVC QUẢNG CÁO - MÜTLICH - THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/TVC_Majestic.jpg',
          text: 'VietstarMAX | TVC Tết 2022 | Bánh quy Majestic - Richy',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/Magicore.jpg',
          text: 'VietstarMAX | TVC MAGICORE - Sức bật của quảng cáo Việt',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/TVC_VMIC.jpg',
          text: 'VietstarMAX | Phim TVC VMIC - Tổng công ty Hàng Hải Việt Nam',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/X_s_Bnh_Phc.jpg',
          text: 'TVC Quảng cáo - Xổ số Bình Phước | VietstarMAX',
          link: '',
        },
        {
          urlImg: 'https://vietstarmax.vn/images/MIKA.png',
          text: 'TVC Quảng cáo - Công ty chuyên sản xuất và kinh doanh Vật liệu xây dựngMIKADO ',
          link: '',
        },
      ],
    },
  ];

  banner: any;
  gioiThieu: any;
  loiIch: any;
  dichVu: any;
  taiSao: any;

  navigation: any;

  questions: any[] = [];

  ngOnInit(): void {
    this.questions = [
      {
        id: 1,
        active: true,
        show: 'TVC quảng cáo là gì?',
        hidden:
          'TVC là 1 clip quảng cáo thời lượng ngắn (thông thường từ 30s trở xuống) phát trên truyền hình hoặc nền tảng quảng cáo khác.',
      },
      {
        id: 2,
        active: false,
        show: 'Chi phí sản xuất TVC quảng cáo là bao nhiêu?',
        hidden:
          ' Chi phí sản xuất TVC phụ thuộc nhiều yếu tố (Casting diễn viên, độ phức tạp cảnh quay, kịch bản,...). Liên hệ ',
      },
      {
        id: 3,
        active: false,
        show: 'Thời lượng TVC quảng cáo là bao nhiêu?',
        hidden:
          ' Thời lượng TVC phổ biến nhất là từ 30s đổ xuống để phát sóng trên truyền hình. Thời lượng có thể dài hơn nếu TVC được phát ở các kênh cho phép phát video quảng cáo thời lượng dài.',
      },
      {
        id: 4,
        active: false,
        show: 'Mất bao lâu để làm xong một TVC?',
        hidden:
          ' Vietstarmax thực hiện 1 dự án sản xuất TVC quảng cáo trong vòng 2 tuần.',
      },
    ];

    this.banner = {
      title: 'Dịch vụ sản xuất TVC quảng cáo',
      desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
      background:
        'https://vietstarmax.vn/images/2020/07/10/banner-phim-tvc3.webp',
      colorTextWhite: false,
    };

    this.navigation = [
      { text: 'Giới thiệu và lợi ích', url: '#' },
      { text: 'Tại sao chọn vsm', url: '#' },
      { text: 'Quy trình sản xuất', url: '#' },
      { text: 'Cam kết dịch vụ', url: '#' },
      { text: 'Hậu trường', url: '#' },
      { text: 'Storyboard', url: '#' },
    ];

    this.gioiThieu = {
      header: {
        iconUrl: 'https://vietstarmax.vn/images/2020/06/11/play-btn-red.png',
        title: 'Giới thiệu và lợi ích của phim quảng cáo TVC',
        desc: [
          'Ngày nay cụm từ TVC quảng cáo đã không còn xa lạ với các doanh nghiệp Việt Nam. Chỉ trong một khối lượng thời gian ngắn tính bằng giây, sản xuất TVC quảng cáo ấn tượng – độc đáo – nhắm trúng đích hoàn toàn có thể mang lại cho doanh nghiệp của bạn những lợi nhuận khổng lồ. Tuy nhiên, nếu sản xuất TVC quảng cáo thiếu chuyên nghiệp, kịch bản đầu tư ít chất xám và không thể hiện được đặc trưng doanh nghiệp chắc chắn sẽ là một lỗ hổng và sự lãng phí lớn làm giảm hiệu quả của cả chiến dịch marketing mà bạn đang thực hiện.',
        ],
      },
      content: {
        urlContent:
          'https://vietstarmax.vn/images/2020/07/10/san-xuat-tvc-1.webp',
        desc: [
          {
            title: 'Là chuyên gia trong lĩnh vực sản xuất TVC quảng cáo',
            desc: 'Vietstarmax hoàn toàn thấu hiểu những băn khoăn của doanh nghiệp trong việc đưa ra quyết định về: Kịch bản quảng cáo, phương hướng truyền tải thông điệp và hình ảnh thương hiệu, mức chi phí phù hợp… Vì vậy, bằng tất cả những kinh nghiệm, sự đam mê và khối óc sáng tạo tuyệt vời của đội ngũ sản xuất TVC quảng cáo, Vietstarmax sẽ mang đến cho doanh nghiệp những tư vấn hiệu quả nhất để phát huy tối đa ngân sách, đồng thời thực hiện những quảng cáo vàng tạo nên giá trị thương hiệu mà doanh nghiệp mong muốn.',
          },
          {
            title:
              'Am hiểu trong các lĩnh vực: Sản xuất phim, sản xuất TVC quảng cáo, xử lý hậu kỳ, kỹ xảo 3D, 2D animation, thiết kế nhân vật hoạt hình',
            desc: '',
          },
          {
            title:
              'Sự hài lòng tuyệt đối của các doanh nghiệp về dịch vụ sản xuất TVC quảng cáo của Vietstarmax chính là động lực lớn thúc đẩy chúng tôi chuyên nghiệp và sáng tạo không ngừng!',
            desc: '',
          },
          {
            title:
              'Thời lượng phim quảng cáo TVC gồm có 30s, 15 và 5 giây phát trên truyền hình, và một hình thức mới nữa trên online là TVC Bumper Ads với thời lượng 6s',
            desc: '',
          },
        ],
      },
    };

    this.loiIch = {
      title: 'Lợi ích khi làm phim TVC quảng cáo',
      content: {
        desc: [
          {
            title: 'KHẲNG ĐỊNH THƯƠNG HIỆU',
            desc: 'Phim quảng cáo TVC 30s truyền tải thông điệp của mình đến khán giả nhanh nhất và uy tín nhất',
          },
          {
            title: 'KÍCH THÍCH MUA HÀNG',
            desc: 'Hầu hết các TVC đều đặt mục tiêu kêu gọi người tiêu dùng mua hàng và doanh số tăng vọt',
          },
          {
            title: 'YÊU THÍCH THƯƠNG HIỆU',
            desc: 'Khi khán giả xem nhiều lần trên truyền hình khách hàng sẽ có cảm thấy sản phẩm uy tín và yêu thích thương hiệu',
          },
          {
            title: 'GIỮ CHÂN KHÁCH HÀNG',
            desc: 'TVC quảng cáo liên tục phát sóng sẽ giữ chân khách hàng chỉ quan tâm đển sản phẩm của nhãn hàng đó',
          },
        ],
        urlImg:
          'https://vietstarmax.vn/images/2020/07/10/tvc-quang-cao-tien-linh-sunhouse.webp',
      },
    };

    this.dichVu = {
      title: 'Dịch vụ làm phim quảng cáo TVC bao gồm',
      content: {
        desc: [
          'Tư vấn kịch bản đúng insight của khách hàng',
          'Quay tiền kỳ phim quảng cáo tại bối cảnh',
          'Dựng hậu kỳ phim quảng cáo tại Vietstarmax',
          'Lồng tiếng, âm thanh, kỹ xảo, 2D, 3D',
          'Final phim hoàn thiện',
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/07/10/san-xuat-tvc-bg.webp',
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
          text: 'Đến với dịch vụ sản xuất TVC quảng cáo của Vietstarmax bạn không chỉ nhận được sản phẩm chất – nhất, mà còn được phục vụ tận tình, tận tâm.',
          textLink: '',
          phone: '',
        },
        {
          text: 'Để sản xuất TVC tại Hà Nội và khu vực miền Bắc.',
          textLink:
            'LIÊN HỆ VIETSTARMAX THEO HOTLINE: 0982 840 840 ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP!',
          phone: ' 0982840840',
        },
        {
          text: 'Để làm TVC ở Tp.HCM và các tỉnh lân cận.',
          textLink:
            'LIÊN HỆ VIETSTARMAX THEO HOTLINE: 0962 804 086 ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP!',
          phone: '0962804086',
        },
      ],
      luuY: {
        title: 'Các lưu ý khi chọn đối tác làm phim quảng cáo TVC',
        desc: [
          'Chọn đơn vị có nhiều năm kinh nghiệm và có nhiều TVC chất lượng cao',
          'Phải thẩm định năng lực trực tiếp tại văn phòng đối tác xem có quy mô lớn mạnh không',
          'Không nên chọn cá nhân hoặc báo giá làm phim quảng cáo quá rẻ sẽ ảnh hưởng chất lượng',
        ],
      },
    };
  }

  showQuestion(id: number) {
    this.questions.forEach((item: any) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-san-xuat-phim-doanh-nghiep',
  templateUrl: './san-xuat-phim-doanh-nghiep.component.html',
  styleUrls: ['./san-xuat-phim-doanh-nghiep.component.scss'],
})
export class SanXuatPhimDoanhNghiepComponent {
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
      title: 'Dịch vụ sản xuất Phim doanh nghiệp',
      desc: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc, trên 12 năm kinh nghiệm với hơn 2000 video clip',
      background:
        'https://vietstarmax.vn/images/2020/06/15/banner-phim-doanh-nghiep.jpg',
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
        title: 'Giới thiệu và lợi ích của phim doanh nghiệp',
        desc: [
          '“Phim doanh nghiệp” hay còn gọi là “Phim tự giới thiệu doanh nghiệp” là dạng phim ngắn có khả năng truyền tải âm thanh và hình ảnh tới người xem một cách lan tỏa và sâu rộng nhất.',
        ],
      },
      content: {
        urlContent:
          'https://vietstarmax.vn/images/2020/06/15/gioi-thieu-phim-doanh-nghiep.jpg',
        desc: [
          {
            title: '',
            desc: 'Ngày nay, việc phát triển công nghệ truyền hình, điện ảnh đã và đang tiến gần với doanh nghiệp nên việc thực hiện một đoạn phim giới thiệu cho doanh nghiệp trở nên dễ dàng.',
          },
          {
            title: '',
            desc: '”Phim doanh nghiệp” hay còn gọi là “Phim tự giới thiệu doanh nghiệp” là dạng phim ngắn có khả năng truyền tải âm thanh và hình ảnh tới người xem một cách lan tỏa và sâu rộng nhất.',
          },
          {
            title: '',
            desc: 'Theo các nhà khoa học, việc nghe và nhìn sẽ tác động tới tiềm thức mỗi người, ảnh hưởng tới hành vi mua của khách hàng. Vì vậy phim tự giới thiệu mang lại hiệu quả rất cao trong chiến lược quảng bá thương hiệu cho doanh nghiệp.',
          },
        ],
      },
    };

    this.loiIch = {
      title: 'Lợi ích khi làm phim doanh nghiệp',
      content: {
        desc: [
          {
            title: 'TIẾP CẬN KHÁCH HÀNG NHANH CHÓNG',
            desc: 'Thông qua hình ảnh, âm thanh, đồ họa trong phim tự giới thiệu doanh nghiệp giúp khách hàng tiếp cận tới sản phẩm của doanh nghiệp một cách nhanh chóng.',
          },
          {
            title: 'TẠO THƯƠNG HIỆU RIÊNG CHO DOANH NGHIỆP',
            desc: 'Mỗi thước phim doanh nghiệp là một mảng màu sắc khác nhau, mỗi công ty sẽ có một đặc trưng riêng. Vì thế, chỉ cần thông qua phim tự giới thiêu, người xem dễ dàng nhận ra thương hiệu.',
          },
          {
            title: 'THỂ HIỆN SỰ CHUYÊN NGHIỆP CỦA DOANH NGHIỆP',
            desc: 'Thay vì cầm những cuốn Profile dày cộp giới thiệu cho khách hàng, bạn có thể phát trực tiếp video vô cùng đơn giản, lại thu hút.',
          },
        ],
        urlImg: 'https://vietstarmax.vn/images/2020/07/01/loi-ich-phim-dn.jpg',
      },
    };

    this.dichVu = {
      title: 'Dịch vụ làm phim doanh nghiệp bao gồm',
      content: {
        desc: [
          'Tư vấn kịch bản đúng insight của khách hàng',
          'Quay tiền kỳ phim quảng cáo tại bối cảnh',
          'Dựng hậu kỳ phim quảng cáo tại Vietstarmax',
          'Lồng tiếng, âm thanh, kỹ xảo, 2D, 3D',
          'Final phim hoàn thiện',
        ],
        urlImg:
          'https://vietstarmax.vn/images/2020/07/11/san-xuat-phim-vietstarmax.webp',
      },
    };

    this.taiSao = {
      header: {
        title:
          'Tại sao nên lựa chọn Thiên An làm đối tác sản xuất phim doanh nghiệp?',
        desc: 'Thị trường phim doanh nghiệp hiện nay có không ít đơn vị sản xuất phim doanh nghiệp. Song để tìm được một đơn vị chuyên nghiệp, nhiều năm kinh nghiệm như Thiên An là rất khó, hầu hết các bên đều phát sinh theo kiểu manh mún, không chuyên nghiệp, không có kế hoạch rõ ràng, và làm theo kiểu cá nhân đứng ra nhận việc dẫn đến việc trong quá trình thực hiện không có người quy trách nhiệm về sản phẩm.',
      },
      content: {
        left: [
          {
            title:
              'Thiên An là đơn vị đã sản xuất ra hàng trăm Phim giới thiệu doanh nghiệp lớn và nhỏ',
            desc: [
              'Ở Thiên An chúng tôi coi làm phim doanh nghiệp là một nghề chứ không đơn giản chỉ là công việc, đã coi làm phim doanh nghiệp là một nghề thì mọi thứ từ khâu tư vấn kịch bản đến khâu hoàn thiện sản phẩm đều đồng bộ và chuyên nghiệp.',
              'Lên định hướng sáng tạo kịch bản truyền thông qua phim giới thiệu doanh nghiệp bằng câu chuyện của mỗi doanh nghiệp. Mỗi doanh nghiệp đều có văn hoá khác nhau nên kịch bản phim doanh nghiệp cũng khác nhau.',
              'Hoàn thiện hậu kỳ từ bản nháp đến đồ hoạ 2D, 3D và kỹ xảo, với tiêu chuẩn chất lượng của một Production House quốc tế, trang bị đầy đủ thiết bị hiện đại nhất.',
            ],
          },
          {
            title: 'Kinh nghiệm 10 năm trong ngành',
            desc: [
              'Là đơn vị có 10 năm kinh nghiệm trong việc sản xuất phim giới thiệu doanh nghiệp cho nhiều tập đoàn trong nước và quốc tế.',
              'Thiên An đã từng hợp tác với hơn 200 nhãn hàng trong nước và quốc tế và cho ra đời hàng trăm sản phẩm phim chất lượng nhất.',
            ],
          },
        ],
        right: [
          {
            title: 'Nhân sự chuyên nghiệp',
            desc: [
              'Đội ngũ sáng tạo copywiter, account, tổ chức sản xuất đầy kinh nghiệm tư vấn tận tình.',
              'Hợp tác với các đối tác làm hậu kỳ chuyên nghiệp tại Thái Lan và Singapore như: Digipost của Sing, Kantana của Thái, …',
            ],
          },
          {
            title: 'Trang thiết bị sản xuất hiện đại bậc nhất',
            desc: [
              'Hệ thống trang thiết bị tiền kỳ chất lượng 6K, 4K, full HD tiêu chuẩn quốc tế',
              'Hệ thống phòng dựng Hậu kỳ chuyện nghiệp Tại Công ty theo tiêu chuẩn hiện đại quốc tế: Máy Tính Server dựng phim chuyên dụng, Bàn dựng chỉnh màu Davince mới nhất, phòng thu âm, loa kiểm âm, Bàn Maccom,…',
              'Hệ thống server lưu trữ dữ liệu lên đến hơn 100.000 GB, đảm bảo lưu trữ dữ liệu của khách hàng trên 10 năm kể từ ngày hoàn thiện phim, nếu khách hàng mất phim gốc vẫn có cơ hội để tìm lại bản gốc sau 10 năm thất lạc phim.',
            ],
          },
          {
            title: 'Đạt được nhiều giải thưởng danh giá',
            desc: [
              'Giải thưởng TVC Golden Bell (Quả chuông vàng) năm 2016 với sản phẩm “Bia Hà Nội xanh”.',
              'Top 10 ý tưởng quảng cáo sáng tạo Golden Bell',
            ],
          },
        ],
      },
      lienhe: [
        {
          text: 'Đến với dịch vụ sản xuất Phim tự giới thiệu doanh nghiệp của Thiên An bạn không chỉ nhận được sản phẩm chất – nhất, mà còn được phục vụ tận tình, tận tâm.',
          textLink: '',
          phone: '',
        },
        {
          text: '',
          textLink:
            'HÃY LIÊN HỆ NGAY TỚI Thiên An THEO HOTLINE: 0982 840 840 ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP!',
          phone: ' 0982840840',
        },
      ],
      luuY: {
        title: 'Các lưu ý khi chọn đối tác làm phim doanh nghiệp',
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
        text: 'TVC phim quảng cáo',
        active: true,
        list: [
          {
            urlImg: 'https://vietstarmax.vn/images/TVC-JT-Express.png',
            text: 'Thiên An | Phim quảng cáo J&T Express iTVC - Thương hiệu chuyển phát nhanh',
            link: '',
          },
          {
            urlImg:
              'https://vietstarmax.vn/images/VietstarMAX-TVC-MUTLICH-Thuong-hieu-nha-bep.png',
            text: 'Thiên An | TVC QUẢNG CÁO - MÜTLICH - THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/TVC_Majestic.jpg',
            text: 'Thiên An | TVC Tết 2022 | Bánh quy Majestic - Richy',
            link: '',
          },
        ],
      },
      {
        id: 2,
        text: 'Phim tài liệu truyền hình',
        active: false,
        list: [
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
            urlImg: 'https://vietstarmax.vn/images/Magicore.jpg',
            text: 'Thiên An | TVC MAGICORE - Sức bật của quảng cáo Việt',
            link: '',
          },
        ],
      },
      {
        id: 3,
        text: 'Phim sitcom - hài tết',
        active: false,
        list: [
          {
            urlImg: 'https://vietstarmax.vn/images/TVC_VMIC.jpg',
            text: 'Thiên An | Phim TVC VMIC - Tổng công ty Hàng Hải Việt Nam',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/X_s_Bnh_Phc.jpg',
            text: 'TVC Quảng cáo - Xổ số Bình Phước | Thiên An',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/MIKA.png',
            text: 'TVC Quảng cáo - Công ty chuyên sản xuất và kinh doanh Vật liệu xây dựngMIKADO ',
            link: '',
          },
        ],
      },
      {
        id: 4,
        text: 'Tổ chức sự kiện',
        active: false,
        list: [
          {
            urlImg:
              'https://vietstarmax.vn/images/VietstarMAX-TVC-MUTLICH-Thuong-hieu-nha-bep.png',
            text: 'Thiên An | TVC QUẢNG CÁO - MÜTLICH - THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/TVC_Majestic.jpg',
            text: 'Thiên An | TVC Tết 2022 | Bánh quy Majestic - Richy',
            link: '',
          },
          {
            urlImg: 'https://vietstarmax.vn/images/Magicore.jpg',
            text: 'Thiên An | TVC MAGICORE - Sức bật của quảng cáo Việt',
            link: '',
          },
        ],
      },
    ];

    this.khachHangNoiVeChungToi = [
      { link: '#', text: 'Dịch vụ' },
      { link: '#', text: 'SẢN XUẤT PHIM - HÌNH ẢNH' },
      { link: '#', text: 'Sản xuất phim doanh nghiệp' },
    ];
  }
}

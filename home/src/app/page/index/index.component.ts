import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

  listItem :any = [
    {
      id: 1,
      text: 'TVC Phim quảng cáo',
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
      text: 'PHIM TÀI LIỆU TRUYỀN HÌNH',
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
    {
      id: 3,
      text: 'PHIM SITCOM – HÀI TẾT',
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
    {
      id: 4,
      text: 'TỔ CHỨC SỰ KIỆN',
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
    }

  ];


    // name: 'Sản Phẩm ',
    // valueLv1: [
    //   {
    //     name: 'TVC Phim quảng cáo',
    //     valueLv2: [],
    //     path: '',
    //   },
    //   {
    //     name: 'PHIM TÀI LIỆU TRUYỀN HÌNH',
    //     valueLv2: [],
    //     path: '',
    //   },
    //   {
    //     name: 'PHIM SITCOM – HÀI TẾT',
    //     valueLv2: [],
    //     path: '',
    //   },
    //   {
    //     name: 'TỔ CHỨC SỰ KIỆN',
    //     valueLv2: [],
    //     path: '',
    //   }



}

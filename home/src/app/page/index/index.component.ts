import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  listItem: any = [
    {
      id: 1,
      text: 'TVC Phim quảng cáo',
      active: true,
      list: [
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/12/tvc-benh-vien-phuong-dong-2022.webp',
          text: 'TVC Phim quảng cáo – Bệnh viện Phương Đông',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-jt-express.webp',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC – Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/nhua-dai-viet.webp',
          text: 'VietstarMAX | TVC sản phẩm tấm nhựa – Nhựa Đại Việt',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vien-uong-ich-nieu-khang.webp',
          text: 'VietstarMAX | TVC 20s – Viên uống ÍCH NIỆU KHANG',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vietstarmax-tvc-mutlich-thuong-hieu-nha-bep.webp',
          text: 'VietstarMAX | TVC QUẢNG CÁO – MÜTLICH – THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-tien-thien-dan.webp',
          text: 'VietstarMAX | TVC Thực phẩm bảo vệ sức khỏe Tiền Thiên Đan',
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
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/12/tvc-benh-vien-phuong-dong-2022.webp',
          text: 'TVC Phim quảng cáo – Bệnh viện Phương Đông',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-jt-express.webp',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC – Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/nhua-dai-viet.webp',
          text: 'VietstarMAX | TVC sản phẩm tấm nhựa – Nhựa Đại Việt',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vien-uong-ich-nieu-khang.webp',
          text: 'VietstarMAX | TVC 20s – Viên uống ÍCH NIỆU KHANG',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vietstarmax-tvc-mutlich-thuong-hieu-nha-bep.webp',
          text: 'VietstarMAX | TVC QUẢNG CÁO – MÜTLICH – THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-tien-thien-dan.webp',
          text: 'VietstarMAX | TVC Thực phẩm bảo vệ sức khỏe Tiền Thiên Đan',
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
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/12/tvc-benh-vien-phuong-dong-2022.webp',
          text: 'TVC Phim quảng cáo – Bệnh viện Phương Đông',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-jt-express.webp',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC – Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/nhua-dai-viet.webp',
          text: 'VietstarMAX | TVC sản phẩm tấm nhựa – Nhựa Đại Việt',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vien-uong-ich-nieu-khang.webp',
          text: 'VietstarMAX | TVC 20s – Viên uống ÍCH NIỆU KHANG',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vietstarmax-tvc-mutlich-thuong-hieu-nha-bep.webp',
          text: 'VietstarMAX | TVC QUẢNG CÁO – MÜTLICH – THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-tien-thien-dan.webp',
          text: 'VietstarMAX | TVC Thực phẩm bảo vệ sức khỏe Tiền Thiên Đan',
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
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/12/tvc-benh-vien-phuong-dong-2022.webp',
          text: 'TVC Phim quảng cáo – Bệnh viện Phương Đông',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-jt-express.webp',
          text: 'VietstarMAX | Phim quảng cáo J&T Express iTVC – Thương hiệu chuyển phát nhanh',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/nhua-dai-viet.webp',
          text: 'VietstarMAX | TVC sản phẩm tấm nhựa – Nhựa Đại Việt',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vien-uong-ich-nieu-khang.webp',
          text: 'VietstarMAX | TVC 20s – Viên uống ÍCH NIỆU KHANG',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/vietstarmax-tvc-mutlich-thuong-hieu-nha-bep.webp',
          text: 'VietstarMAX | TVC QUẢNG CÁO – MÜTLICH – THƯƠNG HIỆU THIẾT BỊ NHÀ BẾP CAO CẤP',
          link: '',
        },
        {
          urlImg:
            'https://vietstarmax.vn/wp-content/uploads/2022/09/tvc-tien-thien-dan.webp',
          text: 'VietstarMAX | TVC Thực phẩm bảo vệ sức khỏe Tiền Thiên Đan',
          link: '',
        },
      ],
    },
  ];
}

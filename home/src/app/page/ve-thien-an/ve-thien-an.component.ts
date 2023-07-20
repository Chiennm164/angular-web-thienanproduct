import { Component } from '@angular/core';

@Component({
  selector: 'app-ve-thien-an',
  templateUrl: './ve-thien-an.component.html',
  styleUrls: ['./ve-thien-an.component.scss'],
})
export class VeThienAnComponent {
  banner: any = {
    title: 'Giới thiệu về Thiên An Product',
    desc: 'Thiên An Product với hơn 12 năm hoạt động trong lĩnh vực quảng cáo và truyền thông chính là sự lựa chọn uy tín và đáng tin cậy cho các doanh nghiệp',
    background:
      'https://vietstarmax.vn/wp-content/uploads/2022/06/banner-gioi-thieu-vsm.jpg',
    colorTextWhite: true,
  };

  dataTemplate: any = [
    {
      title: ' CHÚNG TÔI LÀ AI  ',
      content: [
        'Apro Media – Công ty Truyền Thông và Xử Lý Dữ Liệu được thành lập vào ngày 11 tháng 5 năm 2006. Mặc dù khởi đầu là doanh nghiệp truyền thông non trẻ, tuy nhiên ngay từ khi bắt đầu chúng tôi đã đề ra chiến lược phát triển lâu dài trong lĩnh vực Truyền Hình và Sự Kiện.',
        ' Với mục tiêu rõ rang và trải qua 16 năm không ngừng nỗ lực phấn đấu và học hỏi những kỹ thuật & xu thuế mới nhất của Việt Nam và thế giới. Apro Media đã dần khẳng định được vị thế của mình trong thị trường truyền thông tại Hà Nội.',
        'Với thế mạnh sản xuất phim tài liệu, chính luận, lịch sử, phim quảng cáo & tổ chức sự kiện,… Năm 2020 vừa qua, Apro Media đã được đích thân chủ tịch nước Nguyễn Xuân Phúc trao giải VTV đặc biệt cho hạng mục phim tài liệu suất sắc nhất với serie phim tài liệu “Việt Nam Thời Đại Hồ Chí Minh – Biên niên sử Truyền Hình”.',
        ' Với đội ngũ và trang thiết bị quay, dựng hiện đại và chuyên nghiệp. Năm 2010 chúng tôi quyết định thành lập Thiên An Production, với mục đích khai thác độc lập mảng “Phim quảng cáo” thương mại. Luôn lấy “uy tín – chất lượng” làm phương châm phục vụ khách hàng.',
      ],
    },
    {
      title: 'SỨ MỆNH ',
      content: [
        'Lan tỏa thương hiệu của các tổ chức, doanh nghiệp tới cộng động',
        'Chia sẻ & song hành cùng tổ chức, doanh nghiệp trong việc định vị thương hiệu',
        'Nắm bắt những xu thuế sản xuất phim mới nhất để tạo lối đi riêng.',
      ],
    },
    {
      title: ' GIÁ TRỊ CỐT LÕI',
      content: [
        'Lấy “uy tín – chất lượng” là phương châm và định hướng phát triển. Không ngừng học hỏi, đổi mới và xây dựng tư duy làm phim độc, lạ & tiết kiệm',
      ],
    },
  ];
}

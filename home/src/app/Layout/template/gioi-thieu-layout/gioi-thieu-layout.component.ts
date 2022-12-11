import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gioi-thieu-layout',
  templateUrl: './gioi-thieu-layout.component.html',
  styleUrls: ['./gioi-thieu-layout.component.scss'],
})
export class GioiThieuLayoutComponent {
  @Input() list: any;
  @Input() textbtn: any;

  header: any;
  content: any;

  // this.gioiThieu = {
  //   header: {
  //     iconUrl: 'https://vietstarmax.vn/images/2020/06/11/play-btn-red.png',
  //     title: 'Giới thiệu và lợi ích của phim quảng cáo TVC',
  //     desc: 'Ngày nay cụm từ TVC quảng cáo đã không còn xa lạ với các doanh nghiệp Việt Nam. Chỉ trong một khối lượng thời gian ngắn tính bằng giây, sản xuất TVC quảng cáo ấn tượng – độc đáo – nhắm trúng đích hoàn toàn có thể mang lại cho doanh nghiệp của bạn những lợi nhuận khổng lồ. Tuy nhiên, nếu sản xuất TVC quảng cáo thiếu chuyên nghiệp, kịch bản đầu tư ít chất xám và không thể hiện được đặc trưng doanh nghiệp chắc chắn sẽ là một lỗ hổng và sự lãng phí lớn làm giảm hiệu quả của cả chiến dịch marketing mà bạn đang thực hiện.',
  //   },
  //   content: {
  //     urlContent:
  //       'https://vietstarmax.vn/images/2020/07/10/san-xuat-tvc-1.webp',
  //     desc: [
  //       {
  //         title: 'Là chuyên gia trong lĩnh vực sản xuất TVC quảng cáo',
  //         desc: 'Vietstarmax hoàn toàn thấu hiểu những băn khoăn của doanh nghiệp trong việc đưa ra quyết định về: Kịch bản quảng cáo, phương hướng truyền tải thông điệp và hình ảnh thương hiệu, mức chi phí phù hợp… Vì vậy, bằng tất cả những kinh nghiệm, sự đam mê và khối óc sáng tạo tuyệt vời của đội ngũ sản xuất TVC quảng cáo, Vietstarmax sẽ mang đến cho doanh nghiệp những tư vấn hiệu quả nhất để phát huy tối đa ngân sách, đồng thời thực hiện những quảng cáo vàng tạo nên giá trị thương hiệu mà doanh nghiệp mong muốn.',
  //       },
  //     ],
  //   },
  // };

  ngOnInit(): void {
    this.header = this.list.header;
    this.content = this.list.content;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tai-sao-lua-chon-layout',
  templateUrl: './tai-sao-lua-chon-layout.component.html',
  styleUrls: ['./tai-sao-lua-chon-layout.component.scss'],
})
export class TaiSaoLuaChonLayoutComponent {
  @Input() list: any;

  header: any;
  contentLeft: any;
  contentRight: any;
  lienHe: any;
  luuY: any;

  // this.taiSao = {
  //   header: {
  //     title: 'Tại sao nên lựa chọn VietstarMAX làm đối tác sản xuất TVC',
  //     desc: 'Thị trường phim quảng cáo hiện nay có không ít công ty làm TVC quảng cáo. Song để tìm được một công ty sản xuất phim quảng cáo chuyên nghiệp, nhiều năm kinh nghiệm làm phim quảng cáo trên truyền hình như Vietstarmax là rất khó.',
  //   },
  //   content: {
  //     left: [
  //       {
  //         title:
  //           'Vietstarmax là đơn vị DUY NHẤT tại miền Bắc có đủ khả năng xây dựng chiến dịch tổng thể phim quảng cáo TVC, bao gồm:',
  //         desc: [
  //           'Lên định hướng sáng tạo kịch bản truyền thông qua TVC, sáng tạo slogan cho TVC, sáng tạo thông điệp truyền thông cho TVC',
  //         ],
  //       },
  //       {
  //         title: 'Trang thiết bị sản xuất hiện đại bậc nhất',
  //         desc: [
  //           'Hệ thống trang thiết bị tiền kỳ chất lượng 6K, 4K, full HD tiêu chuẩn quốc tế',
  //         ],
  //       },
  //     ],
  //     right: [
  //       {
  //         title: 'Nhân sự chuyên nghiệp',
  //         desc: [
  //           'Đội ngũ sáng tạo copywiter, account, tổ chức sản xuất đầy kinh nghiệm tư vấn tận tình.',
  //         ],
  //       },
  //       {
  //         title: 'Kinh nghiệm 10 năm trong ngành',
  //         desc: [
  //           'Là đơn vị có 10 năm kinh nghiệm trong việc sản xuất phim quảng cáo TVC',
  //         ],
  //       },
  //       {
  //         title: 'Đạt được nhiều giải thưởng danh giá',
  //         desc: [
  //           'Giải thưởng TVC Golden Bell (Quả chuông vàng) năm 2016 với sản phẩm “Bia Hà Nội xanh”.',
  //         ],
  //       },
  //       {
  //         title: 'Tư vấn truyền thông TVC quảng cáo',
  //         desc: [
  //           'Tư vấn và thực hiện lập kế hoạch phát sóng trên các kênh truyền hình VTV, HTV, Vĩnh long và các kênh truyền hình uy tín',
  //         ],
  //       },
  //     ],
  //   },
  //   lienhe: [
  //     {
  //       text: 'Đến với dịch vụ sản xuất TVC quảng cáo của Vietstarmax bạn không chỉ nhận được sản phẩm chất – nhất, mà còn được phục vụ tận tình, tận tâm.',
  //       textLink: '',
  //       phone: '',
  //     },
  //   ],
  //   luuY: {
  //     title: 'Các lưu ý khi chọn đối tác làm phim quảng cáo TVC',
  //     desc: [
  //       'Chọn đơn vị có nhiều năm kinh nghiệm và có nhiều TVC chất lượng cao',
  //     ],
  //   },
  // };

  ngOnInit(): void {
    this.header = this.list.header;
    this.contentLeft = this.list.content.left;
    this.contentRight = this.list.content.right;
    this.lienHe = this.list.lienhe;
    this.luuY = this.list.luuY;
  }
}

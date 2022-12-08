import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loi-ich-layout',
  templateUrl: './loi-ich-layout.component.html',
  styleUrls: ['./loi-ich-layout.component.scss'],
})
export class LoiIchLayoutComponent {
  @Input() list: any;

  content: any;

  // this.loiIch = {
  //   title: 'Lợi ích khi làm phim TVC quảng cáo',
  //   content: {
  //     desc: [
  //       {
  //         title: 'KHẲNG ĐỊNH THƯƠNG HIỆU',
  //         desc: 'Phim quảng cáo TVC 30s truyền tải thông điệp của mình đến khán giả nhanh nhất và uy tín nhất',
  //       },
  //     ],
  //     urlImg:
  //       'https://vietstarmax.vn/images/2020/07/10/tvc-quang-cao-tien-linh-sunhouse.webp',
  //   },
  // };

  ngOnInit(): void {
    // console.log(this.list);
    this.content = this.list.content;
  }
}

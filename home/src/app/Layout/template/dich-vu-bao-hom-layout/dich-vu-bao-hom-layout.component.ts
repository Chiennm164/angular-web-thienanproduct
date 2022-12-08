import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dich-vu-bao-hom-layout',
  templateUrl: './dich-vu-bao-hom-layout.component.html',
  styleUrls: ['./dich-vu-bao-hom-layout.component.scss'],
})
export class DichVuBaoHomLayoutComponent {
  @Input() list: any;

  content: any;

  // this.dichVu = {
  //   title: 'Dịch vụ làm phim quảng cáo TVC bao gồm',
  //   content: {
  //     desc: [
  //       'Tư vấn kịch bản đúng insight của khách hàng',
  //       'Quay tiền kỳ phim quảng cáo tại bối cảnh',
  //       'Dựng hậu kỳ phim quảng cáo tại Vietstarmax',
  //       'Lồng tiếng, âm thanh, kỹ xảo, 2D, 3D',
  //       'Final phim hoàn thiện',
  //     ],
  //     urlImg: 'https://vietstarmax.vn/images/2020/07/10/san-xuat-tvc-bg.webp',
  //   },
  // };

  ngOnInit(): void {
    this.content = this.list.content;
  }
}

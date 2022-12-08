import { Component, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  screenWidth: any;
  lenghtList: number = 0;
  marginLeft: number = 0;

  dataListDichVu = [
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-tvc-quang-cao.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'PHIM QUẢNG CÁO TVC',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-viral.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Viral video',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-san-xuat-phim-doanh-nghiep.png ',
      text1: 'DỊCH VỤ SẢN XUấT',
      text2: 'Phim Doanh nghiệp',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-truyen-thong-tong-the.png',
      text1: 'DỊCH VỤ ',
      text2: 'Truyền thông tổng thể',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-marketing-online.png',
      text1: 'DỊCH VỤ ',
      text2: 'Marketing Online',
    },
    {
      src: 'https://vietstarmax.vn/images/0new/dich-vu-khac.png ',
      text1: 'Dịch vụ khác',
      text2: '',
    },
  ];

  dataBG: any = [
    'https://vietstarmax.vn/images/2020/07/10/banner-viralvideo.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-phim-doanh-nghiep.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-truyen-thong-tt1.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-marketingonline.webp',
  ];

  constructor(private elRef: ElementRef) {}
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    const items = this.elRef.nativeElement.querySelector('.items');
    this.lenghtList = items.clientWidth;
  }
  ngOnInit(): void {
    this.cvb();
  }

  cvb() {
    this.onResize();

    const itemAll = this.elRef.nativeElement.querySelectorAll('.item');
    setInterval(() => {
      this.marginLeft = this.marginLeft - this.screenWidth;
      if (-this.marginLeft > this.lenghtList * itemAll.length) {
        this.marginLeft = 0;
      }
    }, 3000);
  }
}

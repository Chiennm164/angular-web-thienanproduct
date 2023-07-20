import { Component, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import {trigger,state,style,animate,transition,query,stagger} from '@angular/animations';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('runTopContentBanner', [
      transition('* => *', [
        query('img', style({ transform: 'translateY(100%)' })),
        query(
          'img',
          stagger('900ms', [
            animate('900ms', style({ transform: 'translateY(0)' })),
          ])
        ),
      ]),
    ]),
  ],
})
export class BannerComponent {
  screenWidth: any;
  lenghtList: number = 0;
  marginLeft: number = 0;

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

      if (-this.marginLeft > this.lenghtList * itemAll.length - 200) {
        this.marginLeft = 0;
      }
    }, 5000);
  }

  dataBG: any = [
    {
      title: 'Dịch vụ sản xuất Phim quảng cáo TVC ',
      des: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc ,trên 12 năm kinh nghiệm với hơn 2000 video clip ',
      img: ' ',
      bg: 'https://vietstarmax.vn/images/2020/07/10/banner-phim-tvc3.webp',
    },
    {
      title: 'Dịch vụ sản xuất Phim viral video ',
      des: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc ,trên 12 năm kinh nghiệm với hơn 2000 video clip',
      img: ' ',
      bg: 'https://vietstarmax.vn/images/2020/07/10/banner-viralvideo.webp',
    },
    {
      title: 'Dịch vụ sản xuất Phim doanh nghiệp ',
      des: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc ,trên 12 năm kinh nghiệm với hơn 2000 video clip',
      img: ' ',
      bg: 'https://vietstarmax.vn/images/2020/07/10/banner-phim-doanh-nghiep.webp',
    },
    {
      title: 'Dịch vụ sản xuất Phim doanh nghiệp ',
      des: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc ,trên 12 năm kinh nghiệm với hơn 2000 video clip',
      img: ' ',
      bg: 'https://vietstarmax.vn/images/2020/07/10/banner-truyen-thong-tt1.webp',
    },
    {
      title: 'Dịch vụ truyền thông tổng thể ',
      des: 'Nhà sản xuất phim quảng cáo số 1 miền Bắc ,trên 12 năm kinh nghiệm với hơn 2000 video clip',
      img: ' ',
      bg: 'https://vietstarmax.vn/images/2020/07/10/banner-marketingonline.webp',
    },

  ];
}

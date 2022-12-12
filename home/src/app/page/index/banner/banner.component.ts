import { Component, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
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
    console.log(this.lenghtList);
  }
  ngOnInit(): void {
    this.cvb();
  }

  cvb() {
    this.onResize();

    const itemAll = this.elRef.nativeElement.querySelectorAll('.item');
    console.log(itemAll.length);

    setInterval(() => {
      this.marginLeft = this.marginLeft - this.screenWidth;
      console.log(this.lenghtList * itemAll.length);
      console.log(this.marginLeft);

      if (-this.marginLeft > (this.lenghtList * itemAll.length) -200 ) {
        this.marginLeft = 0;
      }
    }, 10000);
  }

  dataBG: any = [
    'https://vietstarmax.vn/images/2020/07/10/banner-viralvideo.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-phim-doanh-nghiep.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-truyen-thong-tt1.webp',
    'https://vietstarmax.vn/images/2020/07/10/banner-marketingonline.webp',
  ];
}

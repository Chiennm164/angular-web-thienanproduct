import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-khach-hang-noi-ve-chung-toi',
  templateUrl: './khach-hang-noi-ve-chung-toi.component.html',
  styleUrls: ['./khach-hang-noi-ve-chung-toi.component.scss'],
})
export class KhachHangNoiVeChungToiComponent {
  @Input() list: any[] = [
    { link: '#a', text: 'Dịch vụ' },
    { link: '#b', text: 'Dịch vụ TVC' },
  ];

  lenghtList: number = 0;

  marginLeft: number = 0;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.lenghtList = this.list.length - 1;
    const items = this.elRef.nativeElement.querySelector('.items');
    const item = this.elRef.nativeElement.querySelector('.item');
    const itemAll = this.elRef.nativeElement.querySelectorAll('.item');

    const widthItem = Number(item.clientWidth) - 12;

    if (window.outerWidth < 500) {
      itemAll.forEach((element: any) => {
        element.style.width = `${widthItem}px`;
      });
    }

    const maxMarginMobile = Number(item.clientWidth) * 4 - 1;

    setInterval(() => {
      if (window.outerWidth > 500) {
        if (-this.marginLeft > 759) {
          this.marginLeft = 0;
        } else {
          this.marginLeft = this.marginLeft - 380;
        }
      } else {
        if (-this.marginLeft > maxMarginMobile - 1) {
          this.marginLeft = 0;
        } else {
          this.marginLeft = this.marginLeft - widthItem;
        }
      }
    }, 2000);
  }
}

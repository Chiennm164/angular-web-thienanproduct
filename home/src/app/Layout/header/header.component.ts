import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {trigger,state,style,animate,transition,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('runTopSearchInput', [
      transition('* => *', [
        query('input', style({ transform: 'translateY(100%)' })),
        query('input',stagger('900ms', [animate('900ms', style({ transform: 'translateY(0)' })),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  showInputSearch: boolean = false;

  checkShowMenu: boolean = false;
  checkMenu: boolean = false;
  listMenu: any = [
    {
      name: 'DỊCH VỤ',
      valueLv1: [
        {
          name: 'Sản xuất Phim Quảng Cáo',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-quang-cao',
        },
        {
          name: 'Sản xuất Phim Doanh Nghiệp',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-doanh-nghiep',
        },
        {
          name: 'Sản xuất Phim Tài Liệu Truyền Hình',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-tai-lieu-truyen-hinh',
        },
        {
          name: 'Sản xuất Phim Sitcom',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-sitcom',
        },
        {
          name: ' Sản xuất Hài Tết',
          valueLv2: [],
          path: 'dichvu/booking-quang-cao',
        },
        {
          name: 'Sản xuất phim Viral',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-hai-tet',
        },
        {
          name: 'Cho thuê trường quay',
          valueLv2: [],
          path: 'dichvu/san-xuat-phim-viral',
        },
        {
          name: ' BOOKING QUẢNG CÁO',
          valueLv2: [],
          path: 'dichvu/to-chuc-su-kien',
        },

        {
          name: 'Tổ Chức Sự Kiện',
          valueLv2: [],
          path: 'dichvu/cho-thue-truong-quay',
        },
      ],
      path: '',
    },
    {
      name: 'Sản Phẩm ',
      valueLv1: [
        {
          name: 'TVC Phim quảng cáo',
          valueLv2: [],
          path: 'sanpham/tvc-phim-quang-cao',
        },
        {
          name: 'PHIM TÀI LIỆU TRUYỀN HÌNH',
          valueLv2: [],
          path: 'sanpham/phim-tai-lieu',
        },
        {
          name: 'PHIM SITCOM – HÀI TẾT',
          valueLv2: [],
          path: 'sanpham/phim-sitcom-hai-tet',
        },
        {
          name: 'TỔ CHỨC SỰ KIỆN',
          valueLv2: [],
          path: 'sanpham/to-chuc-su-kien',
        },
      ],
      path: '',
    },

    {
      name: 'về Thiên An Product',
      valueLv1: [],
      path: '/gioithieu',
    },

    {
      name: 'Tin tức',
      valueLv1: [],
      path: '/tintuc',
    },
    {
      name: 'Liên hệ tư vấn',
      valueLv1: [],
      path: '/lienhe',
    },
  ];
  innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1200) {
      this.checkShowMenu = true;
    } else {
      this.checkShowMenu = false;
    }
  }

  ngOnInit(): void {
    this.onResize();
  }

  showInput() {
    this.showInputSearch = !this.showInputSearch;
  }
  showMenu() {
    this.checkShowMenu = !this.checkShowMenu;
  }
  showMenuPC() {
    this.checkMenu = !this.checkMenu;
  }

}

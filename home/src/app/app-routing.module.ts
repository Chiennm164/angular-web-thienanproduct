import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { DichVuComponent } from './page/dich-vu/dich-vu.component';
import { VeThienAnComponent } from './page/ve-thien-an/ve-thien-an.component';

import { SanPhamComponent } from './page/san-pham/san-pham.component';
import { SxPhimQuangCaoComponent } from './page/san-pham/sx-phim-quang-cao/sx-phim-quang-cao.component';
import { SxToChucSuKienComponent } from './page/san-pham/sx-to-chuc-su-kien/sx-to-chuc-su-kien.component';
import { SxPhimTaiLieuTruyenHinhComponent } from './page/san-pham/sx-phim-tai-lieu-truyen-hinh/sx-phim-tai-lieu-truyen-hinh.component';
import { SxPhimSitcomComponent } from './page/san-pham/sx-phim-sitcom/sx-phim-sitcom.component';
import { SanXuatTvcQuangCaoComponent } from './page/dich-vu/san-xuat-tvc-quang-cao/san-xuat-tvc-quang-cao.component';
import { SanXuatPhimViralVideoComponent } from './page/dich-vu/san-xuat-phim-viral-video/san-xuat-phim-viral-video.component';
import { SanXuatPhimDoanhNghiepComponent } from './page/dich-vu/san-xuat-phim-doanh-nghiep/san-xuat-phim-doanh-nghiep.component';
import { LienHeTuVanComponent } from './page/lien-he-tu-van/lien-he-tu-van.component';
import { TinTucComponent } from './page/tin-tuc/tin-tuc.component';
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'gioithieu', component: VeThienAnComponent },
  { path: 'sanpham', component: SanPhamComponent },
  { path: 'sanpham/tvc-phim-quang-cao', component: SxPhimQuangCaoComponent },
  { path: 'sanpham/phim-tai-lieu',component: SxPhimTaiLieuTruyenHinhComponent,},
  { path: 'sanpham/phim-sitcom-hai-tet', component: SxPhimSitcomComponent },
  { path: 'sanpham/to-chuc-su-kien', component: SxToChucSuKienComponent },
  { path: 'dichvu', component: DichVuComponent },
  { path: 'dichvu/san-xuat-phim-quang-cao',component: SanXuatTvcQuangCaoComponent,},
  { path: 'dichvu/san-xuat-phim-doanh-nghiep',component: SanXuatPhimDoanhNghiepComponent,},
  { path: 'dichvu/san-xuat-phim-viral',component: SanXuatPhimViralVideoComponent,},
  { path: 'lienhe',component: LienHeTuVanComponent,},
  { path: 'tintuc',component: TinTucComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

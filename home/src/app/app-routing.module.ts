import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index/index.component';
import { DichVuComponent } from './page/dich-vu/dich-vu.component';
import { SanphamComponent } from './page/sanpham/sanpham/sanpham.component';
import { SanXuatPhimHinhAnhComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-hinh-anh.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'dichvu',
    component: DichVuComponent,
    children: [
      { path: 'sanxuatphimhinhanh', component: SanXuatPhimHinhAnhComponent },
    ],
  },
  { path: 'sanpham', component: SanphamComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

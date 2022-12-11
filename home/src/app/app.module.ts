import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { BottomComponent } from './Layout/bottom/bottom.component';
import { SpBottomComponent } from './Layout/bottom/sp-bottom/sp-bottom.component';
import { SpCountComponent } from './Layout/bottom/sp-count/sp-count.component';
import { SpFinalComponent } from './Layout/bottom/sp-final/sp-final.component';
import { SpFixedBtmComponent } from './Layout/bottom/sp-fixed-btm/sp-fixed-btm.component';
import { DiemKhacBietComponent } from './Layout/bottom/sp-count/diem-khac-biet/diem-khac-biet.component';
import { KhachHangNoiVeChungToiComponent } from './Layout/bottom/sp-count/khach-hang-noi-ve-chung-toi/khach-hang-noi-ve-chung-toi.component';
import { LogoKhachHangComponent } from './Layout/bottom/sp-count/logo-khach-hang/logo-khach-hang.component';
import { TemplateDiemKhacBietComponent } from './Layout/bottom/sp-count/diem-khac-biet/template-diem-khac-biet/template-diem-khac-biet.component';
import { TemplateKhachHangComponent } from './Layout/bottom/sp-count/khach-hang-noi-ve-chung-toi/template-khach-hang/template-khach-hang.component';
import { DichVuComponent } from './page/dich-vu/dich-vu.component';
import { SanXuatPhimHinhAnhComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-hinh-anh.component';
import { TemplateSpBottomComponent } from './Layout/bottom/sp-bottom/template-sp-bottom/template-sp-bottom.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './page/index/index/index.component';
import { SanphamComponent } from './page/sanpham/sanpham/sanpham.component';

const routes: Routes = [];
import { SanXuatTvcQuangCaoComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-tvc-quang-cao/san-xuat-tvc-quang-cao.component';

import { SanPhamThucHienComponent } from './Layout/bottom/sp-count/san-pham-thuc-hien/san-pham-thuc-hien.component';
import { BannerLayoutComponent } from './Layout/template/banner-layout/banner-layout.component';
import { GioiThieuLayoutComponent } from './Layout/template/gioi-thieu-layout/gioi-thieu-layout.component';
import { LoiIchLayoutComponent } from './Layout/template/loi-ich-layout/loi-ich-layout.component';
import { DichVuBaoHomLayoutComponent } from './Layout/template/dich-vu-bao-hom-layout/dich-vu-bao-hom-layout.component';
import { TaiSaoLuaChonLayoutComponent } from './Layout/template/tai-sao-lua-chon-layout/tai-sao-lua-chon-layout.component';
import { SanXuatPhimViralVideoComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-viral-video/san-xuat-phim-viral-video.component';
import { NavigationComponent } from './Layout/template/navigation/navigation.component';
import { SanXuatPhimDoanhNghiepComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-doanh-nghiep/san-xuat-phim-doanh-nghiep.component';
import { SanXuatPhimQcAnimationComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-qc-animation/san-xuat-phim-qc-animation.component';
import { PhimDuAnBatDongSanComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/phim-du-an-bat-dong-san/phim-du-an-bat-dong-san.component';
import { LoiichDvComponent } from './Layout/template/loiich-dv/loiich-dv.component';
import { ChupAnhQuangCaoComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/chup-anh-quang-cao/chup-anh-quang-cao.component';
import { ThietKeQcComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/thiet-ke-qc/thiet-ke-qc.component';
import { ThuAmQcComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/thu-am-qc/thu-am-qc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    SpBottomComponent,
    SpCountComponent,
    SpFinalComponent,
    SpFixedBtmComponent,
    DiemKhacBietComponent,
    KhachHangNoiVeChungToiComponent,
    LogoKhachHangComponent,
    TemplateDiemKhacBietComponent,
    TemplateKhachHangComponent,
    DichVuComponent,
    SanXuatPhimHinhAnhComponent,
    TemplateSpBottomComponent,
    IndexComponent,
    SanphamComponent,
    SanXuatTvcQuangCaoComponent,
    SanPhamThucHienComponent,
    BannerLayoutComponent,
    GioiThieuLayoutComponent,
    LoiIchLayoutComponent,
    DichVuBaoHomLayoutComponent,
    TaiSaoLuaChonLayoutComponent,
    SanXuatPhimViralVideoComponent,
    NavigationComponent,
    SanXuatPhimDoanhNghiepComponent,
    SanXuatPhimQcAnimationComponent,
    PhimDuAnBatDongSanComponent,
    LoiichDvComponent,
    ChupAnhQuangCaoComponent,
    ThietKeQcComponent,
    ThuAmQcComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { TemplateSpBottomComponent } from './Layout/bottom/sp-bottom/template-sp-bottom/template-sp-bottom.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './page/index/index.component';
import { TemplateDichvuComponent } from './page/index/template-dichvu/template-dichvu.component';

const routes: Routes = [];
import { SanXuatTvcQuangCaoComponent } from './page/dich-vu/san-xuat-tvc-quang-cao/san-xuat-tvc-quang-cao.component';

import { SanPhamThucHienComponent } from './Layout/bottom/sp-count/san-pham-thuc-hien/san-pham-thuc-hien.component';
import { BannerLayoutComponent } from './Layout/template/banner-layout/banner-layout.component';
import { GioiThieuLayoutComponent } from './Layout/template/gioi-thieu-layout/gioi-thieu-layout.component';
import { LoiIchLayoutComponent } from './Layout/template/loi-ich-layout/loi-ich-layout.component';
import { DichVuBaoHomLayoutComponent } from './Layout/template/dich-vu-bao-hom-layout/dich-vu-bao-hom-layout.component';
import { TaiSaoLuaChonLayoutComponent } from './Layout/template/tai-sao-lua-chon-layout/tai-sao-lua-chon-layout.component';
import { SanXuatPhimViralVideoComponent } from './page/dich-vu/san-xuat-phim-viral-video/san-xuat-phim-viral-video.component';
import { NavigationComponent } from './Layout/template/navigation/navigation.component';
import { BannerComponent } from './page/index/banner/banner.component';
import { DanhSachDichVuComponent } from './page/index/danh-sach-dich-vu/danh-sach-dich-vu.component';
import { SectionProductComponent } from './page/index/section-product/section-product.component';
import { SanPhamNoiBatComponent } from './Layout/template/san-pham-noi-bat/san-pham-noi-bat.component';
import { SanXuatPhimDoanhNghiepComponent } from './page/dich-vu/san-xuat-phim-doanh-nghiep/san-xuat-phim-doanh-nghiep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeThienAnComponent } from './page/ve-thien-an/ve-thien-an.component';
import { TemplateVeThienAnComponent } from './page/ve-thien-an/template-ve-thien-an/template-ve-thien-an.component';
import { DangKyComponent } from './page/dang-ky/dang-ky.component';
import { SanPhamComponent } from './page/san-pham/san-pham.component';
import { SxPhimQuangCaoComponent } from './page/san-pham/sx-phim-quang-cao/sx-phim-quang-cao.component';
import { SxPhimDoanhNghiepComponent } from './page/san-pham/sx-phim-doanh-nghiep/sx-phim-doanh-nghiep.component';
import { SxPhimTaiLieuTruyenHinhComponent } from './page/san-pham/sx-phim-tai-lieu-truyen-hinh/sx-phim-tai-lieu-truyen-hinh.component';
import { SxPhimSitcomComponent } from './page/san-pham/sx-phim-sitcom/sx-phim-sitcom.component';
import { SxPhimHaiTetComponent } from './page/san-pham/sx-phim-hai-tet/sx-phim-hai-tet.component';
import { DichVuMenuComponent } from './Layout/template/dich-vu-menu/dich-vu-menu.component';
import { BreadcrumbComponent } from './Layout/template/breadcrumb/breadcrumb.component';
import { SxToChucSuKienComponent } from './page/san-pham/sx-to-chuc-su-kien/sx-to-chuc-su-kien.component';
import { LienHeTuVanComponent } from './page/lien-he-tu-van/lien-he-tu-van.component';
import { TinTucComponent } from './page/tin-tuc/tin-tuc.component';
import { TemplateMenuBarComponent } from './Layout/template/template-menu-bar/template-menu-bar.component';
import { ChiTietTinTucComponent } from './page/tin-tuc/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';

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
    TemplateSpBottomComponent,
    IndexComponent,
    SanXuatTvcQuangCaoComponent,
    SanPhamThucHienComponent,
    BannerLayoutComponent,
    GioiThieuLayoutComponent,
    LoiIchLayoutComponent,
    DichVuBaoHomLayoutComponent,
    TaiSaoLuaChonLayoutComponent,
    SanXuatPhimViralVideoComponent,
    NavigationComponent,
    TemplateDichvuComponent,
    BannerComponent,
    DanhSachDichVuComponent,
    SectionProductComponent,
    SanPhamNoiBatComponent,
    SanXuatPhimDoanhNghiepComponent,
    VeThienAnComponent,
    TemplateVeThienAnComponent,
    DangKyComponent,
    SanPhamComponent,
    SxPhimQuangCaoComponent,
    SxPhimDoanhNghiepComponent,
    SxPhimTaiLieuTruyenHinhComponent,
    SxPhimSitcomComponent,
    SxPhimHaiTetComponent,
    DichVuMenuComponent,
    BreadcrumbComponent,
    SxToChucSuKienComponent,
    LienHeTuVanComponent,
    TinTucComponent,
    TemplateMenuBarComponent,
    ChiTietTinTucComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

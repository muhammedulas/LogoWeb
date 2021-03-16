import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MalzemeYonetimiComponent } from './components/malzeme-yonetimi/malzeme-yonetimi.component';
import { FinansComponent } from './components/finans/finans.component';
import { SatinalmaComponent } from './components/satinalma/satinalma.component';
import { SatisComponent } from './components/satis/satis.component';
import { IthalatComponent } from './components/ithalat/ithalat.component';
import { IhracatComponent } from './components/ihracat/ihracat.component';
import { BirimSetleriComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/birim-setleri.component';
import { MalzemeOzellikleriComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzeme-ozellikleri/malzeme-ozellikleri.component';
import { MalzemelerComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/malzemeler.component';
import { MalzemeYonetimFisleriComponent } from './components/malzeme-yonetimi/hareketler/malzeme-yonetim-fisleri/malzeme-yonetim-fisleri.component';
import { MaliyetDagitimFisleriComponent } from './components/malzeme-yonetimi/hareketler/maliyet-dagitim-fisleri/maliyet-dagitim-fisleri.component';
import { HizliUretimFisleriComponent } from './components/malzeme-yonetimi/hareketler/hizli-uretim-fisleri/hizli-uretim-fisleri.component';
import { tokenResp } from './models/tokenResp';

import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainComponent } from './components/shared/main/main.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTable, MatTableModule } from '@angular/material/table';
import { AuthGuardService } from './services/authGuard.service';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ConfigureComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    MalzemeYonetimiComponent,
    FinansComponent,
    SatinalmaComponent,
    SatisComponent,
    IthalatComponent,
    IhracatComponent,
    BirimSetleriComponent,
    MalzemeOzellikleriComponent,
    MalzemelerComponent,
    MalzemeYonetimFisleriComponent,
    MaliyetDagitimFisleriComponent,
    HizliUretimFisleriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    NgbModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

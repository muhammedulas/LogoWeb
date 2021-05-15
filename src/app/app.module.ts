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
import { Dialog_StockComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_Stock/dialog_Stock.component';
import { Dialog_newItemComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_newItem/dialog_newItem.component';
import { Dialog_editInspectComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_edit-inspect/dialog_edit-inspect.component';
import { Dialog_deleteItemComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_deleteItem/dialog_deleteItem.component'
import { AuthGuardService } from './services/authGuard.service';
import { ItemTypesPipe } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/itemTypes.pipe';


import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
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
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { USTypesPipe } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/USTypes.pipe';
import { Dialog_deleteUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_deleteUS/dialog_deleteUS.component';
import { Dialog_editInspectUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_edit-inspectUS/dialog_edit-inspectUS.component';
import { Dialog_newUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_newUS/dialog_newUS.component';
import { Odeme_tahsilatPlanlariComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/odeme_tahsilat-planlari.component';
import { BankaComponent } from './components/finans/ana-kayitlar/banka/banka.component';
import { CariHesaplarComponent } from './components/finans/ana-kayitlar/cari-hesaplar/cari-hesaplar.component';
import { ARPTypePipe } from './components/finans/ana-kayitlar/cari-hesaplar/ARPType.pipe';
import { KasaComponent } from './components/finans/ana-kayitlar/kasa/kasa.component';
import { CekSenetlerComponent } from './components/finans/ana-kayitlar/cek-senetler/cek-senetler.component';
import { ChequeAndPnoteStatusPipe } from './components/finans/ana-kayitlar/cek-senetler/chequeAndPnoteStatus.pipe';
import { AlinanHizmetlerComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/alinan-hizmetler.component';




@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ConfigureComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    MalzemeYonetimiComponent,
    MalzemelerComponent,
    FinansComponent,
    SatinalmaComponent,
    SatisComponent,
    IthalatComponent,
    IhracatComponent,
    BirimSetleriComponent,
    MalzemeOzellikleriComponent,
    BankaComponent,
    MalzemeYonetimFisleriComponent,
    MaliyetDagitimFisleriComponent,
    HizliUretimFisleriComponent,
    ItemTypesPipe,
    Odeme_tahsilatPlanlariComponent,
    CariHesaplarComponent,
    CekSenetlerComponent,
    KasaComponent,
    AlinanHizmetlerComponent,
    Dialog_StockComponent,
    Dialog_newItemComponent,
    Dialog_editInspectComponent,
    Dialog_deleteItemComponent,
    ChequeAndPnoteStatusPipe,
    USTypesPipe,
    ARPTypePipe,
    Dialog_deleteUSComponent,
    Dialog_editInspectUSComponent,
    Dialog_newUSComponent


  ],
  entryComponents: [
    Dialog_StockComponent,
    Dialog_editInspectComponent,
    Dialog_newItemComponent,
    Dialog_deleteItemComponent,
    Dialog_deleteUSComponent,
    Dialog_newUSComponent,
    Dialog_editInspectUSComponent
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
    MatTableModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule

  ],
  providers: [AuthGuardService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { BankaComponent } from './components/finans/ana-kayitlar/banka/banka.component';
import { CariHesaplarComponent } from './components/finans/ana-kayitlar/cari-hesaplar/cari-hesaplar.component';
import { ARPTypePipe } from './components/finans/ana-kayitlar/cari-hesaplar/ARPType.pipe';
import { KasaComponent } from './components/finans/ana-kayitlar/kasa/kasa.component';
import { CekSenetlerComponent } from './components/finans/ana-kayitlar/cek-senetler/cek-senetler.component';
import { ChequeAndPnoteStatusPipe } from './components/finans/ana-kayitlar/cek-senetler/chequeAndPnoteStatus.pipe';
import { AlinanHizmetlerComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/alinan-hizmetler.component';
import { SatinalmaIndirimleriComponent } from './components/satinalma/ana-kayitlar/satinalma-indirimleri/satinalma-indirimleri.component';
import { SatinalmaMasraflariComponent } from './components/satinalma/ana-kayitlar/satinalma-masraflari/satinalma-masraflari.component';
import { HizmetAlimFiyatlariComponent } from './components/satinalma/ana-kayitlar/hizmet-alim-fiyatlari/hizmet-alim-fiyatlari.component';
import { SatinalmaKampanyalariComponent } from './components/satinalma/ana-kayitlar/satinalma-kampanyalari/satinalma-kampanyalari.component';
import { BankaFisleriComponent } from './components/finans/hareketler/banka-fisleri/banka-fisleri.component';
import { CariHesapFisleriComponent } from './components/finans/hareketler/cari-hesap-fisleri/cari-hesap-fisleri.component';
import { CekSenetBordrolariComponent } from './components/finans/hareketler/cek-senet-bordrolari/cek-senet-bordrolari.component';
import { KasaFisleriComponent } from './components/finans/hareketler/kasa-fisleri/kasa-fisleri.component';
import { SatinalmaFaturalariComponent } from './components/satinalma/hareketler/satinalma-faturalari/satinalma-faturalari.component';
import { SatinalmaIrsaliyeleriComponent } from './components/satinalma/hareketler/satinalma-irsaliyeleri/satinalma-irsaliyeleri.component';
import { SatinalmaSiparisleriComponent } from './components/satinalma/hareketler/satinalma-siparisleri/satinalma-siparisleri.component';
import { DagitimAraclariComponent } from './components/satis/ana-kayitlar/dagitim-araclari/dagitim-araclari.component';
import { DagitimRotalariComponent } from './components/satis/ana-kayitlar/dagitim-rotalari/dagitim-rotalari.component';
import { HizmetSatisFiyatlariComponent } from './components/satis/ana-kayitlar/hizmet-satis-fiyatlari/hizmet-satis-fiyatlari.component';
import { MalzemeSatisFiyatlariComponent } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/malzeme-satis-fiyatlari.component';
import { SatisFaturalariComponent } from './components/satis/hareketler/satis-faturalari/satis-faturalari.component';
import { SatisIndirimleriComponent } from './components/satis/ana-kayitlar/satis-indirimleri/satis-indirimleri.component';
import { SatisIrsaliyeleriComponent } from './components/satis/hareketler/satis-irsaliyeleri/satis-irsaliyeleri.component';
import { SatisMasraflariComponent } from './components/satis/ana-kayitlar/satis-masraflari/satis-masraflari.component';
import { SatisSiparisleriComponent } from './components/satis/hareketler/satis-siparisleri/satis-siparisleri.component';
import { VerilenHizmetlerComponent } from './components/satis/ana-kayitlar/verilen-hizmetler/verilen-hizmetler.component';
import { DagitimFisleriComponent } from './components/ithalat/hareketler/dagitim-fisleri/dagitim-fisleri.component';
import { DiibComponent } from './components/ihracat/hareketler/diib/diib.component';
import { IhracatOperasyonFisleriComponent } from './components/ihracat/hareketler/ihracat-operasyon-fisleri/ihracat-operasyon-fisleri.component';
import { IkSatinalmaFaturalariComponent } from './components/ihracat/hareketler/ik-satinalma-faturalari/ik-satinalma-faturalari.component';
import { IkSatisFaturalariComponent } from './components/ihracat/hareketler/ik-satis-faturalari/ik-satis-faturalari.component';
import { IthalatOperasyonFisleriComponent } from './components/ithalat/hareketler/ithalat-operasyon-fisleri/ithalat-operasyon-fisleri.component';
import { MalzemeDolasimFisleriComponent } from './components/ithalat/hareketler/malzeme-dolasim-fisleri/malzeme-dolasim-fisleri.component';
import { MillilestirmeFisleriComponent } from './components/ithalat/hareketler/millilestirme-fisleri/millilestirme-fisleri.component';
import { Odeme_tahsilatPlanlariComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/odeme_tahsilat-planlari.component';
import { ItemSalePriceTypePipe } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/itemSalePriceType.pipe';




@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ConfigureComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,

    //Malzeme yönetimi
    MalzemeYonetimiComponent,
    MalzemelerComponent,
    BirimSetleriComponent,
    MalzemeOzellikleriComponent,

    MalzemeYonetimFisleriComponent,
    MaliyetDagitimFisleriComponent,
    HizliUretimFisleriComponent,
    //

    //Finans
    FinansComponent,
    Odeme_tahsilatPlanlariComponent,
    CariHesaplarComponent,
    CekSenetlerComponent,
    BankaComponent,
    KasaComponent,

    BankaFisleriComponent,
    CariHesapFisleriComponent,
    CekSenetBordrolariComponent,
    KasaFisleriComponent,
    //

    //Satinalma
    SatinalmaComponent,
    AlinanHizmetlerComponent,
    SatinalmaIndirimleriComponent,
    SatinalmaMasraflariComponent,
    HizmetAlimFiyatlariComponent,
    SatinalmaKampanyalariComponent,

    SatinalmaSiparisleriComponent,
    SatinalmaIrsaliyeleriComponent,
    SatinalmaFaturalariComponent,
    //

    //Satis
    SatisComponent,
    VerilenHizmetlerComponent,
    DagitimAraclariComponent,
    DagitimRotalariComponent,
    HizmetSatisFiyatlariComponent,
    MalzemeSatisFiyatlariComponent,
    SatisIndirimleriComponent,
    SatisMasraflariComponent,

    SatisSiparisleriComponent,
    SatisIrsaliyeleriComponent,
    SatisFaturalariComponent,
    //

    //Ithalat
    IthalatComponent,
    IthalatOperasyonFisleriComponent,
    MalzemeDolasimFisleriComponent,
    DagitimFisleriComponent,
    MillilestirmeFisleriComponent,
    //

    //Ihracat
    IhracatComponent,
    IhracatOperasyonFisleriComponent,
    DiibComponent,
    IkSatinalmaFaturalariComponent,
    IkSatisFaturalariComponent,
    //


    //Pipelines
    ItemTypesPipe,
    ChequeAndPnoteStatusPipe,
    USTypesPipe,
    ARPTypePipe,
    ItemSalePriceTypePipe,
    //

    Dialog_StockComponent,
    Dialog_newItemComponent,
    Dialog_editInspectComponent,
    Dialog_deleteItemComponent,
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

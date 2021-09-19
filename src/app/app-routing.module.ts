import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { BankaComponent } from './components/finans/ana-kayitlar/banka/banka.component';
import { CariHesaplarComponent } from './components/finans/ana-kayitlar/cari-hesaplar/cari-hesaplar.component';
import { CekSenetlerComponent } from './components/finans/ana-kayitlar/cek-senetler/cek-senetler.component';
import { KasaComponent } from './components/finans/ana-kayitlar/kasa/kasa.component';
import { Odeme_tahsilatPlanlariComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/odeme_tahsilat-planlari.component';
import { FinansComponent } from './components/finans/finans.component';
import { BankaFisleriComponent } from './components/finans/hareketler/banka-fisleri/banka-fisleri.component';
import { CariHesapFisleriComponent } from './components/finans/hareketler/cari-hesap-fisleri/cari-hesap-fisleri.component';
import { CekSenetBordrolariComponent } from './components/finans/hareketler/cek-senet-bordrolari/cek-senet-bordrolari.component';
import { KasaFisleriComponent } from './components/finans/hareketler/kasa-fisleri/kasa-fisleri.component';
import { DiibComponent } from './components/ihracat/hareketler/diib/diib.component';
import { IhracatOperasyonFisleriComponent } from './components/ihracat/hareketler/ihracat-operasyon-fisleri/ihracat-operasyon-fisleri.component';
import { IkSatinalmaFaturalariComponent } from './components/ihracat/hareketler/ik-satinalma-faturalari/ik-satinalma-faturalari.component';
import { IkSatisFaturalariComponent } from './components/ihracat/hareketler/ik-satis-faturalari/ik-satis-faturalari.component';
import { IhracatComponent } from './components/ihracat/ihracat.component';
import { DagitimFisleriComponent } from './components/ithalat/hareketler/dagitim-fisleri/dagitim-fisleri.component';
import { IthalatOperasyonFisleriComponent } from './components/ithalat/hareketler/ithalat-operasyon-fisleri/ithalat-operasyon-fisleri.component';
import { MalzemeDolasimFisleriComponent } from './components/ithalat/hareketler/malzeme-dolasim-fisleri/malzeme-dolasim-fisleri.component';
import { MillilestirmeFisleriComponent } from './components/ithalat/hareketler/millilestirme-fisleri/millilestirme-fisleri.component';
import { IthalatComponent } from './components/ithalat/ithalat.component';
import { LoginComponent } from './components/login/login.component';
import { BirimSetleriComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/birim-setleri.component';
import { MalzemeOzellikleriComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzeme-ozellikleri/malzeme-ozellikleri.component';
import { MalzemelerComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/malzemeler.component';
import { HizliUretimFisleriComponent } from './components/malzeme-yonetimi/hareketler/hizli-uretim-fisleri/hizli-uretim-fisleri.component';
import { MaliyetDagitimFisleriComponent } from './components/malzeme-yonetimi/hareketler/maliyet-dagitim-fisleri/maliyet-dagitim-fisleri.component';
import { MalzemeYonetimFisleriComponent } from './components/malzeme-yonetimi/hareketler/malzeme-yonetim-fisleri/malzeme-yonetim-fisleri.component';
import { MalzemeYonetimiComponent } from './components/malzeme-yonetimi/malzeme-yonetimi.component';
import { AlinanHizmetlerComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/alinan-hizmetler.component';
import { HizmetAlimFiyatlariComponent } from './components/satinalma/ana-kayitlar/hizmet-alim-fiyatlari/hizmet-alim-fiyatlari.component';
import { SatinalmaIndirimleriComponent } from './components/satinalma/ana-kayitlar/satinalma-indirimleri/satinalma-indirimleri.component';
import { SatinalmaKampanyalariComponent } from './components/satinalma/ana-kayitlar/satinalma-kampanyalari/satinalma-kampanyalari.component';
import { SatinalmaMasraflariComponent } from './components/satinalma/ana-kayitlar/satinalma-masraflari/satinalma-masraflari.component';
import { SatinalmaFaturalariComponent } from './components/satinalma/hareketler/satinalma-faturalari/satinalma-faturalari.component';
import { SatinalmaIrsaliyeleriComponent } from './components/satinalma/hareketler/satinalma-irsaliyeleri/satinalma-irsaliyeleri.component';
import { SatinalmaSiparisleriComponent } from './components/satinalma/hareketler/satinalma-siparisleri/satinalma-siparisleri.component';
import { SatinalmaComponent } from './components/satinalma/satinalma.component';
import { DagitimAraclariComponent } from './components/satis/ana-kayitlar/dagitim-araclari/dagitim-araclari.component';
import { DagitimRotalariComponent } from './components/satis/ana-kayitlar/dagitim-rotalari/dagitim-rotalari.component';
import { HizmetSatisFiyatlariComponent } from './components/satis/ana-kayitlar/hizmet-satis-fiyatlari/hizmet-satis-fiyatlari.component';
import { MalzemeSatisFiyatlariComponent } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/malzeme-satis-fiyatlari.component';
import { SatisIndirimleriComponent } from './components/satis/ana-kayitlar/satis-indirimleri/satis-indirimleri.component';
import { SatisMasraflariComponent } from './components/satis/ana-kayitlar/satis-masraflari/satis-masraflari.component';
import { VerilenHizmetlerComponent } from './components/satis/ana-kayitlar/verilen-hizmetler/verilen-hizmetler.component';
import { SatisFaturalariComponent } from './components/satis/hareketler/satis-faturalari/satis-faturalari.component';
import { SatisIrsaliyeleriComponent } from './components/satis/hareketler/satis-irsaliyeleri/satis-irsaliyeleri.component';
import { SatisSiparisleriComponent } from './components/satis/hareketler/satis-siparisleri/satis-siparisleri.component';
import { SatisComponent } from './components/satis/satis.component';
import { MainComponent } from './components/shared/main/main.component';
import { AuthGuardService } from './services/authGuard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'configure', component: ConfigureComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '', component: MainComponent, children: [
      {
        path: 'malzeme-yonetimi', component: MalzemeYonetimiComponent, children: [
          { path: 'malzemeler', component: MalzemelerComponent },
          { path: 'malzeme-ozellikleri', component: MalzemeOzellikleriComponent },
          { path: 'birim-setleri', component: BirimSetleriComponent },
          { path: 'hizli-uretim-fisleri', component: HizliUretimFisleriComponent },
          { path: 'maliyet-dagitim-fisleri', component: MaliyetDagitimFisleriComponent },
          { path: 'malzeme-yonetim-fisleri', component: MalzemeYonetimFisleriComponent },
        ]
      },

      {
        path: 'finans', component: FinansComponent, children: [
          { path: 'cari-hesaplar', component: CariHesaplarComponent },
          { path: 'odeme-tahsilat-planlari', component: Odeme_tahsilatPlanlariComponent },
          { path: 'cek-senetler', component: CekSenetlerComponent },
          { path: 'kasa', component: KasaComponent },
          { path: 'banka', component: BankaComponent },
          { path: 'cari-hesap-fisleri', component: CariHesapFisleriComponent },
          { path: 'cek-senet-bordrolari', component: CekSenetBordrolariComponent },
          { path: 'banka-fisleri', component: BankaFisleriComponent },
          { path: 'kasa-islemleri', component: KasaFisleriComponent },
        ]
      },

      {
        path: 'satinalma', component: SatinalmaComponent, children: [
          { path: 'alinan-hizmetler', component: AlinanHizmetlerComponent },
          { path: 'satinalma-indirimleri', component: SatinalmaIndirimleriComponent },
          { path: 'satinalma-masraflari', component: SatinalmaMasraflariComponent },
          { path: 'hizmet-alim-fiyatlari', component: HizmetAlimFiyatlariComponent },
          { path: 'satinalma-kampanyalari', component: SatinalmaKampanyalariComponent },
          { path: 'satinalma-siparisleri', component: SatinalmaSiparisleriComponent },
          { path: 'satinalma-irsaliyeleri', component: SatinalmaIrsaliyeleriComponent },
          { path: 'satinalma-faturalari', component: SatinalmaFaturalariComponent },
          { path: 'odeme-tahsilat-planlari', component: Odeme_tahsilatPlanlariComponent }
        ]
      },

      {
        path: 'satis', component: SatisComponent, children: [
          { path: 'verilen-hizmetler', component: VerilenHizmetlerComponent },
          { path: 'satis-indirimleri', component: SatisIndirimleriComponent },
          { path: 'satis-masraflari', component: SatisMasraflariComponent },
          { path: 'malzeme-satis-fiyatlari', component: MalzemeSatisFiyatlariComponent },
          { path: 'hizmet-satis-fiyatlari', component: HizmetSatisFiyatlariComponent },
          { path: 'dagitim-araclari', component: DagitimAraclariComponent },
          { path: 'dagitim-rotalari', component: DagitimRotalariComponent },
          { path: 'satis-siparisleri', component: SatisSiparisleriComponent },
          { path: 'satis-irsaliyeleri', component: SatisIrsaliyeleriComponent },
          { path: 'satis-faturalari', component: SatisFaturalariComponent },
        ]
      },

      {
        path: 'ihracat', component: IhracatComponent, children: [
          { path: 'diib', component: DiibComponent },
          { path: 'ihracat-operasyon-fisleri', component: IhracatOperasyonFisleriComponent },
          { path: 'ik-satinalma-faturalari', component: IkSatinalmaFaturalariComponent },
          { path: 'ik-satis-faturalari', component: IkSatisFaturalariComponent },
        ]
      },

      {
        path: 'ithalat', component: IthalatComponent, children: [
          { path: 'ithalat-operasyon-fisleri', component: IthalatOperasyonFisleriComponent },
          { path: 'malzeme-dolasim-fisleri', component: MalzemeDolasimFisleriComponent },
          { path: 'dagitim-fisleri', component: DagitimFisleriComponent },
          { path: 'millilestirme-fisleri', component: MillilestirmeFisleriComponent }
        ]
      },

    ], canActivate: [AuthGuardService]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

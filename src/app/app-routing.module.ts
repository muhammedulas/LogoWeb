import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigureComponent } from './components/configure/configure.component';
import { BankaComponent } from './components/finans/ana-kayitlar/banka/banka.component';
import { CariHesaplarComponent } from './components/finans/ana-kayitlar/cari-hesaplar/cari-hesaplar.component';
import { CekSenetlerComponent } from './components/finans/ana-kayitlar/cek-senetler/cek-senetler.component';
import { KasaComponent } from './components/finans/ana-kayitlar/kasa/kasa.component';
import { Odeme_tahsilatPlanlariComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/odeme_tahsilat-planlari.component';
import { FinansComponent } from './components/finans/finans.component';
import { IhracatComponent } from './components/ihracat/ihracat.component';
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
import { SatinalmaComponent } from './components/satinalma/satinalma.component';
import { SatisComponent } from './components/satis/satis.component';
import { MainComponent } from './components/shared/main/main.component';
import { AuthGuardService } from './services/authGuard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'configure', component: ConfigureComponent },
  {
    path: '', component: MainComponent, children: [
      { path: 'malzeme-yonetimi', component: MalzemeYonetimiComponent },
      //Malzeme Yönetimi
        { path: 'malzemeler', component: MalzemelerComponent },
        { path: 'malzeme-ozellikleri', component: MalzemeOzellikleriComponent },
        { path: 'birim-setleri', component: BirimSetleriComponent },
        { path: 'hizli-uretim-fisleri', component: HizliUretimFisleriComponent },
        { path: 'maliyet-dagitim-fisleri', component: MaliyetDagitimFisleriComponent },
        { path: 'malzeme-yonetim-fisleri', component: MalzemeYonetimFisleriComponent },
      //

      { path: 'finans', component: FinansComponent },
      //Finans
        {path:'cari-hesaplar',component:CariHesaplarComponent},
        {path:'odeme-tahsilat-planlari',component:Odeme_tahsilatPlanlariComponent},
        {path:'cek-senetler',component:CekSenetlerComponent},
        {path:'kasa',component:KasaComponent},
        {path:'banka', component:BankaComponent},
      //

      { path: 'satinalma', component: SatinalmaComponent },
      //Satınalma
        {path:'alinan-hizmetler', component:AlinanHizmetlerComponent},
      //
      { path: 'satis', component: SatisComponent },
      { path: 'ithalat', component: IthalatComponent },
      { path: 'ihracat', component: IhracatComponent }
    ],canActivate:[AuthGuardService]
  },
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

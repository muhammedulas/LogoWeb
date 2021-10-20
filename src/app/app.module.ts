import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG, HAMMER_LOADER } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

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
import { BankaComponent } from './components/finans/ana-kayitlar/banka/banka.component';
import { CariHesaplarComponent } from './components/finans/ana-kayitlar/cari-hesaplar/cari-hesaplar.component';
import { KasaComponent } from './components/finans/ana-kayitlar/kasa/kasa.component';
import { CekSenetlerComponent } from './components/finans/ana-kayitlar/cek-senetler/cek-senetler.component';
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
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuardService } from './services/authGuard.service';
import { LoadingComponent } from './components/shared/modular/loading/loading.component';


import { ItemTypesPipe } from './pipes/itemTypes.pipe';
import { ItemSalePriceTypePipe } from './pipes/itemSalePriceType.pipe';
import { ItemsSlipTypePipe } from './pipes/itemsSlipType.pipe';
import { ProdTypePipe } from './pipes/prodType.pipe';
import { ArpSlipTypePipe } from './pipes/arpSlipType.pipe';
import { ChequenPnoteRollTypePipe } from './pipes/chequenPnoteRollType.pipe';
import { BankSlipTypePipe } from './pipes/bankSlipType.pipe';
import { PurcDispatchTypePipe } from './pipes/purcDispatchType.pipe';
import { PurchaseInvoiceTypePipe } from './pipes/purchaseInvoiceType.pipe';
import { SalesDispatchTypePipe } from './pipes/salesDispatchType.pipe';
import { SalesInvoiceTypePipe } from './pipes/salesInvoiceType.pipe';
import { SafeDepositSlipTypePipe } from './pipes/safeDepositSlipType.pipe';
import { ChequeAndPnoteStatusPipe } from './pipes/chequeAndPnoteStatus.pipe';
import { ARPTypePipe } from './pipes/ARPType.pipe';
import { USTypesPipe } from './pipes/USTypes.pipe';


import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { SwipeAngularListModule } from 'swipe-angular-list';


import { Dialog_StockComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_Stock/dialog_Stock.component';
import { Dialog_newItemComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_newItem/dialog_newItem.component';
import { Dialog_editInspectComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_edit-inspect/dialog_edit-inspect.component';
import { Dialog_deleteItemComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzemeler/dialog_deleteItem/dialog_deleteItem.component'
import { Dialog_deleteUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_deleteUS/dialog_deleteUS.component';
import { Dialog_editInspectUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_edit-inspectUS/dialog_edit-inspectUS.component';
import { Dialog_newUSComponent } from './components/malzeme-yonetimi/ana-kayitlar/birim-setleri/dialog_newUS/dialog_newUS.component';
import { Dialog_editInspectItemCharComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzeme-ozellikleri/Dialog_edit-inspectItemChar/Dialog_edit-inspectItemChar.component';
import { Dialog_newItemCharComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzeme-ozellikleri/Dialog_newItemChar/Dialog_newItemChar.component';
import { Dialog_deleteItemCharComponent } from './components/malzeme-yonetimi/ana-kayitlar/malzeme-ozellikleri/Dialog_deleteItemChar/Dialog_deleteItemChar.component';
import { Dialog_newARPComponent } from './components/finans/ana-kayitlar/cari-hesaplar/Dialog_newARP/Dialog_newARP.component';
import { Dialog_editInspectARPComponent } from './components/finans/ana-kayitlar/cari-hesaplar/Dialog_editInspectARP/Dialog_editInspectARP.component';
import { Dialog_deleteARPComponent } from './components/finans/ana-kayitlar/cari-hesaplar/Dialog_deleteARP/Dialog_deleteARP.component';
import { Dialog_newPaymentPlanComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/Dialog_newPaymentPlan/Dialog_newPaymentPlan.component';
import { Dialog_editInspectPaymentPlanComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/Dialog_editInspectPaymentPlan/Dialog_editInspectPaymentPlan.component';
import { Dialog_deletePaymentPlanComponent } from './components/finans/ana-kayitlar/odeme_tahsilat-planlari/Dialog_deletePaymentPlan/Dialog_deletePaymentPlan.component';
import { Dialog_editInspectCnPnoteComponent } from './components/finans/ana-kayitlar/cek-senetler/Dialog_editInspectCnPnote/Dialog_editInspectCnPnote.component';
import { Dialog_deleteCnPnoteComponent } from './components/finans/ana-kayitlar/cek-senetler/Dialog_deleteCnPnote/Dialog_deleteCnPnote.component';
import { Dialog_newSDComponent } from './components/finans/ana-kayitlar/kasa/Dialog_newSD/Dialog_newSD.component';
import { Dialog_editInspectSDComponent } from './components/finans/ana-kayitlar/kasa/Dialog_editInspectSD/Dialog_editInspectSD.component';
import { Dialog_deleteSDComponent } from './components/finans/ana-kayitlar/kasa/Dialog_deleteSD/Dialog_deleteSD.component';
import { Dialog_newPurchasedServiceComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/Dialog_newPurchasedService/Dialog_newPurchasedService.component';
import { Dialog_editInspectPurchasedServiceComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/Dialog_editInspectPurchasedService/Dialog_editInspectPurchasedService.component';
import { Dialog_deletePurchasedServiceComponent } from './components/satinalma/ana-kayitlar/alinan-hizmetler/Dialog_deletePurchasedService/Dialog_deletePurchasedService.component';
import { Dialog_newPurchaseDiscountComponent } from './components/satinalma/ana-kayitlar/satinalma-indirimleri/Dialog_newPurchaseDiscount/Dialog_newPurchaseDiscount.component';
import { Dialog_editInspectPurchaseDiscountComponent } from './components/satinalma/ana-kayitlar/satinalma-indirimleri/Dialog_editInspectPurchaseDiscount/Dialog_editInspectPurchaseDiscount.component';
import { Dialog_deletePurchaseDiscountComponent } from './components/satinalma/ana-kayitlar/satinalma-indirimleri/Dialog_deletePurchaseDiscount/Dialog_deletePurchaseDiscount.component';
import { Dialog_newPurchaseExpenseComponent } from './components/satinalma/ana-kayitlar/satinalma-masraflari/Dialog_newPurchaseExpense/Dialog_newPurchaseExpense.component';
import { Dialog_editInspectPurchaseExpenseComponent } from './components/satinalma/ana-kayitlar/satinalma-masraflari/Dialog_editInspectPurchaseExpense/Dialog_editInspectPurchaseExpense.component';
import { Dialog_deletePurchaseExpenseComponent } from './components/satinalma/ana-kayitlar/satinalma-masraflari/Dialog_deletePurchaseExpense/Dialog_deletePurchaseExpense.component';
import { Dialog_newPurchaseCampaignComponent } from './components/satinalma/ana-kayitlar/satinalma-kampanyalari/Dialog_newPurchaseCampaign/Dialog_newPurchaseCampaign.component';
import { Dialog_editInspectPurchaseCampaignComponent } from './components/satinalma/ana-kayitlar/satinalma-kampanyalari/Dialog_editInspectPurchaseCampaign/Dialog_editInspectPurchaseCampaign.component';
import { Dialog_deletePurchaseCampaignComponent } from './components/satinalma/ana-kayitlar/satinalma-kampanyalari/Dialog_deletePurchaseCampaign/Dialog_deletePurchaseCampaign.component';
import { Dialog_newPurchasedServicePriceComponent } from './components/satinalma/ana-kayitlar/hizmet-alim-fiyatlari/Dialog_newPurchasedServicePrice/Dialog_newPurchasedServicePrice.component';
import { Dialog_editInspectPurchasedServicePriceComponent } from './components/satinalma/ana-kayitlar/hizmet-alim-fiyatlari/Dialog_editInspectPurchasedServicePrice/Dialog_editInspectPurchasedServicePrice.component';
import { Dialog_deletePurchasedServicePriceComponent } from './components/satinalma/ana-kayitlar/hizmet-alim-fiyatlari/Dialog_deletePurchasedServicePrice/Dialog_deletePurchasedServicePrice.component';
import { Dialog_deleteSoldServiceComponent } from './components/satis/ana-kayitlar/verilen-hizmetler/Dialog_deleteSoldService/Dialog_deleteSoldService.component';
import { Dialog_editInspectSoldServiceComponent } from './components/satis/ana-kayitlar/verilen-hizmetler/Dialog_editInspectSoldService/Dialog_editInspectSoldService.component';
import { Dialog_newSoldServiceComponent } from './components/satis/ana-kayitlar/verilen-hizmetler/Dialog_newSoldService/Dialog_newSoldService.component';
import { Dialog_newSalesExpenseComponent } from './components/satis/ana-kayitlar/satis-masraflari/Dialog_newSalesExpense/Dialog_newSalesExpense.component';
import { Dialog_editInspectSalesExpenseComponent } from './components/satis/ana-kayitlar/satis-masraflari/Dialog_editInspectSalesExpense/Dialog_editInspectSalesExpense.component';
import { Dialog_deleteSalesExpenseComponent } from './components/satis/ana-kayitlar/satis-masraflari/Dialog_deleteSalesExpense/Dialog_deleteSalesExpense.component';
import { Dialog_deleteSoldDiscountComponent } from './components/satis/ana-kayitlar/satis-indirimleri/Dialog_deleteSoldDiscount/Dialog_deleteSoldDiscount.component';
import { Dialog_editInspectSoldDiscountComponent } from './components/satis/ana-kayitlar/satis-indirimleri/Dialog_editInspectSoldDiscount/Dialog_editInspectSoldDiscount.component';
import { Dialog_newSoldDiscountComponent } from './components/satis/ana-kayitlar/satis-indirimleri/Dialog_newSoldDiscount/Dialog_newSoldDiscount.component';
import { Dialog_deleteItemSalePriceComponent } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/Dialog_deleteItemSalePrice/Dialog_deleteItemSalePrice.component';
import { Dialog_deleteServiceSalePriceComponent } from './components/satis/ana-kayitlar/hizmet-satis-fiyatlari/Dialog_deleteServiceSalePrice/Dialog_deleteServiceSalePrice.component';
import { Dialog_editInspectServiceSalePriceComponent } from './components/satis/ana-kayitlar/hizmet-satis-fiyatlari/Dialog_editInspectServiceSalePrice/Dialog_editInspectServiceSalePrice.component';
import { Dialog_editInspectItemSalePriceComponent } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/Dialog_editInspectItemSalePrice/Dialog_editInspectItemSalePrice.component';
import { Dialog_newItemSalePriceComponent } from './components/satis/ana-kayitlar/malzeme-satis-fiyatlari/Dialog_newItemSalePrice/Dialog_newItemSalePrice.component';
import { Dialog_newServiceSalePriceComponent } from './components/satis/ana-kayitlar/hizmet-satis-fiyatlari/Dialog_newServiceSalePrice/Dialog_newServiceSalePrice.component';
import { Dialog_newDistRouteComponent } from './components/satis/ana-kayitlar/dagitim-rotalari/Dialog_newDistRoute/Dialog_newDistRoute.component';
import { Dialog_editInspectDistRouteComponent } from './components/satis/ana-kayitlar/dagitim-rotalari/Dialog_editInspectDistRoute/Dialog_editInspectDistRoute.component';
import { Dialog_deleteDistRouteComponent } from './components/satis/ana-kayitlar/dagitim-rotalari/Dialog_deleteDistRoute/Dialog_deleteDistRoute.component';
import { Dialog_newVehicleComponent } from './components/satis/ana-kayitlar/dagitim-araclari/Dialog_newVehicle/Dialog_newVehicle.component';
import { Dialog_editInspectVehicleComponent } from './components/satis/ana-kayitlar/dagitim-araclari/Dialog_editInspectVehicle/Dialog_editInspectVehicle.component';
import { Dialog_deleteVehicleComponent } from './components/satis/ana-kayitlar/dagitim-araclari/Dialog_deleteVehicle/Dialog_deleteVehicle.component';
import { Dialog_newPurchaseOrderComponent } from './components/satinalma/hareketler/satinalma-siparisleri/dialog_newPurchaseOrder/dialog_newPurchaseOrder.component';
import { Dialog_editInspectPurchaseOrderComponent } from './components/satinalma/hareketler/satinalma-siparisleri/dialog_editInspectPurchaseOrder/dialog_editInspectPurchaseOrder.component';
import { Dialog_deletePurchaseOrderComponent } from './components/satinalma/hareketler/satinalma-siparisleri/Dialog_deletePurchaseOrder/Dialog_deletePurchaseOrder.component';
import { Dialog_newSalesOrderComponent } from './components/satis/hareketler/satis-siparisleri/dialog_newSalesOrder/dialog_newSalesOrder.component';
import { Dialog_newSalesDispatchComponent } from './components/satis/hareketler/satis-irsaliyeleri/dialog_newSalesDispatch/dialog_newSalesDispatch.component';
import { Dialog_editInspectSalesDispatchComponent } from './components/satis/hareketler/satis-irsaliyeleri/dialog_editInspectSalesDispatch/dialog_editInspectSalesDispatch.component';
import { Dialog_deleteSalesOrderComponent } from './components/satis/hareketler/satis-siparisleri/dialog_deleteSalesOrder/dialog_deleteSalesOrder.component';
import { Dialog_editInspectSalesOrderComponent } from './components/satis/hareketler/satis-siparisleri/dialog_editInspectSalesOrder/dialog_editInspectSalesOrder.component';
import { Dialog_deleteSalesDispatchComponent } from './components/satis/hareketler/satis-irsaliyeleri/dialog_deleteSalesDispatch/dialog_deleteSalesDispatch.component';
import { Dialog_newPurchaseDispatchComponent } from './components/satinalma/hareketler/satinalma-irsaliyeleri/dialog_newPurchaseDispatch/dialog_newPurchaseDispatch.component';
import { Dialog_editInspectPurchaseDispatchComponent } from './components/satinalma/hareketler/satinalma-irsaliyeleri/dialog_editInspectPurchaseDispatch/dialog_editInspectPurchaseDispatch.component';
import { Dialog_deletePurchaseDispatchComponent } from './components/satinalma/hareketler/satinalma-irsaliyeleri/dialog_deletePurchaseDispatch/dialog_deletePurchaseDispatch.component';
import { Dialog_newSalesInvoiceComponent } from './components/satis/hareketler/satis-faturalari/dialog_newSalesInvoice/dialog_newSalesInvoice.component';
import { Dialog_editInspectSalesInvoiceComponent } from './components/satis/hareketler/satis-faturalari/dialog_editInspectSalesInvoice/dialog_editInspectSalesInvoice.component';
import { Dialog_deleteSalesInvoiceComponent } from './components/satis/hareketler/satis-faturalari/dialog_deleteSalesInvoice/dialog_deleteSalesInvoice.component';
import { Dialog_newPurchaseInvoiceComponent } from './components/satinalma/hareketler/satinalma-faturalari/dialog_newPurchaseInvoice/dialog_newPurchaseInvoice.component';
import { Dialog_editInspectPurchaseInvoiceComponent } from './components/satinalma/hareketler/satinalma-faturalari/dialog_editInspectPurchaseInvoice/dialog_editInspectPurchaseInvoice.component';
import { Dialog_deletePurchaseInvoiceComponent } from './components/satinalma/hareketler/satinalma-faturalari/dialog_deletePurchaseInvoice/dialog_deletePurchaseInvoice.component';
import { Dialog_salesOrderComponent } from './components/satis/hareketler/satis-siparisleri/dialog_salesOrder/dialog_salesOrder.component'
import { LoginServiceService } from './services/loginService.service';


declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ConfigureComponent,
    LoadingComponent,
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
    ItemsSlipTypePipe,
    ProdTypePipe,
    ArpSlipTypePipe,
    ChequenPnoteRollTypePipe,
    BankSlipTypePipe,
    PurcDispatchTypePipe,
    PurchaseInvoiceTypePipe,
    SalesDispatchTypePipe,
    SalesInvoiceTypePipe,
    SafeDepositSlipTypePipe,
    //

    //Administration
    AdminComponent,
    //

    Dialog_StockComponent,
    Dialog_newItemComponent,
    Dialog_editInspectComponent,
    Dialog_deleteItemComponent,
    Dialog_deleteUSComponent,
    Dialog_editInspectUSComponent,
    Dialog_newUSComponent,
    Dialog_editInspectItemCharComponent,
    Dialog_newItemCharComponent,
    Dialog_deleteItemCharComponent,
    Dialog_newARPComponent,
    Dialog_editInspectARPComponent,
    Dialog_deleteARPComponent,
    Dialog_newPaymentPlanComponent,
    Dialog_editInspectPaymentPlanComponent,
    Dialog_deletePaymentPlanComponent,
    Dialog_editInspectCnPnoteComponent,
    Dialog_deleteCnPnoteComponent,
    Dialog_newSDComponent,
    Dialog_editInspectSDComponent,
    Dialog_deleteSDComponent,
    Dialog_newPurchasedServiceComponent,
    Dialog_editInspectPurchasedServiceComponent,
    Dialog_deletePurchasedServiceComponent,
    Dialog_newPurchaseDiscountComponent,
    Dialog_editInspectPurchaseDiscountComponent,
    Dialog_deletePurchaseDiscountComponent,
    Dialog_newPurchaseExpenseComponent,
    Dialog_editInspectPurchaseExpenseComponent,
    Dialog_deletePurchaseExpenseComponent,
    Dialog_newPurchaseCampaignComponent,
    Dialog_editInspectPurchaseCampaignComponent,
    Dialog_deletePurchaseCampaignComponent,
    Dialog_newPurchasedServicePriceComponent,
    Dialog_editInspectPurchasedServicePriceComponent,
    Dialog_deletePurchasedServicePriceComponent,
    Dialog_deleteSoldServiceComponent,
    Dialog_editInspectSoldServiceComponent,
    Dialog_newSoldServiceComponent,
    Dialog_newSalesExpenseComponent,
    Dialog_editInspectSalesExpenseComponent,
    Dialog_deleteSalesExpenseComponent,
    Dialog_deleteSoldDiscountComponent,
    Dialog_editInspectSoldDiscountComponent,
    Dialog_newSoldDiscountComponent,
    Dialog_editInspectItemSalePriceComponent,
    Dialog_deleteItemSalePriceComponent,
    Dialog_editInspectServiceSalePriceComponent,
    Dialog_deleteServiceSalePriceComponent,
    Dialog_newItemSalePriceComponent,
    Dialog_newServiceSalePriceComponent,
    Dialog_newDistRouteComponent,
    Dialog_editInspectDistRouteComponent,
    Dialog_deleteDistRouteComponent,
    Dialog_newVehicleComponent,
    Dialog_editInspectVehicleComponent,
    Dialog_deleteVehicleComponent,
    Dialog_newPurchaseOrderComponent,
    Dialog_editInspectPurchaseOrderComponent,
    Dialog_deletePurchaseOrderComponent,
    Dialog_newSalesOrderComponent,
    Dialog_editInspectSalesOrderComponent,
    Dialog_deleteSalesOrderComponent,
    Dialog_newSalesDispatchComponent,
    Dialog_editInspectSalesDispatchComponent,
    Dialog_deleteSalesDispatchComponent,
    Dialog_newPurchaseDispatchComponent,
    Dialog_editInspectPurchaseDispatchComponent,
    Dialog_deletePurchaseDispatchComponent,
    Dialog_newSalesInvoiceComponent,
    Dialog_editInspectSalesInvoiceComponent,
    Dialog_deleteSalesInvoiceComponent,
    Dialog_newPurchaseInvoiceComponent,
    Dialog_editInspectPurchaseInvoiceComponent,
    Dialog_deletePurchaseInvoiceComponent,
    Dialog_salesOrderComponent




  ],
  entryComponents: [
    Dialog_StockComponent,
    Dialog_editInspectComponent,
    Dialog_newItemComponent,
    Dialog_deleteItemComponent,
    Dialog_deleteUSComponent,
    Dialog_newUSComponent,
    Dialog_editInspectUSComponent,
    Dialog_editInspectItemCharComponent,
    Dialog_newItemCharComponent,
    Dialog_deleteItemCharComponent,
    Dialog_newARPComponent,
    Dialog_editInspectARPComponent,
    Dialog_newPaymentPlanComponent,
    Dialog_editInspectPaymentPlanComponent,
    Dialog_deletePaymentPlanComponent,
    Dialog_editInspectCnPnoteComponent,
    Dialog_deleteCnPnoteComponent,
    Dialog_newSDComponent,
    Dialog_editInspectSDComponent,
    Dialog_deleteSDComponent,
    Dialog_newPurchasedServiceComponent,
    Dialog_editInspectPurchasedServiceComponent,
    Dialog_deletePurchasedServiceComponent,
    Dialog_newPurchaseDiscountComponent,
    Dialog_editInspectPurchaseDiscountComponent,
    Dialog_deletePurchaseDiscountComponent,
    Dialog_newPurchaseExpenseComponent,
    Dialog_editInspectPurchaseExpenseComponent,
    Dialog_deletePurchaseExpenseComponent,
    Dialog_newPurchaseCampaignComponent,
    Dialog_editInspectPurchaseCampaignComponent,
    Dialog_deletePurchaseCampaignComponent,
    Dialog_newPurchasedServicePriceComponent,
    Dialog_editInspectPurchasedServicePriceComponent,
    Dialog_deletePurchasedServicePriceComponent,
    Dialog_deleteSoldServiceComponent,
    Dialog_editInspectSoldServiceComponent,
    Dialog_newSoldServiceComponent,
    Dialog_newSalesExpenseComponent,
    Dialog_editInspectSalesExpenseComponent,
    Dialog_deleteSalesExpenseComponent,
    Dialog_deleteSoldDiscountComponent,
    Dialog_editInspectSoldDiscountComponent,
    Dialog_newSoldDiscountComponent,
    Dialog_editInspectItemSalePriceComponent,
    Dialog_deleteItemSalePriceComponent,
    Dialog_editInspectServiceSalePriceComponent,
    Dialog_deleteServiceSalePriceComponent,
    Dialog_newItemSalePriceComponent,
    Dialog_newServiceSalePriceComponent,
    Dialog_newDistRouteComponent,
    Dialog_editInspectDistRouteComponent,
    Dialog_deleteDistRouteComponent,
    Dialog_newVehicleComponent,
    Dialog_editInspectVehicleComponent,
    Dialog_deleteVehicleComponent,
    Dialog_newPurchaseOrderComponent,
    Dialog_editInspectPurchaseOrderComponent,
    Dialog_deletePurchaseOrderComponent,
    Dialog_newSalesOrderComponent,
    Dialog_editInspectSalesOrderComponent,
    Dialog_deleteSalesOrderComponent,
    Dialog_newSalesDispatchComponent,
    Dialog_editInspectSalesDispatchComponent,
    Dialog_deleteSalesDispatchComponent,
    Dialog_newPurchaseDispatchComponent,
    Dialog_editInspectPurchaseDispatchComponent,
    Dialog_deletePurchaseDispatchComponent,
    Dialog_newSalesInvoiceComponent,
    Dialog_editInspectSalesInvoiceComponent,
    Dialog_deleteSalesInvoiceComponent,
    Dialog_newPurchaseInvoiceComponent,
    Dialog_editInspectPurchaseInvoiceComponent,
    Dialog_deletePurchaseInvoiceComponent



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
    ToastrModule.forRoot({ maxOpened: 3, autoDismiss: true, preventDuplicates: true, resetTimeoutOnDuplicate: true, includeTitleDuplicates: true }),
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HammerModule,
    SwipeAngularListModule,
  ],
  providers: [
    AuthGuardService,
    LoginComponent,
    LoginServiceService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { panelClass: 'mat-dialog-override' } },
    { provide: HAMMER_LOADER, useValue: () => new Promise(() => { }) },
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}],

  bootstrap: [AppComponent]
})
export class AppModule { }

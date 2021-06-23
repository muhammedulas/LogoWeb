import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankSlipType'
})
export class BankSlipTypePipe implements PipeTransform {

  transform(value: number): any {
    if (value == 1) return "Banka İşlem Fişi";
    if (value == 2) return "Banka Virman Fişi";
    if (value == 3) return "Gelen Havale/EFT";
    if (value == 4) return "Gönderilen Havale/EFT";
    if (value == 5) return "Banka Açılış Fişi";
    if (value == 6) return "Bank Kur Farkı Fişi";
    if (value == 7) return "Döviz Alış Belgesi";
    if (value == 8) return "Döviz Satış Belgesi";
    if (value == 16) return "Banka Alınan Hizmet Faturası";
    if (value == 17) return "Banka Verilen Hizmet Faturası";
    if (value == 18) return "Bankadan Çek Ödemesi";
    if (value == 19) return "Bankadan Senet Ödemesi";
    if (value == 20) return "Bankadan Gider Pusulası";
    if (value == 21) return "Bankadan Müstahsil Makbuzu";
  }

}

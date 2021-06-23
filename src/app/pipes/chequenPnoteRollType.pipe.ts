import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chequenPnoteRollType'
})
export class ChequenPnoteRollTypePipe implements PipeTransform {

  transform(value: number): any {
    if(value == 1) return "Çek Girişi";
    if(value == 2) return "Senet Girişi";
    if(value == 3) return "Çek Çıkış (Cari Hesaba)";
    if(value == 4) return "Senet Çıkış (Cari Hesaba)";
    if(value == 5) return "Çek Çıkış (Banka Tahsil)";
    if(value == 6) return "Senet Çıkış (Banka Tahsil)";
    if(value == 7) return "Çek Çıkış (Banka Teminat)";
    if(value == 8) return "Senet Çıkış (Banka Teminat)";
    if(value == 9) return "İşlem Bordrosu (Müşteri Çeki)";
    if(value == 10) return "İşlem Bordrosu (Müşteri Senedi)";
    if(value == 11) return "İşlem Bordrosu (Kendi Çekimiz)";
    if(value == 12) return "İşlem Bordrosu (Borç Senedimiz)";
    if(value == 13) return "İşyerleri Arası İşl. Bord. (Müşteri Çeki)";
    if(value == 14) return "İşyerleri Arası İşl. Bord. (Müşteri Senedi)";
    else return "";
  }

}

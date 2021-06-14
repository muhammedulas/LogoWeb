import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arpSlipType'
})
export class ArpSlipTypePipe implements PipeTransform {

  transform(value: number): string {
    if(value == 1) return "Nakit Tahsilat";
    if(value == 2) return "Nakit Ödeme";
    if(value == 3) return "Borç Dekontu";
    if(value == 4) return "Alacak Dekontu";
    if(value == 5) return "Virman Fişi";
    if(value == 6) return "Kur Farkı Fişi";
    if(value == 12) return "Özel Fiş";
    if(value == 14) return "Açılış Fişi";
    if(value == 41) return "Verilen Vade Farkı Faturası";
    if(value == 42) return "Alınan Vade Farkı Faturası";
    if(value == 45) return "Verilen Serbest Meslek Makbuzu";
    if(value == 46) return "Alınan Serbest Meslek Makbuzu";
    if(value == 70) return "Kredi Kartı Fişi";
    if(value == 71) return "Kredi Kartı İade Fişi";
    if(value == 72) return "Firma Kredi Kartı Fişi";
    if(value == 73) return "Firma Kredi Kartı İade Fişi";
    else return ""
  }

}

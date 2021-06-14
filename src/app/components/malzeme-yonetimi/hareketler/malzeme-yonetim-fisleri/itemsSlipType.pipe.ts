import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsSlipType'
})
export class ItemsSlipTypePipe implements PipeTransform {

  transform(value: number): string {
    if(value == 11) return "Fire Fişi";
    if(value == 12) return "Sarf Fişi";
    if(value == 13) return "Üretimden Giriş Fişi";
    if(value == 14) return "Devir Fişi";
    if(value == 25) return "Ambar Fişi";
    if(value == 50) return "Sayım Fazlası Fişi";
    if(value == 51) return "Sayım Eksiği Fişi";

    else return ""
  }

}

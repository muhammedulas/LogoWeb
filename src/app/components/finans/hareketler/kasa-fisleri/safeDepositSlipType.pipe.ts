import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeDepositSlipType'
})
export class SafeDepositSlipTypePipe implements PipeTransform {

  transform(value: number): any {
    if (value == 11) return "CH Tahsilat";
    if (value == 12) return "CH Ödeme";
    if (value == 21) return "Bankaya Yatırılan";
    if (value == 22) return "Bankadan Çekilen";
    if (value == 41) return "Muhasebe Tahsil İşlemi";
    if (value == 42) return "Muhasebe Tediye İşlemi";
    if (value == 61) return "Çek Tahsili";
    if (value == 62) return "Senet Tahsili";
  }

}

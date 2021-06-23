import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purchaseInvoiceType'
})
export class PurchaseInvoiceTypePipe implements PipeTransform {

  transform(value: number): any {
    if(value == 1) return "Satınalma Faturası";
    if(value == 4) return "Alınan Hizmet Faturası";
    if(value == 5) return "Alınan Proforma Fatura";
    if(value == 6) return "Satınalma İade Faturası";
    if(value == 13) return "Alınan Hizmet Fiyat Farkı Faturası";
    if(value == 26) return "Müstahsil Makbuzu";

    else return "";
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salesInvoiceType'
})
export class SalesInvoiceTypePipe implements PipeTransform {

  transform(value: number): any {
    
    if(value == 2) return "Perakende Satış İade Faturası";
    if(value == 3) return "Toptan Satış İade Faturası";
    if(value == 7) return "Perakende Satış Faturası";
    if(value == 8) return "Toptan Satış Faturası";
    if(value == 9) return "Verilen Hizmet Faturası";
    if(value == 10) return "Verilen Proforma Faturası";
    if(value == 14) return "Satış Fiyat Farkı Faturası";

    else return "";
  }

}

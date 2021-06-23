import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chequeAndPnoteStatus'
})
export class ChequeAndPnoteStatusPipe implements PipeTransform {

  transform(value: number): any {
    if(value == 1)  return 'Portföyde' 
    if(value == 2)  return 'Ciro Edildi' 
    if(value == 3)  return 'Teminata Verildi' 
    if(value == 4)  return 'Tahsile Verildi' 
    if(value == 5)  return 'Protestolu Tahsile Verildi' 
    if(value == 6)  return 'İade Edildi' 
    if(value == 7)  return 'Protesto Edildi' 
    if(value == 8)  return 'Tahsil Edildi' 
    if(value == 9)  return 'Kendi Çekimiz' 
    if(value == 10)  return 'Borç Senedimiz' 
    if(value == 11)  return 'Karşılığı Yok' 
    if(value == 12)  return 'Tahsil Edilemiyor' 
  }

}

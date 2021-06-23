import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salesDispatchType'
})
export class SalesDispatchTypePipe implements PipeTransform {

  transform(value: number): any {
    if(value == 2) return "Perakende Satış İade İrsaliyesi";
    if(value == 3) return "Toptan Satış İade İrsaliyesi";
    if(value == 4) return "Konsinye Çıkış İade İrsaliyesi";
    if(value == 7) return "Perakende Satış İrsaliyesi";
    if(value == 8) return "Toptan Satış İrsaliyesi";
    if(value == 9) return "Konsinye Çıkış İrsaliyesi";

    else return "";
  }

}

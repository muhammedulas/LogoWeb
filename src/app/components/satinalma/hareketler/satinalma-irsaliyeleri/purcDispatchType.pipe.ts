import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purcDispatchType'
})
export class PurcDispatchTypePipe implements PipeTransform {

  transform(value: number): any {
    if (value == 1) return "Satınalma İrsaliyesi";
    if (value == 5) return "Konsinye Giriş İrsaliyesi";
    if (value == 6) return "Satınalma İade İrsaliyesi";
    if (value == 10) return "Konsinye Giriş İade İrsaliyesi";
    if (value == 26) return "Müstahsil İrsaliyesi";
    else return "";
  }

}

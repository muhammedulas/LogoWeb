import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: number): any {
    if (value == 1) return "Öneri";
    if (value == 2) return "Sevkedilemez";
    if (value == 4) return "Sevkedilebilir";
  }

}

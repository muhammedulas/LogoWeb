import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prodType'
})
export class ProdTypePipe implements PipeTransform {

  transform(value: number): any {
    if(value == 1) return "Üretim";
    if(value == 2) return "Takım Boz";
    if(value == 3) return "Fason";
  }

}

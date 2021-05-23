import { Pipe, PipeTransform } from '@angular/core';
import { itemSalePrice } from 'src/app/models/itemSalePrice';

@Pipe({
  name: 'itemSalePriceType'
})
export class ItemSalePriceTypePipe implements PipeTransform {

  transform(value: number): any {
    if(value == 0) return 'Malzeme'
    if(value == 1) return 'Malzeme Sınıfı'
    else return null
  }

}

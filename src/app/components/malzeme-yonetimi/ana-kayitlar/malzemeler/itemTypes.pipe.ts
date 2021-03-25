import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemTypes'
})
export class ItemTypesPipe implements PipeTransform {

  transform(value: number): any {
    if (value === 1) return '(TM)'
    if (value === 2) return '(KK)'
    if (value === 3) return '(DM)'
    if (value === 4) return '(SK)'
    if (value === 10) return '(HM)'
    if (value === 11) return '(YM)'
    if (value === 12) return '(MM)'
    if (value === 13) return '(TK)'
    if (value === 20) return '(MS)'
    if (value === 21) return '(MT)'
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USTypes'
})
export class USTypesPipe implements PipeTransform {

  transform(value: number): any {
    if (value === 1) return '(UZ)'
    if (value === 2) return '(AL)'
    if (value === 3) return '(HC)'
    if (value === 4) return '(AĞ)'
    if (value === 5) return '(KT)'

  }

}

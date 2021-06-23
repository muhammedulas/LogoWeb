import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ARPType'
})
export class ARPTypePipe implements PipeTransform {

  transform(value:number): any {
    if(value == 1) return '(AL)'
    if(value == 2) return '(SA)'
    if(value == 3) return '(AS)'
    if(value == 4) return '(GS)'
  }

}

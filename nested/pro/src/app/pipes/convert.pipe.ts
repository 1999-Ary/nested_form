import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any): any {
    debugger
    const percentage= value * 9.5
    return percentage;
  }

}

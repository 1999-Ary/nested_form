import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    const years = new Date().getFullYear();
    const Input = new Date(value).getFullYear();
    var age = years - Input;
    return age;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToText',
})
export class DigitToTextPipe implements PipeTransform {
  transform(value: any): any {
    return value.toString();
  }
}

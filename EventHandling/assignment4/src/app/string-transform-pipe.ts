import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTransform',
  standalone: true
})
export class StringTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // 1. Remove everything except letters (A-Z, a-z)
    let onlyLetters = value.replace(/[^a-zA-Z]/g, '');  
    let reverseString = onlyLetters.split('').reverse().join('');

    return reverseString;
  }
}

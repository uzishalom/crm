import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUperCase',
})
export class FirstLetterUperCasePipe implements PipeTransform {
  transform(value: string): string {
    if (value != null && value.length > 0) {
      let trimmedStr = value.trim();
      return trimmedStr[0].toUpperCase() + trimmedStr.slice(1);
    }
    return '';
  }
}

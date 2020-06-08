import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilterTwoFieldsOr',
})
export class DataFilterTwoFieldsOrPipe implements PipeTransform {
  transform(
    value: Array<any>,
    property1: string,
    property2: string,
    filterText: string = ''
  ): Array<any> {
    if (
      property1 == null ||
      property1 == '' ||
      property2 == null ||
      property2 == ''
    ) {
      return value;
    }

    let filteredData = value.filter(
      (item) =>
        (item[property1] as string)
          .toUpperCase()
          .includes(filterText.toUpperCase()) ||
        (item[property2] as string)
          .toUpperCase()
          .includes(filterText.toUpperCase())
    );

    return filteredData;
  }
}

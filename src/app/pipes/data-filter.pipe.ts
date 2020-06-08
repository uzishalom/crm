import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
})
export class DataFilterPipe implements PipeTransform {
  transform(
    value: Array<any>,
    property: string,
    filterText: string = ''
  ): Array<any> {
    if (property == null || property == '') {
      return value;
    }

    let filteredData = value.filter((item) =>
      (item[property] as string)
        .toUpperCase()
        .includes(filterText.toUpperCase())
    );

    return filteredData;
  }
}

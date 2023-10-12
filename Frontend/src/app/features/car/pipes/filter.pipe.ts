import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car/car';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], textFilter: string): Car[] {

    textFilter = textFilter ? textFilter.toLocaleLowerCase() : "";
    const filterText = textFilter ? value.filter((c: Car) => c.model.name
      .toLocaleLowerCase().indexOf(textFilter) !== -1) : value;

    return filterText;
  }

}

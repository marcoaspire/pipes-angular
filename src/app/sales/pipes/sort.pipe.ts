import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(cars: Car[], sortBy: string = 'none'): Car[] {

    if (sortBy === 'none'){
      return cars;
    }
    else if (sortBy === 'name')
    {
      cars=cars.sort( (a1,a2) => 
        (a1.name > a2.name)? 1: -1
      );
      return cars;
    }
    else if (sortBy === 'year')
    {
      cars=cars.sort( (a1,a2) => 
        (a1.year > a2.year)? 1: -1
      );
      return cars;
    }
    else if (sortBy === 'color')
    {
      cars=cars.sort( (a1,a2) => 
        (a1.color > a2.color)? 1: -1
      );
      return cars;
    }
    return cars;
    
  }

}

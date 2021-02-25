import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let discount = args[0];
    let price = value - (discount / 100) * value + (args[1] / 100) * value;
    return price;
  }
}

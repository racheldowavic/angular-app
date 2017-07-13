import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterPipe',
  pure: false
})
export class MyFilterPipePipe implements PipeTransform {

  // static match(s1, s2) {
  //   return s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;
  // }

  transform(items: any[], filter: string): any {
    if (!items || !filter)
      return items;

    filter = filter.toLowerCase();

    return items.filter(item =>
      item.title.toLowerCase().indexOf(filter) !== -1 ||
      item.subtitle.toLowerCase().indexOf(filter) !== -1 ||
      item.body.toLowerCase().indexOf(filter) !== -1)
  }
}

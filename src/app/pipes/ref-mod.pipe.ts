import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencia'
})
export class RefModPipe implements PipeTransform {

  transform(value: string): string {
    return 'Ref-' + value;
  }

}

/**
 * Created by jckai on 10-Apr-17.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Prefix'
})

export class Base64PrefixPipe implements PipeTransform {
  transform(input: string, limit: number) {
    if(input)
      return ("data:image/png;base64, " + input);
  }
}

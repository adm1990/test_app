

import { Pipe, PipeTransform } from '@angular/core';
import { Picsum } from '../interfaces/picsum';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: Picsum[], valor: string, columna: string): any[] {
console.log('valor', valor);

    if (valor === undefined || valor === null || valor ==='') {     
      return arreglo;
    } else {
      return arreglo.filter(item => {
        return item['id'] === parseInt(valor) || item['text'].toUpperCase().includes(valor);
      });
    }
  }

}


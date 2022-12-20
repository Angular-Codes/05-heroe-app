import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe, ...args: unknown[]): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }

}

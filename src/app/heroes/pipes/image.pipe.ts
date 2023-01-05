import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  pure: false,
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe, ...args: unknown[]): string {

    if( !heroe.id ) return 'assets/no-image.png'
    if( heroe.alt_img?.startsWith('http') ) return heroe.alt_img;
    return `assets/heroes/${heroe.id}.jpg`;
  }

}

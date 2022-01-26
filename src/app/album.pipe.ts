import { Pipe, PipeTransform } from '@angular/core';
import { Albums } from 'src/models/albums';

@Pipe({
  name: 'album'
})
export class AlbumPipe implements PipeTransform {

  transform(albums : Albums[], idAlbum: string): Albums[] {

    if(!albums || !idAlbum){
      return albums;
    }
     return albums.filter(article => article.idAlbum.indexOf(idAlbum) !== -1)
  };
  }



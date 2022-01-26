import { Pipe, PipeTransform } from '@angular/core';
import { Albums } from 'src/models/albums';
import { Article } from 'src/models/article';
import { Songs } from 'src/models/songs';


@Pipe({
  name: 'fruitfilter'
})
export class FruitfilterPipe implements PipeTransform {

  transform(songs : Songs[], idAlbum: string): Songs[] {

    if(!songs || !idAlbum){
      return songs;
    }
     return songs.filter(article => article.idAlbum.indexOf(idAlbum) !== -1)
  }

}

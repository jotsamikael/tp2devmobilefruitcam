import { Pipe, PipeTransform } from '@angular/core';
import { Songs } from 'src/models/songs';

@Pipe({
  name: 'song'
})
export class SongPipe implements PipeTransform {

  transform(songs : Songs[], idSong: string): Songs[] {

    if(!songs || !idSong){
      return songs;
    }
     return songs.filter(article => article.idSong.indexOf(idSong) !== -1)
  }

}

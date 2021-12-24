import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/models/article';

@Pipe({
  name: 'fruitfilter'
})
export class FruitfilterPipe implements PipeTransform {

  transform(articles : Article[], colour: string): Article[] {

    if(!articles || !colour){
      return articles;
    }
     return articles.filter(article => article.catergory.indexOf(colour) !== -1)
  }

}

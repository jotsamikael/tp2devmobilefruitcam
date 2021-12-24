import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ArticlesService } from './articles.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any>{

  constructor( private articleService: ArticlesService) { }
  resolve(route: ActivatedRouteSnapshot) {
    let id= route.paramMap.get('id');
    return this.articleService.getData(id);
  }
}

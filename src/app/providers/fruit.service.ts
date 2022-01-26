import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private _listfruit = '../assets/albums.json';

  constructor(private _httpClient: HttpClient) { 

  }

  getFruit(){
   return this._httpClient.get(this._listfruit);
  }
}

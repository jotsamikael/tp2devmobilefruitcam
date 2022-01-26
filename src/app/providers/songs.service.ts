import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private _listsongs = '../assets/songs.json';
  private data = [];



  constructor(private _httpClient: HttpClient) { }
  setData(id, data){
    this.data[id] = data;
  }

  getSongs(){
    return this._httpClient.get(this._listsongs);
   }
}

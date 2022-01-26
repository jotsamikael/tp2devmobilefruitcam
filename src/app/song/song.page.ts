import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../providers/songs.service';
import {NativeAudio} from '@capacitor-community/native-audio'



@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {
  dataList: any;
  resultats: any;
  idSong: string;

  constructor(private songService: SongsService, private route: ActivatedRoute) {
    this.idSong =  this.route.snapshot.paramMap.get('idSong')
    console.log("your song is"+this.idSong);
   }


  async ngOnInit() {

    const duree = await NativeAudio.getDuration({ 
      assetId: this.idSong, //Identifiant unique du fichier
      });
      console.log("duree est="+duree.duration);

    this.songService.getSongs().subscribe((response: any)=>{
      console.log("response="+response);
      this.dataList = response;
      this.resultats= this.dataList;

      NativeAudio.preload({
        assetId: this.idSong, //Identifiant unique du fichier
      assetPath: this.resultats[this.idSong].link, //chemin relatif ou absolue (file://)
      audioChannelNum: 1, 
        isUrl: true //Si oui ou non le chemin du fichier est une URL

      })
    });

    NativeAudio.play({
      assetId: this.idSong,
      time:2
    });


    

      
  }






}

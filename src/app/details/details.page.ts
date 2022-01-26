import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Songs } from 'src/models/songs';
import { FruitService } from '../providers/fruit.service';
import { SongsService } from '../providers/songs.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  idAlbum: string;
  data: any;
  dataList: any;
  resultats: [];
  chiffre: number;
  datas: any;
  info: any;
 

  constructor(private fruitService: FruitService,private songService: SongsService,private route: ActivatedRoute, public navCtrl: NavController, private router: Router, private actionSheetController: ActionSheetController) { 
    this.idAlbum =  this.route.snapshot.paramMap.get('idAlbum')
    console.log("your album is"+this.idAlbum);


  }

  ngOnInit() {
    this.fruitService.getFruit().subscribe((response: any)=>{
      console.log(response);
      this.datas = response;
      this.info= this.datas;
    });
 

    this.songService.getSongs().subscribe((response: any)=>{
      console.log(response);
      this.dataList = response;
      this.resultats= this.dataList;
    });

    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
      console.log('your data is:', this.data)
      let chiffre = parseInt(this.idAlbum)


    }
  }


 

  goBack() : void{

    this.navCtrl.pop()
  }

  async choose(item){

    const actionSheet = await this.actionSheetController.create({


      header: item.title,
     
      buttons: [{
        text: 'Ajouter au favoris',
        role: 'destructive',
        icon: 'star-outline',
        handler: () => {
          localStorage.setItem('1',JSON.stringify(item));
          console.log('favoris', localStorage.getItem('1'));
        }
      }, {
        text: 'Acheter',
        icon: 'cash-outline',
        handler: () => {
          localStorage.clear();
          localStorage.setItem('1',JSON.stringify(item));
          console.log('send', localStorage.getItem('1'));
          this.router.navigate(['/checkout/'])

        }
      }, {
        text: 'Pas intéressé',
        icon: 'close-circle-outline',
        handler: () => {
          this.navCtrl.pop()
         
        }
      },
      {
        text: 'Annuler',
        icon: 'trash',
        handler: () => {
          console.log('trash');
        }
      }
      ]
    });
    await actionSheet.present();
  
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  
  showDetails(songs : Songs){
    this.songService.setData(songs.idSong, songs)   
    this.router.navigateByUrl('/song/'+songs.idSong)

  }

}

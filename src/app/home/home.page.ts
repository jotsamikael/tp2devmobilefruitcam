import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Albums } from 'src/models/albums';
import { Article } from 'src/models/article';
import { FruitService } from '../providers/fruit.service';
import { ArticlesService } from '../service/articles.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Articles : Article[];
  public navParams: NavParams;
  

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  dataList: any;
  resultats= [];
  show= false

  constructor(private fruitService: FruitService,public navCtrl: NavController, private router: Router, private articleservice: ArticlesService) {
   
  }


  ngOnInit() {

    
      this.fruitService.getFruit().subscribe((response: any)=>{
        console.log(response);
        this.dataList = response;
        this.resultats= this.dataList;
      });
      
    
  }


  searchItems(ev: any){
   let val = ev.target.value; //on recupère la saisie de l'utilisateur
   this.resultats = this.dataList.filter((item)=>{
     /**spinner */

    this.show=true;  
  setTimeout(() => {
    this.show=false;
  }, 1000);
    
     let txtNom = item.title + ''+ item.color;
     
     return txtNom.toLowerCase().indexOf(val.toLowerCase()) > -1; 
   });
  }
 


  showDetails(albums : Albums){
    this.articleservice.setData(albums.idAlbum, albums)   
    this.router.navigateByUrl('/details/'+albums.idAlbum)

  }

 
}

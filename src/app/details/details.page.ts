import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any;
 

  constructor(private route: ActivatedRoute,  public navCtrl: NavController, private router: Router, private actionSheetController: ActionSheetController) { 
   

  }

  ngOnInit() {
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
      console.log('your data is:', this.data)

    }
  }


 

  goBack() : void{

    this.navCtrl.pop()
  }

  async choose(item){

    const actionSheet = await this.actionSheetController.create({
      header: item.name,
     
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


}

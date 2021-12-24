import { Component } from '@angular/core';
import { Catergory } from 'src/models/catergory';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  catergories : Catergory[];
  public appMenu = [
    {title: 'Home', url:'/home', icon:'home'},
    {title: 'Games', url:'/games', icon:'game'},
    {title: 'Settings', url:'/settings', icon:'settings'}

  ];

  
  constructor() {
    this.catergories=[
      {
        name:"fruit rouge",
        description:"fruits de couleur rouge",
        colour: "danger"
      },
      {
        name:"fruit jaune",
        description:"fruits de couleur jaune",
        colour: "warning"

      },
      {
        name:"fruit vert",
        description:"fruits de couleur verte",
        colour: "success"

      },
      {
        name:"fruit bleu",
        description:"fruits de couleur bleu",
        colour: "primary"

      }
    ]
  }
}

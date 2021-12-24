import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
  item: any;

  constructor(private router: Router) { 
    this.item = JSON.parse(localStorage.getItem("1"))
    console.log("received", this.item)
   

  }

  ngOnInit() {

    
  }

  


}





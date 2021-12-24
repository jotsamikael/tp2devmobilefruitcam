import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  item: any;

  constructor() { 
   this.item = JSON.parse(localStorage.getItem("1"))
   
    console.log("received", this.item)
  }

  ngOnInit() {
  }

}


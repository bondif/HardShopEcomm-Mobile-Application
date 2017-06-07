import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { Checkout } from '../pages/checkout/checkout';

//providers
import {CartProvider} from "../providers/cart-provider";
import {Data} from "../providers/data";

@Component({
    templateUrl: 'cart.html'
})
export class Cart {
    products: object[]= [];
    qtes: number[] = [];
    ids: number[] = [];
    constructor(
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public cartProvider: CartProvider,
        public data: Data
    ) {
      let items = this.cartProvider.getItems();
      if(items.length > 0){
        for(let i=0; i<items.length; i++){
          this.qtes.push(items[i].qte);
          this.ids.push(items[i].id);
          this.products.push(this.data.getProductById(this.ids[i]));
        }
      } else {
        console.log('items is empty');
      }
    }

    close(){
        this.viewCtrl.dismiss();
    }

    goToCheckout(){
        this.navCtrl.push(Checkout);
    }
}

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
    products= [];
    idsQtis;
    total= 0;
    constructor(
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public cartProvider: CartProvider,
        public data: Data
    ) {
        this.idsQtis = this.cartProvider.prodsInCart;
        if(this.idsQtis.length){
            for(let i=0; i<this.idsQtis.length; i++){
                this.products.push(this.data.getProductById(this.idsQtis[i].id));
                this.total += this.products[i].newPrice as number;
            }
        } else {
            console.log('items is empty');
        }
        console.log(this.products);
    }

    close(){
        this.viewCtrl.dismiss();
    }

    goToCheckout(){
        this.navCtrl.push(Checkout);
    }
}

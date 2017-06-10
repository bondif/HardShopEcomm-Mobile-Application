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
    total:number= 0;
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
                this.products[i].qty = this.idsQtis[i].qty;
                this.total += (this.products[i].newPrice - 0) * (this.products[i].qty - 0);
            }
        } else {
            console.log('items is empty');
        }
        console.log(this.products);
    }

    increaseItem(i){
        this.cartProvider.prodsInCart[i].qty++;
        this.products[i].qty ++;
    }

    decreaseItem(i){
        if(this.products[i].qty > 1){
            this.cartProvider.prodsInCart[i].qty--;
            this.products[i].qty --;
        }
    }

    removeItem(i){
        this.cartProvider.prodsInCart.splice(i, 1);
        this.products.splice(i, 1);
    }

    close(){
        this.viewCtrl.dismiss();
    }

    goToCheckout(){
        this.navCtrl.push(Checkout);
    }
}

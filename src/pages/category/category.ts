import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

//pages
import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../../popovers/cart';

//providers
import {Data} from "../../providers/data";

@Component({
    selector: 'page-category',
    templateUrl: 'category.html'
})
export class Category {
  products: object[]= [];
  constructor(
      public navCtrl: NavController,
      public params: NavParams,
      public popoverCtrl: PopoverController,
      public data: Data
  ) {
    this.products = this.data.getProductByCat(this.params.get('target').idCat);
  }

  cartPopover(cartEvent){
      let popover = this.popoverCtrl.create(Cart);
      popover.present({
          ev: cartEvent
      });
  }

  target = this.params.get('target');

  goToProductDetails(p){
      this.navCtrl.push(ProductDetails, {
          'product' : p
      });
  }

  //this.selectBestSellers();
}

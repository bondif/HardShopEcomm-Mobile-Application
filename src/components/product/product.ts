import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductDetails } from '../../pages/product-details/product-details';

@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class Product {
  @Input() product;
  constructor(public navCtrl:NavController) {
    console.log('Hello Product Component');
  }

  goToProductDetails(p){
      this.navCtrl.push(ProductDetails, {
          'product' : p
      });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';

//pages
import { Cart } from '../../popovers/cart';
import { Category } from '../category/category';

/**
 * Generated class for the Checkout page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {

  constructor(
      public navCtrl: NavController,
      public popoverCtrl: PopoverController
  ) {
  }

  cartPopover(cartEvent){
    let popover = this.popoverCtrl.create(Cart);
    popover.present({
      ev: cartEvent
    });
  }

  showAllCategories(){
    this.navCtrl.push(Category, {
      target: 'All Categories'
    });
  }

  details = {}
  logForm() {
    console.log(this.details)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Checkout');
  }

}

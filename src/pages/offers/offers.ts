import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';

import { Data } from '../../providers/data';

import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../../popovers/cart';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class Offers {
  products = [];

  targetType = 'bestSellers';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: Data,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController
    ) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.data.getBestSellers()
        .then(prods => {
          this.products = prods;
          loading.dismiss();
        });
  }
  selectBestSellers(){
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
    this.data.getBestSellers()
      .then(prods => {
        this.products = prods;
        loading.dismiss();
      });
  }

  selectFeatured(){
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
    this.data.getFeatured()
      .then(prods => {
        this.products = prods;
        loading.dismiss();
      });
  }

  selectBestOffers(){
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
    this.data.getBestOffers()
      .then(prods => {
        this.products = prods;
        loading.dismiss();
      });
  }

  goToProductDetails(product){
    this.navCtrl.push(
      ProductDetails,{
        product : product
      }
    );
  }

  cartPopover(cartEvent){
    let popover = this.popoverCtrl.create(Cart);
    popover.present({
      ev: cartEvent
    });
  }

}

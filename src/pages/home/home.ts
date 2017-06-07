import { Component } from '@angular/core';
import { PopoverController, NavController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

//pages
import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../../popovers/cart';
import { Offers } from '../offers/offers';

//providers
import {Data} from "../../providers/data";
import {Helpers} from "../../providers/helpers";
import {NoInternet} from "../no-internet/no-internet";

import { File } from '@ionic-native/file';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nothing:boolean = false;
  searchTerm:string = '';
  filtredProducts = [];
  products = [];
  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public data: Data,
    public helpers: Helpers,
    public network: Network,
    public file: File
  ) {
    this.data.getProducts()
    .then(prods => {
      this.products = prods;
    });
  }

  ionViewDidLoad(){
    this.network.onDisconnect().subscribe(() => {
      //console.log('network was disconnected :-(');
      this.navCtrl.push(NoInternet);
    });
  }

  cartPopover(cartEvent){
    let popover = this.popoverCtrl.create(Cart);
    popover.present({
      ev: cartEvent
    });
  }

  goToProductDetails(product){
    this.navCtrl.push(
      ProductDetails,{
        product : product
      }
    );
  }

  showAllCategories(){
    this.navCtrl.push(Offers);
  }

  setFiltredProducts() {
      this.filtredProducts = this.searchTerm ? this.helpers.filterProducts(this.searchTerm, this.products) : [];
      this.nothing = this.helpers.filterProducts(this.searchTerm, this.products).length ? false : true;
      console.log(this.filtredProducts);
  }

  clearFiltredProducts(){
    console.log('cleared');
    this.filtredProducts = [];
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
}

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

//providers
import {Data} from "./data";

@Injectable()
export class CartProvider {
  prodsInCart = [];

  constructor(
      public http: Http,
      public storage: Storage,
      public data: Data
  ) {
    console.log('Hello CartProvider Provider');
  }

  addItem(id, qty){
    console.log(id + " " + qty + " cart provider");
    this.prodsInCart.push({
      id: id,
      qty: qty
    });
  }

  getItems(){
    let items=[];
    for(let i=1; i<=this.prodsInCart.length; i++){
      this.storage.get(i.toString()).then((val) => {
        items.push(val);
      });
    }
    console.log(items);
    return items;
  }

  removeItem(id){
    let index = -1;
    for(let i=0; i<this.prodsInCart.length; i++){
      index = this.prodsInCart.indexOf(id);
    }
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

//providers
import {Data} from "./data";

/*
  Generated class for the CartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartProvider {
  static nbItems = 0;

  constructor(
      public http: Http,
      public storage: Storage,
      public data: Data
  ) {
    console.log('Hello CartProvider Provider');
  }

  addItem(id, qte){
    CartProvider.nbItems++;
    console.log(CartProvider.nbItems);
    console.log(id + " " + qte);
    //this.storage.clear();
    this.storage.set(CartProvider.nbItems.toString(),{
      id: id,
      qte: qte
    });
  }

  getItems(){
    let items=[];
    for(let i=1; i<=CartProvider.nbItems; i++){
      this.storage.get(i.toString()).then((val) => {
        items.push(val);
      });
    }
    console.log(items);
    return items;
  }

  removeItem(id){
    CartProvider.nbItems--;
  }

}

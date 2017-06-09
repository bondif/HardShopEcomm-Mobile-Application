import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';


/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Data {
  api: string = 'http://127.0.0.1:8000/api/v1/';
  PRE_LIVE_BASE = this.api;
  products;
  categories;
  loggedIn:boolean = false;
  token:string;
  private headers = new Headers({
    'Access-Control-Allow-Origin': 'http://localhost:8100',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': true
  });
  constructor(
    public http: Http,
    private transfer: Transfer,
    private file: File,
  ) {
    console.log('Hello Data Provider');
  }
  
  getProducts(){
    const fileTransfer: TransferObject = this.transfer.create();
    if (this.products) {
      return Promise.resolve(this.products);
    }

    return new Promise(resolve => {
      this.http.get(this.api + "products")
        .map(res => res.json())
        .subscribe(data => {
          this.products = data;
          for(let p of data){
            fileTransfer.download(this.api + "products" + "/" + p.thumbnail, this.file.dataDirectory + p.thumbnail).then((entry) => {
            console.log('download complete: ' + entry.toURL());
          }, (error) => {
            console.error(error);
          });
          }
          resolve(this.products);
        });
    });
  }

  getProductById(id){
    console.log("by id from data provider " + id);
    let index = -1;
    for(let p of this.products){
      if(p.idProd == id)
        return p;
    }
    return null;
  }

  getProductByCat(id){
    let prods = [];
    for(let i=0; i<this.products.length; i++){
      if(this.products[i].idCat === id)
        prods.push(this.products[i]);
    }
    return prods;
  }

  getCategories(){
    if(this.categories){
      return Promise.resolve(this.categories);
    }
    return new Promise(resolve =>
      this.http.get(this.api + "categories")
        .map(res => res.json())
        .subscribe(data => {
          this.categories = data;
          resolve(this.categories);
        })
    );
  }

  postLogin(data:JSON){
    return new Promise(resolve =>
        this.http.post(this.api + "users/login", data.stringify, {headers: this.headers})
          .map(res => res.json())
          .subscribe(answer => {
            this.loggedIn = true;
            this.token = answer.token;
            resolve(answer);
          })
      );
  }

  getBestSellers(){
    return this.products;
  }

  getFeatured(){
    return this.products;
  }
  getBestOffers(){
    return this.products;
  }

}

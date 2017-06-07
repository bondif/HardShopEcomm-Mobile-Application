import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class Helpers {

  constructor(
    public http: Http
    ) {
    console.log('Hello Helpers Provider');
  }

  filterProducts(searchTerm, prods){
    return prods.filter((product) => {
        return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterCategories(searchTerm, cats){
    return cats.filter((category) => {
        return category.nameCat.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}

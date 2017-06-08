import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Product } from './product';

@NgModule({
  declarations: [
    Product,
  ],
  imports: [
    IonicPageModule.forChild(Product),
  ],
  exports: [
    Product
  ]
})
export class ProductModule {}

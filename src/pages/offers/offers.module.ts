import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Offers } from './offers';

@NgModule({
  declarations: [
    Offers,
  ],
  imports: [
    IonicPageModule.forChild(Offers),
  ],
  exports: [
    Offers
  ]
})
export class OffersModule {}

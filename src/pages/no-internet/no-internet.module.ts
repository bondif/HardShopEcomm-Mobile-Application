import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoInternet } from './no-internet';

@NgModule({
  declarations: [
    NoInternet,
  ],
  imports: [
    IonicPageModule.forChild(NoInternet),
  ],
  exports: [
    NoInternet
  ]
})
export class NoInternetModule {}

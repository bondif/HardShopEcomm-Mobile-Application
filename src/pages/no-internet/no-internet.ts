import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {HomePage} from "../home/home";

/**
 * Generated class for the NoInternet page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-no-internet',
  templateUrl: 'no-internet.html',
})
export class NoInternet {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public network: Network
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoInternet');
  }

  checkInternet(){
    this.network.onDisconnect().subscribe(() => {
      //console.log('network was disconnected :-(');
      this.navCtrl.push(NoInternet);
    });
    this.network.onConnect().subscribe(() => {
     //console.log('network connected!');
     this.navCtrl.push(HomePage);
     });
  }

}

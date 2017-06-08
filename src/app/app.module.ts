import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { Product } from '../components/product/product';

// Pages
import { HomePage } from '../pages/home/home';
import { Cart } from '../popovers/cart';
import { Category } from '../pages/category/category';
import { ProductDetails } from '../pages/product-details/product-details';
import { Checkout } from '../pages/checkout/checkout';
import { SignUp } from '../pages/sign-up/sign-up';
import { Login } from '../pages/login/login';
import { NoInternet } from '../pages/no-internet/no-internet';
import { Offers } from '../pages/offers/offers';

//Providers
import { CartProvider } from '../providers/cart-provider';
import { Data } from '../providers/data';
import { Helpers } from '../providers/helpers';

//cordova plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

export function provideStorage() {
  return new Storage({
    name: 'cartStorage',
    storeName: 'items',
    driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
  });// optional config);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Cart,
    Category,
    ProductDetails,
    Checkout,
    SignUp,
    Login,
    NoInternet,
    Offers,
    Product
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Cart,
    Category,
    ProductDetails,
    Checkout,
    SignUp,
    Login,
    NoInternet,
    Offers
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartProvider,
    Data,
    Helpers,
    Network,
    SQLite,
    File,
    Transfer,
    FilePath,
    { provide: Storage, useFactory: provideStorage },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

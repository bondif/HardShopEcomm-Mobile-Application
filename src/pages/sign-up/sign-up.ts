import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp {
  signUp;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public data: Data,
    public loadingCtrl: LoadingController
    ) {
      this.signUp = this.formBuilder.group({
        fName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.required])],
        lName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.required])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('06[0-9]{8}')])],
        email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
        address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])],
        city: ['', Validators.compose([Validators.required])],
        username: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(50), Validators.required])]
      });
  }

  signUpForm() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.data.postSignUp(this.signUp.value)
      .then(data => {
        console.log(data);
        loading.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }

}

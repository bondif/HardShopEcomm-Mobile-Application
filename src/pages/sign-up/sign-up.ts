import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
    public formBuilder: FormBuilder
    ) {
      this.signUp = this.formBuilder.group({
        firstName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.required])],
        lastName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.required])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('06[0-9]{8}')])],
        address: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])],
        city: ['', Validators.compose([Validators.required])],
        username: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(50), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        password: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(50), Validators.required])]
      });
  }

  signUpForm() {
    console.log(this.signUp.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUp');
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUp } from './sign-up';

@NgModule({
  declarations: [
    SignUp,
  ],
  imports: [
    IonicPageModule.forChild(SignUp),
  ],
  exports: [
    SignUp
  ]
})
export class SignUpModule {}

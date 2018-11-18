import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook(){
  	this.authService.loginWithFacebook().then((response)=>{
  	alert('Loggeado con Exito');
  	this.viewCtrl.dismiss();
  	localStorage.setItem('loginData', JSON.stringify(response));
  	});
  }
  cancelar()
  {
  	this.viewCtrl.dismiss();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SegundaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {
nombreimg: any;
titulosi: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.nombreimg=navParams.get('nombre');
  this.titulosi=navParams.get('titulos');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }
  twitter(url){
   window.open(url);
        
  }

}

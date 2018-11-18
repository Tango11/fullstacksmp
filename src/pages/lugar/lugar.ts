import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {LugaresService} from "../../services/lugares.service";
import {ViewController} from 'ionic-angular';



/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
lugar: any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService: LugaresService) {

    this.lugar = navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
  guardarLugar()
  {
  
  if(!this.lugar.id){
    this.lugar.id=Date.now();
    }
    this.lugaresService.createLugar(this.lugar);
    alert('Lugar guardado con Exito!!');
    this.navCtrl.pop();
    console.log(this.lugar);
  }

}

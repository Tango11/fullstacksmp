import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../../pages/home/home";
import {SegundaPage} from "../../pages/segunda/segunda";
import {TerceraPage} from "../../pages/tercera/tercera";
import { ModalController } from 'ionic-angular';
import {LoginPage} from "../../pages/login/login";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
lugares: any = [
{nombre: 'Lugar 1', direccion: 'Direccion 1', categoria: 'Categoria 1'},
{nombre: 'Lugar 2', direccion: 'Direccion 2', categoria: 'Categoria 2'},
{nombre: 'Lugar 3', direccion: 'Direccion 3', categoria: 'Categoria 3'}
];
tab1Root=HomePage;
tab2Root=SegundaPage;
tab3Root=TerceraPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  let modal = this.modalCtrl.create(LoginPage);
  modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  

}

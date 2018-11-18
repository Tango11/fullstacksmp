import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LugarPage} from '../../pages/lugar/lugar';
import {LugaresService} from "../../services/lugares.service";
import {AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the TerceraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tercera',
  templateUrl: 'tercera.html',
})

export class TerceraPage {
lugares: any=[];

video: any = {
        url: 'https://www.youtube.com/embed/MLleDRkSuvk',
        title: 'Awesome video'
    };
  constructor(public navCtrl: NavController, public navParams: NavParams, public lugaresService: LugaresService ) {alert('origen');
    

   this.lugaresService.getLugares()
      .subscribe(fruits=>{
        this.lugares = fruits;
      });

     
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TerceraPage');
  }

  navegarAlugar(name){
  this.navCtrl.push(LugarPage, {nombre:name});
  }


  irAVistaDeDetalle()
 	{
 	this.navCtrl.push(LugarPage,{lugar : {}});
 	}
 	irAVistaDeDetalleExistente(lugar)
 	{
 	this.navCtrl.push(LugarPage,{lugar : lugar});
 	}

  deleteLugar(lugar)
  {
    if(confirm('Seguro desea Borrar?')){
    return this.lugaresService.deleteLugar(lugar).then ( ()=>{
    alert('Lugar borrado Correctamente');
    });
    }
    
  }

}

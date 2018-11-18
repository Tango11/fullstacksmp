import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SegundaPage} from '../../pages/segunda/segunda';
import {TerceraPage} from '../../pages/tercera/tercera';
import {LugaresService} from "../../services/lugares.service";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public avatar: Array<any>;
  constructor(public navCtrl: NavController) {

  this.avatar=[
  	{img : "../../assets/imgs/ava1.jpg",titulo:"Avatar en escena"},
  	{img : "../../assets/imgs/ava2.jpg",titulo:"8 razones por las que Avatar es la película"},
  	{img : "../../assets/imgs/ava3.jpg",titulo:"Avatar De James Cameron Neytiri Jake Sully"},
  	{img : "../../assets/imgs/ava4.jpg",titulo:"Una película que inspira"},
  	{img : "../../assets/imgs/ava5.jpg",titulo:"Mensajes ocultos en la película Avatar"},
  	{img : "../../assets/imgs/ava6.jpg",titulo:"Poster Avatar Jake y Neytiri"},
  	{img : "../../assets/imgs/ava7.jpg",titulo:"Avatar en escena"},
  	{img : "../../assets/imgs/ava8.jpg",titulo:"Avatar en escena"},
  	{img : "../../assets/imgs/ava9.jpg",titulo:"Avatar en escena"},
  	{img : "../../assets/imgs/ava10.jpg",titulo:"Avatar en escena"}
  ]
  }
  navegateToSegunda(name)
  {
  	
  	this.navCtrl.push(SegundaPage,{nombre :this.avatar[name].img,titulos :this.avatar[name].titulo});
  	alert("Avatar");
  }
  navegateToTercera(name)
  {
  	
  	this.navCtrl.push(TerceraPage,{nombre : name});
  }
 
 	
}

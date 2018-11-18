import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TerceraPage } from '../pages/tercera/tercera';
import { SegundaPage } from '../pages/segunda/segunda';
import { LugarPage } from '../pages/lugar/lugar';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {LugaresService} from "../services/lugares.service";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoginPage } from '../pages/login/login';
import {AuthService} from '../services/auth.service';


export const firebaseConfig = {
   apiKey: "AIzaSyD4iRfQ0F1QV2VyyNvwFXFT6B38NrSt-yM",
    authDomain: "ventasmall-d6a69.firebaseapp.com",
    databaseURL: "https://ventasmall-d6a69.firebaseio.com",
    projectId: "ventasmall-d6a69",
    storageBucket: "ventasmall-d6a69.appspot.com",
    messagingSenderId: "808684014481"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SegundaPage,
     TerceraPage,
     LugarPage,
     LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     TabsPage,
     SegundaPage,
     TerceraPage,
     LugarPage,
     LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    AuthService
   
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { ContactosPage } from '../pages/contactos/contactos';
import { ListaPage } from '../pages/lista/lista';
import { LibretaPage } from '../pages/libreta/libreta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NuevoContactoPage } from "../pages/nuevo-contacto/nuevo-contacto";
import {ContactService} from "../services/contacts.service";

@NgModule({
  declarations: [
    MyApp,
    AcercaDePage,
    ContactosPage,
    ListaPage,
    LibretaPage,
    NuevoContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcercaDePage,
    ContactosPage,
    ListaPage,
    LibretaPage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}

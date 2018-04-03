import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ContactosPage} from "../contactos/contactos";


/**
 * Generated class for the AcercaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de',
  templateUrl: 'acerca-de.html',
})
export class AcercaDePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaDePage');
  }
  onLoadNewPage(){
    this.navCtrl.push(ContactosPage);
  }

}

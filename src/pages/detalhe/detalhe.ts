import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmesInt } from '../../interfaces/filmes.interface';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  homeData: FilmesInt;
  detalheData: FilmesInt;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homeData = this.navParams.get('filme');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
    this.detalheData = this.homeData;
    console.log(this.detalheData)
  }


}

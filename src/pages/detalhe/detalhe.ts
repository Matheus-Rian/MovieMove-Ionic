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

  overview: string;
  idFilme: number;
  noteFilme: any;
  titleFilme: string;
  voteAverage: number;
  posterPath: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.overview = this.navParams.get('overview');
    this.titleFilme = this.navParams.get('title');
    this.voteAverage = this.navParams.get('voteAverage');
    this.posterPath = this.navParams.get('posterPath');
  }
  
  ionViewDidLoad() {
    debugger
    console.log(this.posterPath)
    console.log('ionViewDidLoad DetalhePage');
  }

  previousPage() {
    this.navCtrl.pop();
  }

  

}


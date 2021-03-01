import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  isAddList: boolean = false;

  overview: string;
  idFilme: number;
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

  }

  previousPage() {
    this.navCtrl.pop();
  }

  list() {
    this.isAddList = !this.isAddList;
  }
}


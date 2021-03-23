import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from '../../interfaces/list.interface';
import { ListProvider } from '../../providers/list/list.provider';
@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  isAddList: boolean = false;
  arrayList: List[] = [];

  idFilme: number;
  overview: string;
  titleFilme: string;
  voteAverage: number;
  posterPath: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listProvider: ListProvider) {
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

  openUrl() {
    window.open('https://netflix.com', '_system');
  }

  list() {
    this.isAddList = !this.isAddList;
    // if(this.isAddList) {
    //   this.arrayList = this.listProvider.addList(this.overview, this.titleFilme, this.voteAverage, this.posterPath);
    // }
    // return this.arrayList
    // if(this.isAddList) {
    //   this.arrayList.push({
    //     overview: this.overview,
    //     posterPath: this.posterPath,
    //     titleFilme: this.titleFilme,
    //     voteAverage: this.voteAverage,
    //     idFilme: this.idFilme,
    //   });
    //   console.log(this.arrayList.length);
    // }
    // return this.arrayList;
  }
}


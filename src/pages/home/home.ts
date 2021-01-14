import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FilmesProvider } from "../../providers/filmes/filmes";
import { FilmesInt } from "../../interfaces/filmes.interface";
import { Filme } from "../../interfaces/searchFilme.interface";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  @ViewChild("mySlider") mySlider: any;

  searchFilme: Array<Filme> = [];
  resultSearch: Array<Filme> = [];

  recommendationMovie: FilmesInt;
  topRatedMovie: FilmesInt;
  actionMovie: FilmesInt;
  comedyMovie: FilmesInt;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private filmesProvider: FilmesProvider,
    ) { }

  // Realizar uma busca nos objetos de filmes
  searchbarFilme(ev: any) {

    this.resultSearch = [];

    const val = ev.target.value;

    //unir os objetos para fazer uma pesquisa na tela
    this.searchFilme = []
    this.searchFilme = this.searchFilme.concat(this.recommendationMovie.results)
    this.searchFilme = this.searchFilme.concat(this.topRatedMovie.results)
    this.searchFilme = this.searchFilme.concat(this.actionMovie.results)
    this.searchFilme = this.searchFilme.concat(this.comedyMovie.results)

    if (val && val.trim() != '') {
      this.resultSearch = this.searchFilme.filter((item) => {
        let title = item['title'] || item['name']
        return (title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    this.movieRecommendation();
    this.movieTopRated();
    this.movieAction();
    this.movieComedy();
  }

  movieRecommendation() {
    this.filmesProvider.movieRecommendation()
      .subscribe(data => this.recommendationMovie = data);
  }

  movieTopRated() {
    this.filmesProvider.movieTopRated()
      .subscribe(data => this.topRatedMovie = data);
  }

  movieAction() {
    this.filmesProvider.movieAction()
      .subscribe(data => this.actionMovie = data)
  }

  movieComedy() {
    this.filmesProvider.movieComedy()
      .subscribe(data => this.comedyMovie = data)
  }
}

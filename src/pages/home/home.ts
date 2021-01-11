import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FilmesProvider } from "../../providers/filmes/filmes";
import { FilmesModel } from "../../models/fillmes.model";

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

  buscarFilmes: FormGroup;

  recommendationMovie: FilmesModel = new FilmesModel();
  topRatedMovie: FilmesModel = new FilmesModel();
  actionMovie: FilmesModel = new FilmesModel();
  comedyMovie: FilmesModel = new FilmesModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private filmesProvider: FilmesProvider,
    ) {

      this.buscarFilmes = this.formBuilder.group({
        filme: ['']
      })
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

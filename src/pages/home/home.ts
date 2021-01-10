import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FilmesProvider } from "../../providers/filmes/filmes";
import {Observable } from 'rxjs'
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

  recomendados = [
    {
      id: 7,
      titulo: "Capitã Marvel",
      urlFoto:
        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      dtLancamento: "2019-03-07T03:00:00.000Z",
      descricao:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      nota: 6.9,
      urlIMDb: "https://www.imdb.com/title/tt4154664/",
      genero: "Ação",
    },
    {
      id: 8,
      titulo: "Shazam!",
      urlFoto:
        "https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      dtLancamento: "2019-04-04T03:00:00.000Z",
      descricao:
        "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy.",
      nota: 7.1,
      urlIMDb: "https://www.imdb.com/title/tt0448115/",
      genero: "Comédia",
    },
    {
      id: 9,
      titulo: "John Wick 3: Parabellum",
      urlFoto:
        "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
      dtLancamento: "2019-05-16T03:00:00.000Z",
      descricao:
        "John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      nota: 7.5,
      urlIMDb: "https://www.imdb.com/title/tt6146586/",
      genero: "Ação",
    },
    {
      titulo: "Star Wars: A Ascensão Skywalker",
      urlFoto:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
      dtLancamento: "2019-12-19T03:00:00.000Z",
      descricao:
        "In Theaters Now\nAfter Palpatine mysteriously returns, the Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
      nota: 6.9,
      urlIMDb: "https://www.imdb.com/title/tt2527338/?ref_=vi_md_ti",
      genero: "Aventura",
      id: 11,
    },
    {
      titulo: "Os Croods 2: Uma Nova Era",
      urlFoto:
        "https://m.media-amazon.com/images/M/MV5BNGU1NGNiYzYtMTQ2Ni00M2ZlLTg0N2QtMDFhMzNjNzcyMGYyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      dtLancamento: "2020-12-24T03:00:00.000Z",
      descricao:
        "Os Croods 2: Uma Nova Era é uma aventura sobre uma família pré-histórica que descobre as transformações no mundo enquanto tenta permanecer unida.",
      nota: 8.1,
      urlIMDb: "https://www.imdb.com/title/tt2850386/?ref_=nv_sr_srsg_0",
      genero: "Aventura",
      id: 12,
    },
  ];

  filmes = [
    {
      "id": 1,
      "titulo": "MIB: Homens de Preto",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "1997-07-11T03:00:00.000Z",
      "descricao": "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.",
      "nota": 7.3,
      "urlIMDb": "https://www.imdb.com/title/tt0119654/",
      "genero": "Ação"
    },
    {
      "id": 2,
      "titulo": "MIB: Homens de Preto II ",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "2012-07-19T03:00:00.000Z",
      "descricao": "Agent J is sent to find Agent K and restore his memory after the re-appearance of a case from K's past.",
      "nota": 6.2,
      "urlIMDb": "https://www.imdb.com/title/tt0120912",
      "genero": "Ação"
    },
    {
      "id": 3,
      "titulo": "MIB: Homens de Preto III",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "2012-25-11T03:00:00.000Z",
      "descricao": "Agent J travels in time to M.I.B.'s early days in 1969 to stop an alien from assassinating his friend Agent K and changing history.",
      "nota": 6.8,
      "urlIMDb": "https://www.imdb.com/title/tt1409024/",
      "genero": "Ação"
    },
    {
      "id": 4,
      "titulo": "MIB: Homens de Preto - Internacional",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "2019-13-11T03:00:00.000Z",
      "descricao": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.",
      "nota": 5.6,
      "urlIMDb": "https://www.imdb.com/title/tt2283336/",
      "genero": "Ação"
    },
    {
      "id": 5,
      "titulo": "Coringa",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "2019-10-03T03:00:00.000Z",
      "descricao": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      "nota": 8.7,
      "urlIMDb": "https://www.imdb.com/title/tt7286456/",
      "genero": "Drama"
    },
    {
      "id": 6,
      "titulo": "Vingadores: Ultimato",
      "urlFoto": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "dtLancamento": "2019-04-25T03:00:00.000Z",
      "descricao": "After the devastating events of Vingadores: Guerra Infinita (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      "nota": 8.5,
      "urlIMDb": "https://www.imdb.com/title/tt4154796/",
      "genero": "Aventura"
    },
  ]
  images: any;

  filmesTv: FilmesModel = new FilmesModel();

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
    this.readData()
    console.log(this.filmesTv)
  }

  readData() {
    this.filmesProvider.readData()
      .subscribe(data => this.filmesTv = data);
  }
  // geting() {
  //   this.filmesProvider.getHomeList().subscribe(
  //     data => {
  //       this.images = data;
  //     }
  //   )
  // }
}

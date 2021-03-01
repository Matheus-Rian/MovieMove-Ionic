import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-minha-lista',
  templateUrl: 'minha-lista.html',
})
export class MinhaListaPage {

  minhaLista = [
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

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}

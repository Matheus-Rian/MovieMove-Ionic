import { Component, Input } from '@angular/core';
import { FilmesInt } from '../../interfaces/filmes.interface';
// import { } from ''

@Component({
  selector: 'mov-movieList',
  templateUrl: 'movie-list.component.html'
})
export class MovieListComponent {

  text: string;
  @Input() topRatedMovie: FilmesInt;

  constructor() {
    console.log(this.topRatedMovie);
    this.text = 'Hello World';
  }

}

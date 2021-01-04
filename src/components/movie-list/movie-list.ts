import { Component } from '@angular/core';

/**
 * Generated class for the MovieListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {

  text: string;

  constructor() {
    console.log('Hello MovieListComponent Component');
    this.text = 'Hello World';
  }

}

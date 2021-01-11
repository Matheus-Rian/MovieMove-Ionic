import { Component } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html'
})
export class MovieListComponent {

  text: string;

  constructor() {
    console.log('Hello MovieListComponent Component');
    this.text = 'Hello World';
  }

}

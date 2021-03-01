import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../../interfaces/list.interface';

@Injectable()
export class ListProvider {

  arrayList: List[] = []

  constructor(public http: HttpClient) {
    console.log('Hello ServicesListProvider Provider');
  }
  addList(overview, titleFilme, voteAverage, posterPath) {
    this.arrayList.push({
      overview: overview,
      posterPath: posterPath,
      titleFilme: titleFilme,
      voteAverage: voteAverage,
    })
  }
}

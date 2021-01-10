import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as ENV } from "../../environments/environment";
import { FilmesModel } from "../../models/fillmes.model";

const basicFetch = async (endpoint: string): Promise<any> => {
  const req = await fetch(`${ENV.API_BASE}${endpoint}`);
  const json = req.json();
  return json;
};

@Injectable()
export class FilmesProvider {
  constructor(public http: HttpClient) {}

  // readData() {
  //   return this.http.get<FilmesModel>(`${ENV.API_BASE}discover/tv?api_key=${ENV.API_KEY}&language=pt-BR`)
  // }

  readData() {
    return this.http.get<FilmesModel>(`${ENV.API_BASE}discover/tv?with_genres=28&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  // readData() {
  //   return this.http.get<FilmesModel>(`${ENV.API_BASE}discover/tv?api_key=${ENV.API_KEY}&language=pt-BR`)
  // }

  // async ionViewDidLoad(): void{
  // }
  // async getHomeList(): Promise<Filmes> {
  //   return [
  //     {
  //       slug: "originals",
  //       title: "Originais do Netflix",
  //       items: await basicFetch(
  //         `/discover/tv/with_network=213${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "trending",
  //       title: "Recomendados para você",
  //       items: await basicFetch(
  //         `/trending/all/week${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "toprated",
  //       title: "Em Alta",
  //       items: await basicFetch(
  //         `/movie/top_rated${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "action",
  //       title: "Ação",
  //       items: await basicFetch(
  //         `/discover/movie?with_genres=28${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "comedy",
  //       title: "Comédia",
  //       items: await basicFetch(
  //         `/discover/movie?with_genres=35${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "horror",
  //       title: "Terror",
  //       items: await basicFetch(
  //         `/discover/movie?with_genres=27${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "romance",
  //       title: "Romance",
  //       items: await basicFetch(
  //         `/discover/movie?with_genres=10749${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //     {
  //       slug: "documentary",
  //       title: "Documentários",
  //       items: await basicFetch(
  //         `/discover/movie?with_genres=99${environment.languageAndApiKey}${environment.API_KEY}`
  //       ),
  //     },
  //   ];
  // }
}

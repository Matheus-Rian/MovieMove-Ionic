import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as ENV } from "../../environments/environment";
import { FilmesInt } from "../../interfaces/filmes.interface";
import { FilmesModel } from "../../models/fillmes.model";

@Injectable()
export class FilmesProvider {
  constructor(public http: HttpClient) {}

  readData() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieTopRated() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}movie/top_rated?api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieRecommendation() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}trending/all/week?api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieAction() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?with_genres=28&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieComedy() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?with_genres=35&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieTerror() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?with_genres=27&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieRomance() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?with_genres=10749&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

  movieDocumentary() {
    return this.http.get<FilmesInt>(`${ENV.API_BASE}discover/tv?with_genres=99&api_key=${ENV.API_KEY}&language=pt-BR`)
  }

}

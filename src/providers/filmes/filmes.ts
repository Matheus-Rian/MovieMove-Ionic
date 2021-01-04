import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

const basicFetch = async (endpoint: string): Promise<any> => {
  const req = await fetch(`${environment.API_BASE}${endpoint}`);
  const json = req.json();
  return json;
};

@Injectable()
export class FilmesProvider {
  constructor(public http: HttpClient) {}

  // async ionViewDidLoad(): void{
   
  // }
  async getHomeList(): Promise<Array<object>> {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv/with_network=213${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99${environment.languageAndApiKey}${environment.API_KEY}`
        ),
      },
    ];
  }
}

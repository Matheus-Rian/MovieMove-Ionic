export interface List {
    // detail: Detail = new Detail();
    detail: {
      overview: string;
      titleFilme: string;
      voteAverage: number;
      posterPath: string;
      idFilme?: number;
    }[]
}

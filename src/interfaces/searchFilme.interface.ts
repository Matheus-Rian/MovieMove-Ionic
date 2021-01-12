export interface Filme {
        backdrop_path: string
        first_air_date: string
        genres:{
          id: number
          name: string
        }[]
        id: number
        title?: string
        name?: string
        origin_country: string[]
        original_language: string
        original_name: string
        overview: string
        popularity: number
        poster_path: string
        vote_average: number
        vote_count: number
}
import ApiService from "../../../Core/Axios/ApiService";

export type CarouselMovie = {
    id: number;
    poster_path: string;
}

export default class PopularMoviesService {

    async getPopularMovies() : Promise<CarouselMovie[]> {
        const response = await ApiService.get( `/movie/popular?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}&region=hr`)

        return this._mapPopularMovies(response.data.results);
    }

    private _mapPopularMovies(response : CarouselMovie[]) : CarouselMovie[]{
        return response.map((popularMovie : CarouselMovie)=>this._mapPopularMovie(popularMovie))
    }

    private _mapPopularMovie(popularMovie : CarouselMovie): CarouselMovie {
        return {
            id: popularMovie.id,
            poster_path: `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`
        }
    }
}
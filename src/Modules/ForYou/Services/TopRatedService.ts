import {CarouselMovie} from "./PopularMoviesService";
import ApiService from "../../../Core/Axios/ApiService";


export default class TopRatedService {

    async getTopRatedMovies() : Promise<CarouselMovie[]> {
        const response = await ApiService.get( `/movie/top_rated?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}&region=hr`)

        return this._mapTopRatedMovies(response.data.results);
    }

    private _mapTopRatedMovies(response : CarouselMovie[]) : CarouselMovie[]{
        return response.map((topRatedMovie : CarouselMovie)=>this._mapTopRatedMovie(topRatedMovie))
    }

    private _mapTopRatedMovie(topRatedMovie : CarouselMovie): CarouselMovie {
        return {
            id: topRatedMovie.id,
            poster_path: `https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`
        }
    }
}
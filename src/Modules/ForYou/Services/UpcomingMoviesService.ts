import {CarouselMovie} from "./PopularMoviesService";
import ApiService from "../../../Core/Axios/ApiService";


export default class UpcomingMoviesService {

    async getUpcomingMovies() : Promise<CarouselMovie[]> {
        const response = await ApiService.get( `/movie/upcoming?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}`)

        return this._mapUpcomingMovies(response.data.results);
    }

    private _mapUpcomingMovies(response : CarouselMovie[]) : CarouselMovie[]{
        return response.map((topRatedMovie : CarouselMovie)=>this._mapUpcomingMovie(topRatedMovie))
    }

    private _mapUpcomingMovie(topRatedMovie : CarouselMovie): CarouselMovie {
        return {
            id: topRatedMovie.id,
            poster_path: `https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`
        }
    }
}
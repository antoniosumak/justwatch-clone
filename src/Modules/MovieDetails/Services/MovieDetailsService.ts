import ApiService from "../../../Core/Axios/ApiService";
import {CarouselMovie} from "../../ForYou/Services/PopularMoviesService";
import Image from "../../../Core/Components/Image";

export type Collection = {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export type Genre = {
    id: number;
    name: string;
}

export type MovieDetailsObject = {
    belongs_to_collection: Collection;
    original_title : string;
    overview: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    genres : Genre[]
    backdrop_path: string;
    poster_path: string;
}

export type ImageObject = {
    backdrops: MovieImage[];
    posters: MovieImage[];
}

export type MovieImage= {
    file_path: string;
}

export type CastDetails = {
    known_for_department: string;
    name: string;
    character: string;
}

export class MovieDetailsService {
    async getMovieDetails(movieId: number) : Promise<MovieDetailsObject>{
        const response = await ApiService.get(`/movie/${movieId}?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}`)

        return this._mapMovieDetails(response.data);
    }

    async getSimilarMovies(movieId : number) : Promise<CarouselMovie[]> {
        const response = await ApiService.get(`/movie/${movieId}/similar?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}`)

        return this._mapSimilarMovies(response.data.results);
    }

    async getMovieImages (movieId : number) : Promise<ImageObject> {
        const response = await ApiService.get(`/movie/${movieId}/images?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}`)

        const tempObject : ImageObject= {
            backdrops : this._mapMovieImages(response.data.backdrops),
            posters: this._mapMovieImages(response.data.posters)
        }

        return tempObject;
    }

    async getMovieCast(movieId: number) : Promise<CastDetails[]> {
        const response = await ApiService.get(`/movie/${movieId}/credits?api_key=${"bfc7e77483cfc3737596791e4dfa6a39"}`)

        return this._mapCastDetails(response.data.cast);
    }

    private _mapMovieDetails(response: MovieDetailsObject) : MovieDetailsObject {
        return {
            belongs_to_collection: response.belongs_to_collection,
            original_title:response.original_title,
            overview: response.overview,
            release_date: response.release_date,
            runtime: response.runtime,
            vote_average: response.vote_average,
            genres: response.genres,
            backdrop_path: `https://image.tmdb.org/t/p/w500${response.backdrop_path}`,
            poster_path: `https://image.tmdb.org/t/p/w500${response.poster_path}`
        }
    }

    private _mapSimilarMovies(response : CarouselMovie[]) : CarouselMovie[] {
        return response.map((similarMovie: CarouselMovie)=>this._mapSimilarMovie(similarMovie))
    }

    private _mapSimilarMovie(similarMovie: CarouselMovie) : CarouselMovie {
        return  {
            id: similarMovie.id,
            poster_path: `https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`
        }
    }
    private _mapMovieImages(response : MovieImage[]) : MovieImage[] {
        return response.map((movieImage: MovieImage)=>this._mapMovieImage(movieImage))
    }

    private _mapMovieImage(movieImage: MovieImage) : MovieImage {
        return {
            file_path: `https://image.tmdb.org/t/p/w500${movieImage.file_path}`
        }
    }

    private _mapCastDetails(response : CastDetails[]) : CastDetails[] {
        return response.map((castMember: CastDetails)=>this._mapCastMember(castMember))
    }

    private _mapCastMember(castMember: CastDetails) : CastDetails {
        return {
            known_for_department: castMember.known_for_department,
            name: castMember.name,
            character: castMember.character
        }
    }

}
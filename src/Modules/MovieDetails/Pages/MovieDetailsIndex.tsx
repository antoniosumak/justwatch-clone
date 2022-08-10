import React, {useEffect} from 'react';
import Section from '../../../Core/Components/Section';
import {CarouselMovie} from "../../ForYou/Services/PopularMoviesService";
import {useLocation, useParams} from "react-router";
import SingleMovieCarousel from "../Components/SingleMovieCarousel";
import MovieDetails from "../Components/MovieDetails";
import {CastDetails, ImageObject, MovieDetailsObject, MovieDetailsService} from "../Services/MovieDetailsService";


interface IMovieDetailsIndex {}

const MovieDetailsIndex = ({}: IMovieDetailsIndex) => {
    let {id} = useParams();

    const [isLoading, setIsLoading] = React.useState<boolean>();
    const [movieDetails, setMovieDetails] = React.useState<MovieDetailsObject>();
    const [similarMovies, setSimilarMovies] = React.useState<CarouselMovie[]>();
    const [movieImages, setMovieImages] = React.useState<ImageObject>()
    const [cast, setCast] = React.useState<CastDetails[]>();

    const movieDetailsService = new MovieDetailsService();

    const getMovieDetails = async ()=>{
        try{
            const response = await movieDetailsService.getMovieDetails(Number(id));
            setMovieDetails(response);
        }catch (error){
            console.log(error);
        }finally{

        }
    }

    const getSimilarMovies = async ()=>{
        try{
            const response = await movieDetailsService.getSimilarMovies(Number(id));
            setSimilarMovies(response);
        }catch (error){
            console.log(error);
        }finally{

        }
    }
    const getMovieImages = async ()=>{
        try{
            const response = await movieDetailsService.getMovieImages(Number(id));
            setMovieImages(response);
        }catch (error){
            console.log(error);
        }finally{

        }
    }

    const getMovieCast = async ()=>{
        try{
            const response = await movieDetailsService.getMovieCast(Number(id));
            setCast(response);
        }catch (error){
            console.log(error);
        }finally{

        }
    }

    useEffect(()=>{
        setIsLoading(true);
        try{
            getMovieDetails();
            getSimilarMovies();
            getMovieImages();
            getMovieCast();
        }catch(error){

        }finally{
            setIsLoading(false)
        }
    }, [id]);


    return (
        <Section noTopPadding additionalClass="min-h-screen">
            <>
                {isLoading && <div className="w-screen h-screen bg-red-500"></div>}
                {movieDetails && similarMovies && movieImages && cast &&
                    <>
                        <SingleMovieCarousel images={movieImages.backdrops}/>
                        <MovieDetails movieDetails={movieDetails} similarMovies={similarMovies} cast={cast}/>
                    </>
                }
            </>
        </Section>
    );
};

export default MovieDetailsIndex;

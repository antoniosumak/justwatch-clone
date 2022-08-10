import React, { FunctionComponent } from 'react';
import Image from "../../../Core/Components/Image";
import HeroTitle from "../../LandingPage/Components/HeroTitle";
import Subtitles from "../../LandingPage/Components/Subtitles";
import Description from "../../LandingPage/Components/Description";
import {CastDetails, Genre, MovieDetailsObject, MovieDetailsService} from "../Services/MovieDetailsService";
import {convertMinutesIntoHoursAndMinute, getYearFromDate} from "../../../Core/Services/GlobalFunctions";
import DetailsSubtitles from "./DetailsSubtitles";
import DetailsDescription from "./DetailsDescription";
import CarouselComponent from "../../LandingPage/Components/CarouselComponent";
import Carousel from "react-multi-carousel";
import {CarouselMovie} from "../../ForYou/Services/PopularMoviesService";
import MoviesCarousel from "../../Components/MoviesCarousel";
import CastItem from "./CastItem";
import MovieActions from "./MovieActions";

interface IMovieDetails {
    movieDetails :MovieDetailsObject;
    similarMovies: CarouselMovie[];
    cast: CastDetails[]
}

const MovieDetails = ({movieDetails, similarMovies, cast}: IMovieDetails) => {

    const covertGenreObjectToString = (genres : Genre[]) : string=>{
       const genreNames = genres.map((genre)=>genre.name);

       return genreNames.join(",");
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3.5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3.5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3.5,
        },
    };

    console.log(similarMovies)

    return (
      <div className="max-w-[1170px] -mt-[75px] mx-auto bg-black p-[25px] details-grid relative break-all">
          <aside className="px-[15px]">
              <Image additionalClass="object-contain" width="w-[395px]" alt="Side image" imageSource={movieDetails.poster_path}/>
              <MovieActions/>
              <div className="space-y-4">
                  <div className="grid grid-cols-2">
                      <DetailsSubtitles subtitle="OCJENA"/>
                      <DetailsDescription description={String(Math.round(movieDetails.vote_average * 10) / 10)}/>
                  </div>
                  <div className="grid grid-cols-2">
                      <DetailsSubtitles subtitle="ŽANROVI"/>
                      <DetailsDescription description={covertGenreObjectToString(movieDetails.genres)}/>
                  </div>
                  <div className="grid grid-cols-2 ">
                      <DetailsSubtitles subtitle="TRAJANJE"/>
                      <DetailsDescription description={convertMinutesIntoHoursAndMinute(movieDetails.runtime)}/>
                  </div>
              </div>
          </aside>
          <div className="px-[15px]">
              <Subtitles  subtitle={`${movieDetails.original_title} (${getYearFromDate(movieDetails.release_date)})`} fontSize="text-[28px]" noMargin/>
              <Description description="GLEDAJTE VEĆ SAD"/>
              <div>
                  <DetailsSubtitles margin="mb-2" subtitle="SINOPSIS"/>
                  <DetailsDescription isFullWidth description={movieDetails.overview}/>
              </div>
             <div className="mt-8">
                 <DetailsSubtitles margin="mb-2" subtitle="CAST"/>
                 <Carousel responsive={responsive}>
                     {cast && cast.map((castMember)=><CastItem key={castMember.name} name={castMember.name} role={castMember.character}/>)}
                 </Carousel>
             </div>
              {similarMovies &&
                <div>
                  <MoviesCarousel title="Preporučeno" movies={similarMovies} carouselConfig={responsive}/>
                </div>
              }
          </div>
      </div>
    );
};

export default MovieDetails;

import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from '../../Core/Components/Image';
import Subtitles from '../LandingPage/Components/Subtitles';
import SmallWille from '/images/smallville.webp';
import {CarouselMovie} from "../ForYou/Services/PopularMoviesService";
import {BsFillBookmarkFill} from "react-icons/bs"
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../../Core/Hooks/useLocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface MoviesCarousel {
  title?: string;
  movies: CarouselMovie[]
  carouselConfig?: {}
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};
const MoviesCarousel = ({ title, movies, carouselConfig }: MoviesCarousel) => {


  const navigate = useNavigate();

  const goToMovieDetails = (id: number)=>{
    navigate(`/details/${id}`)
  }

  const [favourites, setFavourites]= useLocalStorage("favouriteMovies", []);

  const setFavouriteMovie= (id: number, poster_path: string)=>{
    try{
      let tempFavourites = localStorage.getItem("favouriteMovies");
      if(tempFavourites){
        let test = JSON.parse(tempFavourites);
        test.push({id, poster_path})
        setFavourites(test)
      }
      toast.success('Uspješno dodano na listu favorita!');
    }catch (error){
      toast.error(String(error));
    }
  }

  return (
    <div className='w-full pt-6 pb-4'>
      <ToastContainer/>
      {title && <Subtitles subtitle={title} fontSize="text-[24px]" marginBottom="mb-[10px]"/>}
      <Carousel responsive={carouselConfig  ? carouselConfig : responsive} itemClass='carousel-item-padding-40-px' swipeable={false} draggable={false}>
        {movies && movies.map((movie: CarouselMovie)=>
            <div key={movie.id} className="rounded-md relative cursor-pointer">
              <div className="absolute top-0 left-2 z-[100] text-reservationbutton hover:text-reservationbuttonhover cursor-pointer">
                <BsFillBookmarkFill className="text-2xl" onClick={()=>setFavouriteMovie(movie.id, movie.poster_path)}/>
              </div>
              <Image additionalClass="rounded-md" width='w-[190px]' alt='Poster' imageSource={movie.poster_path} method={()=>goToMovieDetails(movie.id)}/>
            </div>
        )}
      </Carousel>
    </div>
  );
};

export default MoviesCarousel;

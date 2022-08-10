import React, {useEffect} from 'react';
import Section from '../../../Core/Components/Section';
import MoviesCarousel from '../../Components/MoviesCarousel';
import HeroTitle from '../../LandingPage/Components/HeroTitle';
import StreamingPlatforms from '../../LandingPage/Components/StreamingPlatforms';
import PopularMoviesService, {CarouselMovie} from "../Services/PopularMoviesService";
import TopRatedService from "../Services/TopRatedService";
import UpcomingMoviesService from "../Services/UpcomingMoviesService";

interface IForYouIndex {}

const ForYouIndex = ({}: IForYouIndex) => {
    const popularMoviesService = new PopularMoviesService();
    const topRatedMoviesService = new TopRatedService();
    const upcomingMovieService = new UpcomingMoviesService();
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [popularMovies, setPopularMovies] = React.useState<CarouselMovie[]>([]);
    const [topRatedMovies, setTopRatedMovies] = React.useState<CarouselMovie[]>([]);
    const [upcomingMovies, setUpcomingMovies] = React.useState<CarouselMovie[]>([]);

    const getPopularMovies= async()=>{
        const response = await  popularMoviesService.getPopularMovies();
        setPopularMovies(response);
    }

    const getTopRatedMovies = async()=>{
        const response = await topRatedMoviesService.getTopRatedMovies();
        setTopRatedMovies(response)
    }

    const getUpcomingMovies = async()=>{
        const response = await upcomingMovieService.getUpcomingMovies();
        setUpcomingMovies(response)
    }

    useEffect(()=>{

            setIsLoading(true);
            try{
                getPopularMovies();
                getTopRatedMovies();
                getUpcomingMovies();
            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false)
            }


    }, []);

  return (
    <Section noTopPadding>
        {isLoading ? <div className="w-screen h-screen bg-red-500">Loading...</div>
            :<div>
            <HeroTitle title='Filmovi i serije za vas' />
            <StreamingPlatforms />
            <MoviesCarousel title='Filmovi' movies={popularMovies}/>
            <MoviesCarousel title='Najbolje ocjenjeni' movies={topRatedMovies}/>
            <MoviesCarousel title='Nadolazeći filmovi' movies={upcomingMovies}/>
            </div>}
    </Section>
  );
};

export default ForYouIndex;

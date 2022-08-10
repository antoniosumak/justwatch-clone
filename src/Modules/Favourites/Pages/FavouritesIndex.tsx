import React, {useEffect, useState} from 'react';
import Section from '../../../Core/Components/Section';
import MoviesCarousel from "../../Components/MoviesCarousel";
import {CarouselMovie} from "../../ForYou/Services/PopularMoviesService";
import HeroTitle from "../../LandingPage/Components/HeroTitle";
import Subtitles from "../../LandingPage/Components/Subtitles";
import {FaTimes} from "react-icons/fa"
import AccentSubtitle from "../../../Core/Components/AccentSubtitle";
import Button from "../../../Core/Components/Button";
import {useNavigate} from "react-router-dom";



interface IFavouriteIndex {}

const FavouriteIndex = ({}: IFavouriteIndex) => {
    const [favouriteMovies, setFavouriteMovies] = useState<CarouselMovie[]>();
    const [isThereNeedForRefresh, setIsThereNeedForRefresh] = useState<boolean>(false);

    const clearLocalStorage = async ()=>{
        await localStorage.removeItem("favouriteMovies");
        setIsThereNeedForRefresh(!isThereNeedForRefresh);
    }

    useEffect(() => {
        const movies = localStorage.getItem("favouriteMovies");
        if(movies) {
            setFavouriteMovies(JSON.parse(movies))
        }
        else {
            setFavouriteMovies([]);
        }
    }, [isThereNeedForRefresh]);

    const navigate = useNavigate();

    return (
        <>
            <Section noTopPadding additionalClass="min-h-screen">
                <div className="flex items-center justify-between">
                    <HeroTitle title="Favoriti"/>
                    <FaTimes className="text-white hover:text-red-500 cursor-pointer text-3xl" onClick={clearLocalStorage}/>
                </div>
                {favouriteMovies?.length ? <MoviesCarousel movies={favouriteMovies}/> :
                    <div>
                    <Subtitles subtitle="No favourites"/>
                    <Button text="Add favourites" type="primary" onClick={()=>navigate("/for-you")}/>
                </div>}
            </Section>
        </>
    );
};

export default FavouriteIndex;

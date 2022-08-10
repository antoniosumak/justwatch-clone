import React, {useEffect} from 'react';
import Carousel from "react-multi-carousel";
import Image from "../../../Core/Components/Image";
import {MovieImage} from "../Services/MovieDetailsService";

interface ISingleMovieCarousel {
    images: MovieImage[]
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const SingleMovieCarousel = ({images}: ISingleMovieCarousel) => {
    return (
        <Carousel responsive={responsive} className="h-[240px] md:h-[450px]">
            {images && images.map((image, i)=>
                <div key={image.file_path}>
                    <Image width="w-full" alt="Banner image" imageSource={image.file_path}/>
                </div>
            ) }
        </Carousel>
    );
};

export default SingleMovieCarousel;

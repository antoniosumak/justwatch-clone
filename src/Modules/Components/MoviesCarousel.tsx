import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from '../../Core/Components/Image';
import Subtitles from '../LandingPage/Components/Subtitles';
import SmallWille from '/images/smallville.webp';

interface MoviesCarousel {
  title: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
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

const MoviesCarousel = ({ title }: MoviesCarousel) => {
  return (
    <div className='w-full pt-6 pb-4'>
      <Subtitles subtitle={title} />
      <Carousel responsive={responsive} itemClass='carousel-item-padding-40-px'>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
        <div>
          <Image width='w-[190px]' alt='Poster' imageSource={SmallWille} />
        </div>
      </Carousel>
    </div>
  );
};

export default MoviesCarousel;

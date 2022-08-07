import React from 'react';
import Section from '../../../Core/Components/Section';
import MoviesCarousel from '../../Components/MoviesCarousel';
import HeroTitle from '../../LandingPage/Components/HeroTitle';
import StreamingPlatforms from '../../LandingPage/Components/StreamingPlatforms';

interface IForYouIndex {}

const ForYouIndex = ({}: IForYouIndex) => {
  return (
    <Section noTopPadding>
      <HeroTitle title='Filmovi i serije za vas' />
      <StreamingPlatforms />
      <MoviesCarousel title='Filmovi' />
    </Section>
  );
};

export default ForYouIndex;

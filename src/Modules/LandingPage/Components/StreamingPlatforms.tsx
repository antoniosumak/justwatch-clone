import React, { FunctionComponent } from 'react';
import PlatformIcon from './PlatformIcon';
import Description from './Description';

interface IStreamingPlatforms {
  isHeroComponent?: boolean;
}

const StreamingPlatforms = ({ isHeroComponent }: IStreamingPlatforms) => {
  const streamingPlatforms = [
    {
      id: 'netflix',
      icon: 'https://www.justwatch.com/images/icon/207360008/s100',
    },
    {
      id: 'primeVideo',
      icon: 'https://www.justwatch.com/images/icon/52449861/s100',
    },
    {
      id: 'ivi',
      icon: 'https://www.justwatch.com/images/icon/3656257/s100',
    },
    {
      id: 'googlePlayMovies',
      icon: 'https://www.justwatch.com/images/icon/169478387/s100',
    },
    {
      id: 'flixOle',
      icon: 'https://www.justwatch.com/images/icon/273964237/s100',
    },
    {
      id: 'Mubi',
      icon: 'https://www.justwatch.com/images/icon/164970114/s100',
    },
    {
      id: 'zee5',
      icon: 'https://www.justwatch.com/images/icon/93795879/s100',
    },
    {
      id: 'guideDoc',
      icon: 'https://www.justwatch.com/images/icon/2625277/s100',
    },
    {
      id: 'crunchyRoll',
      icon: 'https://www.justwatch.com/images/icon/127445869/s100',
    },
  ];
  return (
    <>
      {isHeroComponent && (
        <Description description='Platforme za streaming na JustWatchu' />
      )}
      <div className='flex items-center'>
        <div className='flex items-center space-x-2.5'>
          {streamingPlatforms.map((streamingPlatform) => (
            <PlatformIcon
              key={streamingPlatform.id}
              platform={streamingPlatform}
              isHeroComponent={isHeroComponent}
            />
          ))}
        </div>
        {isHeroComponent && (
          <div className='text-white pl-[20px] cursor-pointer text-primary text-[12px] hover:text-linkhover'>
            I MNOGO VIŠE
          </div>
        )}
      </div>
    </>
  );
};

export default StreamingPlatforms;

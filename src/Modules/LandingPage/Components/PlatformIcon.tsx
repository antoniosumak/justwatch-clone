import React, { FunctionComponent } from 'react';
import Image from '../../../Core/Components/Image';

interface IPlatformIcon {
  platform: StreamingPlatform;
  isHeroComponent?: boolean;
}

type StreamingPlatform = {
  id: string;
  icon: string;
};

const PlatformIcon = ({ platform, isHeroComponent }: IPlatformIcon) => {
  return (
    <div className='relative cursor-pointer'>
      <div className='bg-transparentblack absolute inset-0 hover:bg-transparent transition ease-in-out duration-300'></div>
      <Image
        additionalClass='rounded-lg'
        width={`${isHeroComponent ? 'w-[50px]' : 'w-[32px]'}`}
        alt='streaming icon'
        imageSource={platform.icon}
      />
    </div>
  );
};

export default PlatformIcon;

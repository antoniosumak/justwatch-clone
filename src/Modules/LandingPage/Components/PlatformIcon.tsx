import React, { FunctionComponent } from 'react';
import Image from "../../../Core/Components/Image";

interface IPlatformIcon {
    platform: StreamingPlatform
}

type StreamingPlatform = {
    id: string;
    icon: string;
}

const PlatformIcon = ({platform}: IPlatformIcon) => {

  return (
      <div className="relative cursor-pointer">
          <div className="bg-transparentblack absolute inset-0 hover:bg-transparent transition ease-in-out duration-300"></div>
          <Image additionalClass="rounded-lg" width="w-[50px]" alt="streaming icon" imageSource={platform.icon}/>
      </div>
  );
};

export default PlatformIcon;

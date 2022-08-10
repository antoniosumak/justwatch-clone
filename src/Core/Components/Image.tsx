import React, { FunctionComponent } from 'react';

interface IImage {
    width: string;
    height?: string;
    alt: string;
    imageSource: string;
    additionalClass?: string;
    method?: Function
}

const Image = ({width,height,alt, imageSource, additionalClass, method}: IImage) => {

  return (
      <figure className={`${width} ${height} ${additionalClass} overflow-hidden`}>
          <img className=" w-full h-full object-fit" src={imageSource} alt={alt} onClick={(e)=>method && method(e)} />
      </figure>
  );
};

export default Image;

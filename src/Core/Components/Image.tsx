import React, { FunctionComponent } from 'react';

interface IImage {
    width: string;
    height?: string;
    alt: string;
    imageSource: string;
    additionalClass?: string;
}

const Image = ({width,height,alt, imageSource, additionalClass}: IImage) => {

  return (
      <figure className={`${width} ${height} ${additionalClass} overflow-hidden`}>
          <img className="w-full h-full object-fill" src={imageSource} alt={alt} loading="lazy"/>
      </figure>
  );
};

export default Image;

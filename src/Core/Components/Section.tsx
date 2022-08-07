import React, { FunctionComponent } from 'react';
import Image from './Image';
import Tiles from '/images/bg-tiles.webp';

interface ISection {
  children: React.ReactNode;
  hasImage?: boolean;
  additionalClass?: string;
  noPadding?: boolean;
  noTopPadding?: boolean;
}

const Section = ({
  children,
  hasImage,
  additionalClass,
  noPadding,
  noTopPadding,
}: ISection) => {
  return (
    <>
      {hasImage && (
        <Image
          width='w-[130%]'
          alt='background tiles'
          imageSource={Tiles}
          additionalClass='absolute'
        />
      )}
      <section
        className={`relative pt-16 ${
          noTopPadding && 'pt-0'
        } overflow-x-hidden ${additionalClass}`}
      >
        <div
          className={`max-w-[1752px] w-full mx-auto ${!noPadding && 'px-16'} `}
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default Section;

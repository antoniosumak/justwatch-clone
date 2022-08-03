import React, { FunctionComponent } from 'react';

interface ISubtitles {
    subtitle: string;
}

const Subtitles = ({subtitle}: ISubtitles) => {

  return (
      <h2 className="text-[40px] text-white font-bold my-[30px]">{subtitle}</h2>
  );
};

export default Subtitles;

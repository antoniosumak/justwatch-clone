import React, { FunctionComponent } from 'react';

interface ISubtitles {
    subtitle: string;
    fontSize?: string;
    marginBottom?: string;
    noMargin?: boolean;
}

const Subtitles = ({subtitle, fontSize, marginBottom, noMargin}: ISubtitles) => {

  return (
      <h2 className={`${fontSize ? fontSize : 'text-[40px]'} text-center lg:text-start text-white font-bold ${!noMargin ? "my-[30px]" : "my-0"} ${marginBottom}`}>{subtitle}</h2>
  );
};

export default Subtitles;

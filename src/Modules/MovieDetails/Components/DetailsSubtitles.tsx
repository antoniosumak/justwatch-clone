import React, { FunctionComponent } from 'react';

interface IDetailsSubtitles {
    subtitle: string;
    fontSize?: string;
    margin?: string;
    noMargin?: boolean;
}

const DetailsSubtitles = ({subtitle, fontSize, margin}: IDetailsSubtitles) => {

    return (
        <h2 className={`${fontSize ? fontSize : 'text-[15px]'} text-iconcolorsecundary font-bold ${margin}`}>{subtitle}</h2>
    );
};

export default DetailsSubtitles;

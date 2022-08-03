import React, { FunctionComponent } from 'react';

interface IHeroTitle {
    title: string;
}

const HeroTitle= ({title}: IHeroTitle) => {

  return (<h1 className="text-[40px] lg:text-[50px] 2xl:text-[60px] text-white font-bold">{title}</h1>);
};

export default HeroTitle;

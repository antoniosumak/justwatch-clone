import React, { FunctionComponent } from 'react';
import Section from "../../../Core/Components/Section";
import Grid from "../../../Core/Components/Grid";
import Image from "../../../Core/Components/Image";
import Television from "/images/tv.webp"
import HeroTitle from "../Components/HeroTitle";
import Button from "../../../Core/Components/Button";
import Description from "../Components/Description";
import StreamingPlatforms from "../Components/StreamingPlatforms";
import RecommendationsImage from "/images/recommendations.webp"
import SearchImage from "/images/search.webp"
import Subtitles from "../Components/Subtitles";
import AccentSubtitle from "../../../Core/Components/AccentSubtitle";
import WatchlistImage from "/images/watchlist.webp"
import JustWatchLogo from "/images/logo.svg"
import CarouselComponent from "../Components/CarouselComponent";

interface ILandingIndex {}

const LandingIndex = ({} : ILandingIndex) => {
  return (
     <>
         <Section hasImage>
             <Grid numberOfColumns={2}>
                 <div>
                     <HeroTitle title="Sve vaše platforme za streaming u jednoj aplikaciji."/>
                     <Description description="Dobijte personalizirane preoporuke za filmove i serije dostupne na platformi Netflix, Amazon Prime Video, Ivi i još mnogo toga."/>
                     <div className="space-x-[20px]">
                         <Button text="Otkrijte filmove i serije" type="primary"/>
                         <Button text="Funkcionalnosti" type="outline"/>
                     </div>
                     <StreamingPlatforms/>
                 </div>
                 <div className="relative">
                     <Image additionalClass="transform -translate-y-28 -translate-x-16 w-full h-full" width="w-[1100px]" alt="Television image" imageSource={Television}/>
                     <div className="absolute top-[33px]  left-[180px] w-[1100px] text-white">
                        <CarouselComponent/>
                     </div>
                 </div>
             </Grid>
         </Section>
         <Section additionalClass="transform -translate-y-40" noPadding>
             <Grid additionalClass="place-items-center" numberOfColumns={2}>
                 <Image width="w-[857px]" alt="Recommendations image" imageSource={RecommendationsImage}/>
                 <div className="max-w-[50%]">
                     <AccentSubtitle subtitle="SVE NA JEDNOM MJESTU"/>
                     <Subtitles subtitle="Vaš vodič kroz streaming"/>
                     <Description  description="Dobijte osobne preporuke i pogledajte što ima novo na vašim omiljenim platformama za streaming."/>
                 </div>
             </Grid>
         </Section>
         <Section additionalClass="transform" noPadding>
             <Grid additionalClass="place-items-center" numberOfColumns={2}>
                 <div className="max-w-[50%]">
                     <AccentSubtitle subtitle="JEDNO PRETRAŽIVANJE"/>
                     <Subtitles subtitle="Jedno pretraživanje da vlada svima"/>
                     <Description  description="Nema više prebacivanja s platforme na platforme kako biste pronašli dostupne filmove ili serije."/>
                 </div>
                 <Image width="w-[851px]" alt="Search image" imageSource={SearchImage}/>
             </Grid>
         </Section>
         <Section additionalClass="transform" noPadding>
             <Grid additionalClass="place-items-center" numberOfColumns={2}>
                 <Image width="w-[851px]" alt="Watchlist image" imageSource={WatchlistImage}/>
                 <div className="max-w-[50%]">
                     <AccentSubtitle subtitle="JEDNA LISTA"/>
                     <Subtitles subtitle="Spojite sve svoje liste"/>
                     <Description  description="Na jednoj listi na svim svojim uređajima pratite serije i filmove koje želite gledati"/>
                 </div>
             </Grid>
         </Section>
         <Section>
             <Grid additionalClass="max-w-[50rem] mx-auto place-items-center text-center px-[60px] mb-[5rem]" numberOfColumns={1}>
                 <Image width="w-[56px]" alt="Just watch logo" imageSource={JustWatchLogo}/>
                 <Subtitles subtitle="Na jednom mjestu dobijte preporuke sa svih svojih omiljenih platformi za streaming"/>
                 <Button text="Otkrijte filmove i serije" type="primary"/>
             </Grid>
         </Section>
     </>
  );
};

export default LandingIndex;

import React, { FunctionComponent } from 'react';
import Grid from "../../../Core/Components/Grid";
import Carousel  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "../../../Core/Components/Image";
import SmallWille from "/images/smallville.webp"

interface ICarouselComponent {}

const CarouselComponent = ({} : ICarouselComponent) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };

  return (
     <Grid numberOfColumns={1} additionalClass="w-[1100px] overflow-x-hidden">
         <Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} itemClass="!w-full">
           <div>
               <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
           </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
         </Carousel>
         <Carousel responsive={responsive} swipeable={false} draggable={false} showDots={true} itemClass="!w-full">
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
             <div>
                 <Image width="w-[123.5px]" alt="Poster" imageSource={SmallWille}/>
             </div>
         </Carousel>
     </Grid>
  );
};

export default CarouselComponent;

import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './Core/Components/Header';
import { Route, Routes } from 'react-router-dom';
import LandingIndex from './Modules/LandingPage/Pages/LandingIndex';
import ForYouIndex from './Modules/ForYou/Pages/ForYouIndex';
import MovieDetailsIndex from "./Modules/MovieDetails/Pages/MovieDetailsIndex";
import 'react-multi-carousel/lib/styles.css';
import FavouritesIndex from "./Modules/Favourites/Pages/FavouritesIndex";

function App() {

  return (
    <>
      <div className='bg-black h-full w-full'>
        <Header />
        <Routes>
          <Route path='/' element={<LandingIndex />} />
          <Route path='/for-you' element={<ForYouIndex />} />
          <Route path="/details/:id" element={<MovieDetailsIndex/>}/>
          <Route path="/favourites" element={<FavouritesIndex/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
